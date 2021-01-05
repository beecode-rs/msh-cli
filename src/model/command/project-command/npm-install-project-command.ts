import path from 'path'
import { ExecResult } from 'src/dal/shell-dal'
import { IProjectCommand } from 'src/model/command/project-command'
import { shellService } from 'src/service/shell-service'

export type NpmInstallProjectCommandParams = {
  rootDir: string
}

export class NpmInstallProjectCommand implements IProjectCommand {
  private readonly __rootDir: string

  constructor(params: NpmInstallProjectCommandParams) {
    this.__rootDir = params.rootDir
  }

  public async execute(project: string): Promise<ExecResult> {
    shellService.cd(path.join(this.__rootDir, project))
    const cmd = 'npm i -s'
    return shellService.exec(cmd)
  }
}
