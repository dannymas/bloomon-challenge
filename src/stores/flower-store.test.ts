import { Flower } from '../models'
import { FlowerStore } from './flower-store'

describe('FlowerStore', () => {
  let instance: FlowerStore
  let flower: Flower

  beforeEach(() => {
    instance = new FlowerStore()
    flower = new Flower('a', 'L')
  })

  it('adds a flower', () => {
    instance.add(flower)
    expect(instance.count()).toBe(1)
    expect(instance.storage[`${flower.name}${flower.size}`]).toBe(1)
  })

  it('adds two flower', () => {
    instance.add(flower)
    expect(instance.count()).toBe(1)
    expect(instance.storage[`${flower.name}${flower.size}`]).toBe(1)
    instance.add(flower)
    expect(instance.count()).toBe(2)
    expect(instance.storage[`${flower.name}${flower.size}`]).toBe(2)
  })

  it('throws on more than ' + FlowerStore.DEFAULT_MAX_FLOWERS, () => {
    for (let i = 0; i < 256; i++) {
      instance.add(flower)
    }

    expect(() => instance.add(flower)).toThrow()
  })
})
