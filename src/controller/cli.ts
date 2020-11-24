import { ParsedArgs } from 'minimist'
import { cliService } from 'src/service/cli-service'

export const cli = {
  router: async (argv: ParsedArgs): Promise<void> => {
    switch (true) {
      case argv.help:
        return cliService.printHelp()
      case argv.version:
        return cliService.printVersion()
      default:
        throw new Error(`Unknown command selected!`)
    }
  },
}
