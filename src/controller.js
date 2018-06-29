const { parseBouquetSpecLine, parseFlowerLine } = require('./parser')

module.exports = (bouquetSpecStore, flowerStore, readline) => {
  /**
   * Bouquet specs are input first, then flowers.
   */
  let readingBouquetSpecs = true

  /**
   * Produce a bouquet from the available flowers, if possible.
   */
  function outputBouquet() {
    // @TODO complete this and use `readline.write`
    throw new Error('Not implemented')
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
      if (bouquetSpec) {
        bouquetSpecStore.add(bouquetSpec)
      }
      return
    }

    const flower = parseFlowerLine(line)
    if (flower) {
      flowerStore.add(flower)
    }
  }

  return {
    processLine
  }
}
