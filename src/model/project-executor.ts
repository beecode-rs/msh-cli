import { ProjectCommand } from 'src/model/project-command'
import { cliService } from 'src/service/cli-service'
import { shellService } from 'src/service/shell-service'

export type ProjectExecutorParams = {
  projects: string[]
  projectExecuteCmd: ProjectCommand
}

export class ProjectExecutor {
  private readonly __projects: string[]
  private readonly __projectExecuteCmd: ProjectCommand

  constructor(params: ProjectExecutorParams) {
    this.__projects = params.projects
    this.__projectExecuteCmd = params.projectExecuteCmd
  }

  public async execute(): Promise<void> {
    const promises = this.__projects.map(async (pr) => {
      const result = await this.__projectExecuteCmd.execute(pr)
      shellService.printSuccess(`${pr} - DONE`)
      return result
    })
    const results = await Promise.all(promises)
    cliService.printStdMessage(...results)
  }
}
