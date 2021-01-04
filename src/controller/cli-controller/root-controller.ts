import { ParsedArgs } from 'minimist'
import { gitController } from 'src/controller/cli-controller/git-controller'
import { npmController } from 'src/controller/cli-controller/npm-controller'
import { cliService } from 'src/service/cli-service'

export const rootController = {
  router: async (argv: ParsedArgs): Promise<void> => {
    switch (true) {
      case argv.help:
        return cliService.printHelp()
      case argv.version:
        return cliService.printVersion()
      case argv.npm:
        return npmController.router(argv)
      case argv.git:
        return gitController.router(argv)
      default:
        throw new Error(`Unknown command selected!`)
    }
  },
}
