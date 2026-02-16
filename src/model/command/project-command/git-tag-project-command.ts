import { type ExecuteResult, type ProjectExecutable } from '#src/model/command/interfaces.js'
import { shellService } from '#src/service/shell-service.js'
import { config } from '#src/util/config.js'

export class GitTagProjectCommand implements ProjectExecutable {
	protected readonly _rootDir: string
	protected readonly _filterByName?: string

	constructor(params: { filterByName?: string; rootDir?: string }) {
		const { filterByName, rootDir = config().rootDir } = params
		this._rootDir = rootDir
		this._filterByName = filterByName
	}

	async execute(project: string): Promise<ExecuteResult[]> {
		try {
			const filterLine = this._getFilterLine()
			const cmd = `git -C ${this._rootDir}/${project} tag -n9${filterLine} | cat`
			const result = await shellService.exec(cmd)

			return [{ errorMessage: result.stderr, name: project, stringResult: result.stdout }]
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			return [{ errorMessage: err.message }]
		}
	}

	protected _getFilterLine(): string {
		if (!this._filterByName) {
			return ''
		}

		return ` -l "${this._filterByName}"`
	}
}
