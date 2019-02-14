import { spawn } from 'child_process'

const CLOSE = 'close'
const DATA = 'data'
const { DEBUG } = process.env

export const execProcess = ({ cmd, args, failOnError, logOutput }) => new Promise((resolve, reject) => {
  if (DEBUG) { console.trace({ cmd, args, failOnError, logOutput }) }

  const proc = spawn(cmd, args)
  const output = {
    message: '',
    error: '',
    exitCode: undefined
  }

  const addData = data => {
    if (DEBUG === true) { console.trace(`stderr: ${data}`) }

    output.message += data
  }

  const addError = data => {
    if (DEBUG === true) { console.trace(`stderr: ${data}`) }
    output.error += data

    if (failOnError) {
      reject(output)
    }
  }

  const close = exitCode => {
    if (DEBUG === true) { console.trace(`close: ${exitCode}`) }
    output.exitCode = exitCode

    if (logOutput) {
      console.log(output.message)
      console.log(output.error)
    }

    if (failOnError && exitCode !== 0) {
      reject(output)
    }

    resolve(output)
  }

  proc.stdout.on(DATA, addData)

  proc.stderr.on(DATA, addError)

  proc.on(CLOSE, close)
})
