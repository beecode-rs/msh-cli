import chalk from 'chalk'
import { ExecResult, cliDal } from 'src/dal'
import { helpService } from 'src/service/help-service'
import { constant } from 'src/util/constant'

export type PrintStdMessage = {
  [key: string]: ExecResult
}

export const cliService = {
  exitAfterCommandExecuted: false,
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
  printSuccess: (message): void => {
    cliDal.print(chalk.green(message))
  },
  printVersion: (): void => cliDal.print(`v${constant.projectVersion}`),
  printHelp: (): void => cliDal.print(helpService.text()),
  exec: cliDal.exec,
  cd: cliDal.cd,
}
