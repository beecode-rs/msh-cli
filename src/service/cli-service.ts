import chalk from 'chalk'
import minimist, { ParsedArgs } from 'minimist'
import minimistOptions from 'minimist-options'
import { ExecResult, cliDal } from 'src/dal'
import { helpService } from 'src/service'
import { constant } from 'src/util'

export type PrintStdMessage = {
  [key: string]: ExecResult
}

export const cliService = {
  exitAfterCommandExecuted: false,
  _commands: minimistOptions({
    help: {
      type: 'boolean',
      alias: 'h',
    },
    version: {
      type: 'boolean',
      alias: 'v',
    },
    git: {
      type: 'boolean',
      alias: 'g',
    },
    npm: {
      type: 'boolean',
      alias: 'n',
    },
  }),
  _options: minimistOptions({
    arguments: 'string',
  }),
  _selectedCommandCount: (argv: ParsedArgs): number =>
    (cliService._commands.boolean as string[]).reduce((sum, cmd) => {
      return argv[cmd] ? ++sum : sum
    }, 0),
  cliArguments: (): minimist.Opts => {
    return { ...cliService._options, ...cliService._commands }
  },
  commandIsSelected: (argv: ParsedArgs): boolean => {
    const cmdCount = cliService._selectedCommandCount(argv)
    if (cmdCount > 1) throw new Error('ERROR !!! - CLI can run only one cmd at a time')
    return cmdCount === 1
  },
  printStdMessage: (...messageArgs: PrintStdMessage[]): void => {
    const messages = cliService._joinResults(messageArgs)
    for (const [key, execResult] of Object.entries(messages)) {
      cliDal.print(chalk.cyan(key))
      for (const msg of execResult.stdout.split('\n')) cliDal.print(msg)
      for (const msg of execResult.stderr.split('\n')) cliDal.print(chalk.red(msg))
    }
  },
  _joinResults: (results: PrintStdMessage[]): PrintStdMessage => {
    return results.reduce((agg, cur) => {
      agg = Object.assign(agg, cur)
      return agg
    }, {} as PrintStdMessage)
  },
  printError: (message: string): void => {
    cliDal.print(chalk.red(message))
  },
  printVersion: (): void => cliDal.print(`v${constant.projectVersion}`),
  printHelp: (): void => cliDal.print(helpService.text()),
  exec: cliDal.exec,
  cd: cliDal.cd,
}
