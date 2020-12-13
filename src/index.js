import { install } from './install'
import { fileExists as installCheck } from './file-exists'
import { makeExecutable } from './make-executable'
import { matchChecksum } from './match-checksum'
import { runner } from './runner'
import { writeFile } from './write-file'

import {
  ACCEPTABLE_INPUT,
  MESSAGES,
  TALISMAN_VERSION,
  VERSION_LOG_PATH
} from './config'

const { DEBUG } = process.env

const runInstaller = async () => {
  console.log('husky-talisman >', ACCEPTABLE_INPUT.INSTALL)

  try {
    await install(TALISMAN_VERSION)
    await matchChecksum()
    await makeExecutable()
    await writeFile(VERSION_LOG_PATH, TALISMAN_VERSION)
  } catch (e) {
    if (DEBUG) { console.trace(e) }

    console.log('husky-talisman >', MESSAGES.INSTALL_ERROR)

    process.exit(1)
  }
}

/**
 * Will be called by the CLI wrapper provided by @pika/plugin-simple-bin
 */
export async function run (args) {
  const argument = args[2]
  try {
    const isAlreadyInstalled = await installCheck(VERSION_LOG_PATH)

    if (!isAlreadyInstalled) {
      await runInstaller(argument)
    }

    switch (argument) {
      case ACCEPTABLE_INPUT.PRE_COMMIT:
        console.log('husky-talisman >', ACCEPTABLE_INPUT.PRE_COMMIT)
        await runner(argument)

        break

      case ACCEPTABLE_INPUT.PRE_PUSH:
        console.log('husky-talisman >', ACCEPTABLE_INPUT.PRE_PUSH)
        await runner(argument)

        break

      case ACCEPTABLE_INPUT.INSTALL:
        await runInstaller(argument)
        break

      default:
        console.log(MESSAGES.BAD_ARGUMENT)
        Object.values(ACCEPTABLE_INPUT)
          .map(i => console.log(i))
    }
  } catch (e) {
    if (DEBUG) { console.trace(e) }

    if (!e.exitCode) {
      console.log('husky-talisman >', MESSAGES.FAILED)
    }

    process.exit(1)
  }

  process.exit(0)
}
