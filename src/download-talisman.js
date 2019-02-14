import { execProcess } from './exec-process'

import { BINARY_PATH } from './config'

const { DEBUG } = process.env

export const downloadTalisman = ({ version, platform, architecture }) => {
  const url = `https://github.com/thoughtworks/talisman/releases/download/${version}/talisman_${platform}_${architecture}${platform === 'windows' ? '.exe' : ''}`
  if (DEBUG) { console.trace({ url }) }

  return execProcess({
    cmd: 'curl',
    args: [
      '-L',
      '-o',
      BINARY_PATH,
      url
    ],
    logOutput: true
  })
}
