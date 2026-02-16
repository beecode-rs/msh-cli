import { type ExecuteResult, type ProjectExecutable } from '#src/model/command/interfaces.js'
import { shellService } from '#src/service/shell-service.js'
import { config } from '#src/util/config.js'

export enum GitSimpleCommand {
	STATUS = 'status',
	FETCH = 'fetch',
	PULL = 'pull',
}

export class GitSimpleProjectCommand implements ProjectExecutable {
	protected readonly _simpleGitCommand: GitSimpleCommand
	protected readonly _rootDir: string

	constructor(params: { gitSimpleCommand: GitSimpleCommand; rootDir?: string }) {
		const { gitSimpleCommand, rootDir = config().rootDir } = params
		this._simpleGitCommand = gitSimpleCommand
		this._rootDir = rootDir
	}

	async execute(project: string): Promise<ExecuteResult[]> {
		try {
			const cmd = `git -C ${this._rootDir}/${project} ${this._simpleGitCommand}`
			const result = await shellService.exec(cmd)

			return [{ errorMessage: result.stderr, name: project, stringResult: result.stdout }]
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			return [{ errorMessage: err.message }]
		}
	}
}
