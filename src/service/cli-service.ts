import chalk from 'chalk'
import { ParsedArgs } from 'minimist'
import minimistOptions from 'minimist-options'
import { helpService } from 'src/service/help-service'
import { util } from 'src/util'
import { constant } from 'src/util/constant'
import { logger } from 'src/util/logger'

export const cliService = {
  exitAfterCommandExecuted: false,
  printMessage: (messages: any): void => {
    for (const [key, val] of Object.entries(messages)) {
      util.log(chalk.cyan(key))
      for (const msg of (val as any).stdout.split('\n')) {
        util.log(msg)
      }
      for (const msg of (val as any).stderr.split('\n')) {
        util.log(chalk.red(msg))
      }
    }
  },
  commands: minimistOptions({
    help: {
      type: 'boolean',
      alias: 'h',
    },
    version: {
      type: 'boolean',
      alias: 'v',
    },
  }),
  options: minimistOptions({
    arguments: 'string',
  }),
  print: (msg: string): void => {
    // eslint-disable-next-line no-console
    console.log(msg)
  },
  hasOneCommandSelected: (argv: ParsedArgs): boolean => {
    const cmdCount = cliService.commandsSelected(argv)
    if (cmdCount > 1) {
      cliService.print('ERROR !!! - CLI can run only one cmd at a time')
      return false
    }
    return cmdCount === 1
  },
  commandsSelected: (argv: ParsedArgs): number =>
    (cliService.commands.boolean as string[]).reduce((sum, cmd) => {
      return argv[cmd] ? ++sum : sum
    }, 0),
  printVersion: (): void => logger.info(`v${constant.projectVersion}`),
  printHelp: (): void => cliService.print(helpService.text()),
}
