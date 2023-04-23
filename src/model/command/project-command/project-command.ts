import { ExecuteResult, ProjectExecutable } from 'src/model/command/interfaces'
import { config } from 'src/util/config'

export class ProjectCommand {
	protected readonly _projects: string[]
	protected readonly _command: ProjectExecutable

	constructor(params: { command: ProjectExecutable; projects?: string[] }) {
		const { command, projects = config().projects } = params
		this._projects = projects
		this._command = command
	}

	async execute(): Promise<ExecuteResult[]> {
		if (this._projects.length === 0) {
			throw new Error('No Project selected, check .msh config file for [PROJECTS=]')
		}
		const promises = this._projects.map((project) => this._command.execute(project))

		return (await Promise.all(promises)).flat()
	}
}

export const projectCommandFactory = (...params: ConstructorParameters<typeof ProjectCommand>): ProjectCommand =>
	new ProjectCommand(...params)
