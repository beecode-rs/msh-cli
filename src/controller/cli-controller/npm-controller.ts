import { ParsedArgs } from 'minimist'
import { npmService } from 'src/service'

export const npmController = {
  router: async (argv: ParsedArgs): Promise<void> => {
    switch (true) {
      case argv._[0] === 'install':
        return npmService.install()
      case argv._[0] === 'global':
        return npmService.global()
      default:
        throw new Error(`Unknown npm command selected!`)
    }
  },
}
