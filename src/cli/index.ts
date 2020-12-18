import { alias } from 'src/cli/alias'
// import { help } from 'src/cli/help'
// import { init } from 'src/cli/init'
// import Clean = require('src/exec/Clean')
// import Git = require('src/exec/Git')
// import NPM = require('src/exec/NPM')
// import PR = require('src/exec/PR')
import { cliService } from 'src/service/cli-service'
// import { util } from 'src/util'
// import { constant } from 'src/util/constant'

const cli = {
  hasArguments: (argv): boolean => {
    let hasArgs = false
    if (Object.keys(argv).length > 1) hasArgs = true
    if (argv._.length > 0) hasArgs = true

    if (cli.requestRunningMultipleCommands(argv)) {
      // util.log('ERROR !!! - CLI can run only one cmd at a time')
      process.exit()
    }

    if (hasArgs) cliService.exitAfterCommandExecuted = true // TODO use memory dao/service
    return hasArgs
  },
  run: async (argv): Promise<void> => {
    // if (argv.help) help.printHelp()
    // else if (argv.version) util.log(`v${constant.projectVersion}`)
    // else if (argv.init) init.create()
    // else if (argv.clean) await new Clean().run(argv.clean)
    // else if (argv.npm) await new NPM().run('global')
    // else if (argv.pr) await new PR().run('createMergePR')
    // else if (argv.git) await new Git().run(argv.git)
    // else util.log('ERROR !!! - Command not found')
  },
  requestRunningMultipleCommands: (argv): boolean => Object.values(alias).reduce((sum, cmd) => (argv[cmd] ? ++sum : sum), 0) > 1,
  allowPrintConfigForCmd: (argv): boolean => !argv.help && !argv.init && !argv.version,
}

export { cli }
