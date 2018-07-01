#!/usr/bin/env node

import { createInterface } from 'readline'

import { controller as Controller } from './controller'
import { BouquetSpecStore } from './stores/bouquet-spec-store'
import { FlowerStore } from './stores/flower-store'

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const controller = Controller(
  new BouquetSpecStore(),
  new FlowerStore(),
  readline,
  process,
)

process.stdin.setEncoding('utf8')
readline.setPrompt('')

// Read bouquet specs (designs) and flowers, line by line,
// and output a bouquet when possible.
readline.on('line', controller.processLine)
