import { ParsedArgs } from 'minimist'
import { gitService } from 'src/service/git-service'

export const gitController = {
  router: async (argv: ParsedArgs): Promise<void> => {
    switch (true) {
      case argv._[0] === 'status':
        return gitService.status()
      case argv._[0] === 'fetch':
        return gitService.fetch()
      case argv._[0] === 'pull':
        return gitService.pull()
      case argv._[0] === 'clone':
        return gitService.clone()
      default:
        throw new Error(`Unknown git command selected!`)
    }
  },
}
