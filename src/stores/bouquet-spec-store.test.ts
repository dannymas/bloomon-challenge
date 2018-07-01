import { BouquetSpec } from '../models'
import { BouquetSpecStore } from './bouquet-spec-store'

describe('BouquetSpecStore', () => {
  let instance: BouquetSpecStore
  let bouquetSpec: BouquetSpec
  const spec = 'BL15b1c'

  beforeEach(() => {
    instance = new BouquetSpecStore()
    bouquetSpec = new BouquetSpec(spec, 'B', 'L', { b: 15, c: 1 })
  })

  it('adds a bouquet spec', () => {
    instance.add(bouquetSpec)
    expect(instance.specs[0]).toEqual(bouquetSpec)
  })

  it('does not add a duplicate bouquet spec', () => {
    instance.add(bouquetSpec)
    expect(instance.specs[0]).toEqual(bouquetSpec)
    instance.add(bouquetSpec)
    expect(instance.specs[0]).toEqual(bouquetSpec)
    expect(instance.specs[1]).toBeFalsy()
  })
})
