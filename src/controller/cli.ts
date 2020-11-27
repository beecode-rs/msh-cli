import { ParsedArgs } from 'minimist'
import { cliService } from 'src/service/cli-service'
import { gitService } from 'src/service/git-service'

export const cli = {
  router: async (argv: ParsedArgs): Promise<void> => {
    switch (true) {
      case argv.help:
        return cliService.printHelp()
      case argv.version:
        return cliService.printVersion()
      case argv.git:
        return cli._gitRouter(argv)
      default:
        throw new Error(`Unknown command selected!`)
    }
  },
  _gitRouter: async (argv: ParsedArgs): Promise<void> => {
    switch (true) {
      case argv._[0] === 'status':
        return gitService.status()
      default:
        throw new Error(`Unknown command selected!`)
    }
  }
}
