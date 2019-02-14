import { downloadTalisman } from './download-talisman'

import {
  arch,
  ARCHITECTURES,
  platform as osPlatform,
  PLATFORMS
} from './config'

const { DEBUG } = process.env

const matchSnippet = (name, list) => {
  if (DEBUG) { console.trace({ name, list }) }

  const match = Object.keys(list)
    .find(objectName => name.includes(list[objectName].matchSnippet))

  if (!match) { throw new Error('couldn\'t match list') }

  return list[match].name
}

export const install = version => {
  const architecture = matchSnippet(arch, ARCHITECTURES)
  const platform = matchSnippet(osPlatform, PLATFORMS)

  if (DEBUG) { console.trace({ version, architecture, platform }) }

  return downloadTalisman({ version, platform, architecture })
}
