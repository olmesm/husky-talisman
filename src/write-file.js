import fs from 'fs'
import { promisify } from 'util'

import { UTF8 } from './config'

const writeFilePromise = promisify(fs.writeFile)

export const writeFile = (fileName, data) => writeFilePromise(fileName, data, UTF8)
