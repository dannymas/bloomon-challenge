import { BouquetSpec } from './models/bouquet-spec'
import { Flower } from './models/flower'

const regexChars = /[a-zA-Z]/g
const regexNumbers = /\d+/g

/**
 * Validate and parse bouquet spec.
 * @param {string} line
 * @return {?BouquetSpec} new BouquetSpec or null if line is invalid
 */
export function parseBouquetSpecLine(line: string) {
  if (!line) { return }

  const chars: string[] = line.match(regexChars)!
  const numbers: string[] = line.match(regexNumbers)!

  const name = chars.shift()
  const size = chars.shift()
  const flowers = chars.reduce((acc, curr, index) => {
    acc[curr] = parseInt(numbers[index], 10)
    return acc
  }, Object.create(null))

  if (!name || !size) {
    throw new Error('Wrong BouquetSpecLine')
  }

  return new BouquetSpec(line, name, size, flowers)

}

/**
 * Validate and parse flower.
 * @param {string} line
 * @return {?Flower} new Flower or null if line is invalid
 */
export function parseFlowerLine(line: string) {
  if (!line) { return }

  if (!line[0] || !line[1]) {
    throw new Error('Wrong FlowerLine')
  }

  return new Flower(line[0], line[1])
}

export const parser = {
  parseFlowerLine,
  parseBouquetSpecLine,
}
