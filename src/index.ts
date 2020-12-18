import 'module-alias/register'
import 'source-map-support/register'

import minimist from 'minimist'
import { cliController } from 'src/controller'
import { cliService } from 'src/service'

const argv = minimist(process.argv.slice(2), cliService.cliArguments())
;(async (): Promise<void> => {
  try {
    if (!cliService.commandIsSelected(argv)) return cliService.printHelp()
    await cliController.rootController.router(argv)
  } catch (err) {
    cliService.printError(err.message)
  }
})()
