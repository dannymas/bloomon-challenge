import { BouquetSpec } from '../models/bouquet-spec'

/**
 * Store bouquet specs.
 */
export class BouquetSpecStore {
  public specs: BouquetSpec[] = []
  private specsSet = new Set<string>()

  /**
   * Add a bouquet spec if it doesn't exist.
   * @param {Object} bouquetSpec
   */
  public add(bouquetSpec: BouquetSpec) {
    const id = `${bouquetSpec.name}${bouquetSpec.size}`
    if (!this.specsSet.has(id)) {
      this.specsSet.add(id)
      this.specs.push(bouquetSpec)
    }
  }
}
