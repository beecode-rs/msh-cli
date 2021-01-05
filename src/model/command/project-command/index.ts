import { ExecResult } from 'src/dal/shell-dal'
import { ICommand } from 'src/model/command'
import { shellService } from 'src/service/shell-service'

export type ProjectExecutorParams = {
  projects: string[]
  projectExecuteCmd: IProjectCommand
}

export interface IProjectCommand {
  execute(project: string): Promise<ExecResult>
}

export class ProjectCommand implements ICommand {
  private readonly __projects: string[]
  private readonly __projectExecuteCmd: IProjectCommand

  constructor(params: ProjectExecutorParams) {
    this.__projects = params.projects
    this.__projectExecuteCmd = params.projectExecuteCmd
  }

  public async execute(): Promise<void> {
    if (this.__projects.length === 0) throw new Error('No Project selected, check .msh config file for [PROJECTS=]')
    const promises = this.__projects.map(async (pr) => {
      const result = await this.__projectExecuteCmd.execute(pr)
      shellService.printSuccess(`${pr} - DONE`)
      return { [pr]: result }
    })
    const results = await Promise.all(promises)
    shellService.printStdMessage(...results)
  }
}
