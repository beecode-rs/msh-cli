import path from 'path'
import { ExecuteResult, ProjectExecutable } from 'src/model/command/interfaces'
import { shellService } from 'src/service/shell-service'
import { config } from 'src/util/config'

export class NpmInstallProjectCommand implements ProjectExecutable {
	protected readonly _rootDir: string

	constructor(params?: { rootDir?: string }) {
		const { rootDir = config().rootDir } = params ?? {}
		this._rootDir = rootDir
	}

	async execute(project: string): Promise<ExecuteResult[]> {
		try {
			shellService.cd(path.join(this._rootDir, project))
			const cmd = 'npm i -s'
			const result = await shellService.exec(cmd)

			// return [{ name: project, stringResult: result.stdout, errorMessage: result.stdout }]
			return [{ errorMessage: result.stdout, name: project, stringResult: 'npm install successful' }]
		} catch (err: any) {
			return [{ errorMessage: err.message }]
		}
	}
}
