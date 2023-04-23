import { Executable } from 'src/model/command/interfaces'
import { shellService } from 'src/service/shell-service'

export class TerminalWrapper {
	protected readonly _command: Executable
	constructor(params: { command: Executable }) {
		const { command } = params
		this._command = command
	}

	async execute(): Promise<void> {
		const results = await this._command.execute()
		const printableStdMessages = results.map((r) => ({
			[r.name ?? '<cmd>']: { errorOccurred: !!r.errorMessage, stderr: r.errorMessage ?? '', stdout: r.stringResult ?? '' },
		}))
		shellService.printStdMessage(...printableStdMessages)
	}
}

export const terminalWrapperFactory = (...params: ConstructorParameters<typeof TerminalWrapper>): TerminalWrapper =>
	new TerminalWrapper(...params)
