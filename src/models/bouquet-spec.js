/**
 * Bouquet spec.
 * @class
 */
class BouquetSpec {
  /**
   * Default constructor.
   * @param {string} name
   * @param {string} size
   * @param {Object} flowers Map of flower name to quantity.
   */
  constructor(name, size, flowers) {
    this.name = name
    this.size = size
    this.flowers = flowers
  }
}

module.exports = BouquetSpec
