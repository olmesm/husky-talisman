import fs from 'fs'

const { DEBUG } = process.env

export const fileExists = fileName => new Promise((resolve, reject) => {
  fs.access(fileName, fs.constants.R_OK, (err) => {
    if (err) {
      if (DEBUG) { console.trace(`${fileName} is not readable`, { err }) }

      resolve(false)
      return
    }

    resolve(true)
  })
})
