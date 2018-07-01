import { IStorageMapping } from '../models'
import { Flower } from '../models/flower'

/**
 * Simulate the flower storage facility.
 */
export class FlowerStore {
  // Maximum capacity of the storage facility.
  public static readonly DEFAULT_MAX_FLOWERS = 256

  public storage: IStorageMapping = Object.create(null)

  /**
   * Add a flower.
   * @param {Object} flower
   */
  public add(flower: Flower) {
    if (this.count() === FlowerStore.DEFAULT_MAX_FLOWERS) {
      throw new Error('Maximum FlowerStore Capacity')
    }

    this.storage[`${flower.name}${flower.size}`] = this.storage[`${flower.name}${flower.size}`] || 0
    this.storage[`${flower.name}${flower.size}`]++
  }

  public count() {
    return Object.keys(this.storage).reduce((acc, curr) => {
      acc += this.storage[curr]
      return acc
    }, 0)
  }
}
