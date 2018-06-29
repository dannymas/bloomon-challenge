#!/usr/bin/env node

import { createInterface } from 'readline'

import { bouquetSpecStore } from './stores/bouquet-spec-store'
import { flowerStore } from './stores/flower-store'
import { controller } from './controller'

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
})

const _controller = controller(
  bouquetSpecStore,
  flowerStore,
  readline
)

process.stdin.setEncoding('utf8')
readline.setPrompt('')

// Read bouquet specs (designs) and flowers, line by line,
// and output a bouquet when possible.
readline.on('line', _controller.processLine)
