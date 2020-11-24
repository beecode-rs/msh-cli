import 'module-alias/register'
import 'source-map-support/register'

import minimist from 'minimist'
import { cli } from 'src/controller/cli'
import { MainMenu } from 'src/main-menu'
import { cliService } from 'src/service/cli-service'
import { util } from 'src/util'

const argv = minimist(process.argv.slice(2), { ...cliService.options, ...cliService.commands })
;(async (): Promise<void> => {
  if (cliService.hasOneCommandSelected(argv)) {
    // if (cli.allowPrintConfigForCmd(argv)) util.printConfig()
    await cli.router(argv)
  } else {
    // util.printConfig()
    await new MainMenu().run()
  }
})()
