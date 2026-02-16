import { type ExecuteResult, type ProjectExecutable } from '#src/model/command/interfaces.js'
import { shellService } from '#src/service/shell-service.js'
import { config } from '#src/util/config.js'

export class GitCloneProjectCommand implements ProjectExecutable {
	protected readonly _rootDir: string
	protected readonly _gitHost: string
	protected readonly _gitTeam: string
	protected readonly _projectPrefix: string

	constructor(params?: { rootDir?: string; gitHost?: string; gitTeam?: string; projectPrefix?: string }) {
		const {
			gitHost = config().git.host,
			gitTeam = config().git.team,
			projectPrefix = config().git.projectPrefix ?? '',
			rootDir = config().rootDir,
		} = params ?? {}
		if (!gitTeam) {
			throw new Error('You need to specify GIT_TEAM env variable')
		}
		this._rootDir = rootDir
		this._gitHost = gitHost
		this._gitTeam = gitTeam
		this._projectPrefix = projectPrefix
	}

	async execute(project: string): Promise<ExecuteResult[]> {
		try {
			const gitProject = [this._projectPrefix, project].filter(Boolean).join('-')
			const cmd = `git clone git@${this._gitHost}:${this._gitTeam}/${gitProject}.git ${project}`
			const result = await shellService.exec(cmd)

			return [{ errorMessage: result.stderr, name: project, stringResult: result.stdout }]
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			return [{ errorMessage: err.message }]
		}
	}
}
