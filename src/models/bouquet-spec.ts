import { IStorageMapping } from './storage-mapping'

/**
 * Bouquet spec.
 * @class
 */
export class BouquetSpec {
  /**
   * Default constructor.
   * @param {string} spec
   * @param {string} name
   * @param {string} size
   * @param {Object} flowers Map of flower name to quantity.
   */
  public spec: string
  public name: string
  public size: string
  public flowers: IStorageMapping

  constructor(spec: string, name: string, size: string, flowers: IStorageMapping) {
    this.spec = spec
    this.name = name
    this.size = size
    this.flowers = flowers
  }
}
