import chalk from 'chalk'

import { type ExecResult, shellDal } from '#src/dal/shell-dal'

export type PrintStdMessage = Record<string, ExecResult>

// TODO refactor object and use class instead
export const shellService = {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	_joinResults: (results: PrintStdMessage[]): PrintStdMessage => {
		return results.reduce<PrintStdMessage>((agg, cur) => {
			agg = Object.assign(agg, cur)

			return agg
		}, {})
	},
	cd: shellDal.cd,
	exec: shellDal.exec,
	print: shellDal.print,
	printError: (message: string): void => {
		shellDal.print(chalk.red(message))
	},
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

			if (stdout.trim() !== '') {
				stdout.split('\n').forEach((msg) => shellService.print(msg))
			}
			if (stderr.trim() !== '') {
				stderr.split('\n').forEach((msg) => shellService.printError(msg))
			}
		})
	},
	printSuccess: (message: string): void => {
		shellDal.print(chalk.green(message))
	},
}
