import chalk from 'chalk'
import { ExecResult, cliDal } from 'src/dal'
import { helpService } from 'src/service/help-service'
import { shellService } from 'src/service/shell-service'
import { constant } from 'src/util/constant'

export type PrintStdMessage = {
  [key: string]: ExecResult
}

export const cliService = {
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
  printVersion: (): void => shellService.print(`v${constant.projectVersion}`),
  printHelp: (): void => shellService.print(helpService.text()),
}
