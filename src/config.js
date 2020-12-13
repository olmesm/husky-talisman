import { join } from 'path'

import { isWindows } from './is-windows'

export const PLATFORMS = {
  MAC_OS: {
    matchSnippet: 'dar',
    name: 'darwin'
  },
  LINUX: {
    matchSnippet: 'lin',
    name: 'linux'
  },
  WINDOWS: {
    matchSnippet: 'win',
    name: 'windows'
  }
}

export const ARCHITECTURES = {
  THREE_EIGHT_SIX: {
    matchSnippet: '386',
    name: '386'
  },
  SIXTY_FOUR: {
    matchSnippet: '64',
    name: 'amd64'
  }
}

export const { arch, platform } = process

export const ACCEPTABLE_INPUT = {
  PRE_COMMIT: 'pre-commit',
  PRE_PUSH: 'pre-push',
  INSTALL: 'install'
}

export const MESSAGES = {
  BAD_ARGUMENT: 'Sorry - I don\'t see or recognise a supplied argument:\n',
  NULL_OR_UNDEFINED: 'appears to be null or undefined\n',
  INSTALL_ERROR: 'there was an error installing this package\n',
  FAILED: 'The requested operation failed\n'
}

export const VERSION_LOG = '.talisman_version'
export const TALISMAN_VERSION = 'v1.11.0'
export const PACKAGE_NAME = 'husky-talisman'

const BINARY_NAME = `talisman${isWindows ? '.exe' : ''}`
export const UTF8 = 'utf8'

const PROJECT_ROOT = process.env.PWD || process.env.INIT_CWD
const PACKAGE_ROOT = join(PROJECT_ROOT, 'node_modules', PACKAGE_NAME)
export const BINARY_PATH = join(PACKAGE_ROOT, BINARY_NAME)
export const VERSION_LOG_PATH = join(PACKAGE_ROOT, VERSION_LOG)
