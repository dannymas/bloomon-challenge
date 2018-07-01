import { ReadLine } from 'readline'

import { parseBouquetSpecLine, parseFlowerLine } from './parser'
import { BouquetSpecStore, FlowerStore } from './stores'

export const controller = (bouquetSpecStore: BouquetSpecStore, flowerStore: FlowerStore, readline: ReadLine, process: NodeJS.Process) => {
  /**
   * Bouquet specs are input first, then flowers.
   */
  let readingBouquetSpecs = true

  /**
   * Produce a bouquet from the available flowers, if possible.
   */
  function outputBouquet() {
    const specs = bouquetSpecStore.specs
    const storage = flowerStore.storage

    for (const spec of specs) {
      const { size, name, flowers } = spec
      if (Object.keys(flowers).every((flower) => storage[`${flower}${size}`] >= flowers[flower])) {
        Object.keys(flowers).forEach((flower) => storage[`${flower}${size}`] -= flowers[flower])
        readline.write(`${spec.spec} is ready!\n`)
      }
    }
  }

  /**
   * Read lines and output bouquets.
   */
  function processLine(line) {
    readLine(line)
    if (!readingBouquetSpecs) {
      outputBouquet()
    }
  }

  /**
   * Read bouquet specs then flowers, line by line.
   */
  function readLine(line) {
    if (readingBouquetSpecs) {
      if (!line) {
        readingBouquetSpecs = false
        return
      }

      const bouquetSpec = parseBouquetSpecLine(line)
      bouquetSpecStore.add(bouquetSpec!)
      return
    }

    try {
      const flower = parseFlowerLine(line)
      flowerStore.add(flower!)
    } catch (e) {
      readline.write(e)
      process.exit(1)
    }
  }

  return {
    processLine,
  }
}
