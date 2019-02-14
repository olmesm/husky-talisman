import { execProcess } from './exec-process'

import { BINARY_PATH } from './config'

const { DEBUG } = process.env

export const runner = argument => {
  if (DEBUG) { console.trace({ BINARY_PATH, argument }) }

  return execProcess({
    cmd: BINARY_PATH,
    args: [
      '--githook',
      argument
    ],
    logOutput: true,
    failOnError: true
  })
}
