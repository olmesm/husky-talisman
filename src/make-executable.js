import { execProcess } from './exec-process'

import { BINARY_PATH } from './config'
import { isWindows } from './is-windows'

const { DEBUG } = process.env

export const makeExecutable = () => {
  if (DEBUG) { console.trace({ BINARY_PATH, isWindows }) }

  if (isWindows) { return }

  return execProcess({
    cmd: 'chmod',
    args: [
      '+x',
      BINARY_PATH
    ],
    failOnError: true
  })
}
