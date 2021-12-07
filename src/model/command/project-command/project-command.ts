import { ExecuteResult, ProjectExecutable } from 'src/model/command/interfaces'
// import { shellService } from 'src/service/shell-service'
import { config } from 'src/util/config'

export class ProjectCommand {
  protected readonly _projects: string[]
  protected readonly _command: ProjectExecutable

  public constructor(params: { command: ProjectExecutable; projects?: string[] }) {
    const { command, projects = config().projects } = params
    this._projects = projects
    this._command = command
  }

  public async execute(): Promise<ExecuteResult[]> {
    if (this._projects.length === 0) throw new Error('No Project selected, check .msh config file for [PROJECTS=]')
    const promises = this._projects.map((project) => this._command.execute(project))
    return (await Promise.all(promises)).flat()
  }
}

export const projectCommandFactory = (...params: ConstructorParameters<typeof ProjectCommand>): ProjectCommand =>
  new ProjectCommand(...params)
