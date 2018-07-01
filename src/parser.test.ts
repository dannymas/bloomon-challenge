import { BouquetSpec } from './models/bouquet-spec'
import { Flower } from './models/flower'
import { parser } from './parser'

describe('parser', () => {
  describe('#parseBouquetSpecLine', () => {
    it('does not throw error', () => {
      expect(parser.parseBouquetSpecLine).not.toThrow()
    })

    it('throws error on wrong bouquet spec', () => {
      const wrongSpec = 'X'
      expect(() => parser.parseBouquetSpecLine(wrongSpec)).toThrow()
    })

    it('parses line and returns correct bouquet spec', () => {
      const bouquetSpecLine = 'BL15b1c'
      const bouquetSpec = parser.parseBouquetSpecLine(bouquetSpecLine)
      expect(bouquetSpec).toEqual(
        new BouquetSpec(bouquetSpecLine, 'B', 'L', { b: 15, c: 1 }),
      )
    })
  })

  describe('#parseFlowerLine', () => {
    it('does not throw error', () => {
      expect(parser.parseFlowerLine).not.toThrow()
    })

    it('throws error on wrong flower spec', () => {
      const wrongSpec = 'X'
      expect(() => parser.parseFlowerLine(wrongSpec)).toThrow()
    })

    it('parses line and returns correct flower spec', () => {
      const flowerLine = 'cS'
      const flower = parser.parseFlowerLine(flowerLine)
      expect(flower).toEqual(new Flower('c', 'S'))
    })
  })
})
