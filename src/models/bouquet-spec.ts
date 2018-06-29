import { Flower } from "./flower"

/**
 * Bouquet spec.
 * @class
 */
export class BouquetSpec {
  /**
   * Default constructor.
   * @param {string} name
   * @param {string} size
   * @param {Object} flowers Map of flower name to quantity.
   */
  name: string
  size: number
  flowers: Flower[]

  constructor(name, size, flowers) {
    this.name = name
    this.size = size
    this.flowers = flowers
  }
}
