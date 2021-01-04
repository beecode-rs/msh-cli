import path from 'path'
import { ProjectCommand } from 'src/model/project-command'
import { PrintStdMessage, cliService } from 'src/service/cli-service'


export type ProjectNpmInstallCommandParams = {
  rootDir: string
}

export class ProjectNpmInstallCommand implements ProjectCommand{
  private readonly __rootDir: string

  constructor(params: ProjectNpmInstallCommandParams) {
    this.__rootDir = params.rootDir
  }

  public async execute(project: string): Promise<PrintStdMessage> {
    cliService.cd(path.join(this.__rootDir, project))
    const cmd = `npm i -s`
    const result = await cliService.exec({ cmd })
    return { [project]: result }
  }

}
