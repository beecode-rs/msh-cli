import chalk from 'chalk'
import { ExecResult, shellDal } from 'src/dal/shell-dal'

export type PrintStdMessage = {
  [key: string]: ExecResult
}
export const shellService = {
  exec: shellDal.exec,
  cd: shellDal.cd,
  print: shellDal.print,
  printStdMessage: (...messageArgs: PrintStdMessage[]): void => {
    const messages = shellService._joinResults(messageArgs)

    Object.entries(messages).forEach(([name, { stdout, stderr }]) => {
      const borderChar = '#'
      const borderStars = Array(name.length + 6)
        .fill('')
        .map(() => borderChar)
        .join('')
      shellService.print(borderStars)
      shellService.print(`${borderChar}  ${name}  ${borderChar}`)
      shellService.print(borderStars)

      if (stdout.trim() !== '') stdout.split('\n').forEach((msg) => shellService.print(msg))
      if (stderr.trim() !== '') stderr.split('\n').forEach((msg) => shellService.printError(msg))
    })
  },
  _joinResults: (results: PrintStdMessage[]): PrintStdMessage => {
    return results.reduce((agg, cur) => {
      agg = Object.assign(agg, cur)
      return agg
    }, {} as PrintStdMessage)
  },
  printError: (message: string): void => {
    shellDal.print(chalk.red(message))
  },
  printSuccess: (message: string): void => {
    shellDal.print(chalk.green(message))
  },
}
