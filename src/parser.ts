import { BouquetSpec } from './models/bouquet-spec'
import { Flower } from './models/flower'

/**
 * Validate and parse bouquet spec.
 * @param {string} line
 * @return {?BouquetSpec} new BouquetSpec or null if line is invalid
 */
export function parseBouquetSpecLine(line) {
  // @TODO complete this
  throw new Error('Not implemented')
}

/**
 * Validate and parse flower.
 * @param {string} line
 * @return {?Flower} new Flower or null if line is invalid
 */
export function parseFlowerLine(line) {
  // @TODO complete this
  throw new Error('Not implemented')
}

export const parser = {
  parseFlowerLine,
  parseBouquetSpecLine,
}