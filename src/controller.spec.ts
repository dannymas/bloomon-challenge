import { ReadLine } from 'readline'

import { controller } from './controller'
import { BouquetSpec } from './models'
import { BouquetSpecStore, FlowerStore } from './stores'

const BouquetSpecStoreMock = {
  add: jest.fn(),
  specs: [new BouquetSpec('AL2a', 'A', 'L', { a: 2 })],
}

const FlowerStoreMock = {
  add: jest.fn(),
  storage: {
    cL: 1,
    aL: 2,
    aS: 1,
  },
}

const FailingFlowerStoreMock = {
  add: jest.fn().mockImplementation(() => { throw new Error() }),
  storage: {
    cL: 1,
    aL: 2,
    aS: 1,
  },
}

const ProcessMock = {
  exit: jest.fn(),
  stderr: {
    write: jest.fn(),
  },
  stdout: {
    write: jest.fn(),
  },
}

const ReadlineMock = {
  write: jest.fn(),
}

const input = `AL2a

cL
aL
aS
aL
`

describe('controller works', () => {
  let instance

  beforeEach(() => {
    instance = controller(
      BouquetSpecStoreMock as any as BouquetSpecStore,
      FlowerStoreMock as any as FlowerStore,
      ReadlineMock as any as ReadLine,
      ProcessMock as any as NodeJS.Process,
    )
  })

  it('works', () => {
    jest.spyOn(ProcessMock.stdout, 'write')
    input.split('\n').forEach((i) => instance.processLine(i))
    expect(ProcessMock.stdout.write).toHaveBeenCalledWith('AL2a is ready!\n')
  })
})

describe('controller exits when adding flowers fails', () => {
  let instance

  beforeEach(() => {
    instance = controller(
      BouquetSpecStoreMock as any as BouquetSpecStore,
      FailingFlowerStoreMock as any as FlowerStore,
      ReadlineMock as any as ReadLine,
      ProcessMock as any as NodeJS.Process,
    )
  })

  it('fails', () => {
    jest.spyOn(ProcessMock, 'exit')
    input.split('\n').forEach((i) => instance.processLine(i))
    expect(ProcessMock.exit).toHaveBeenCalledWith(1)
  })
})
