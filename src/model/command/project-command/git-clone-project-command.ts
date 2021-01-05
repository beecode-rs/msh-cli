import { ExecResult } from 'src/dal/shell-dal'
import { IProjectCommand } from 'src/model/command/project-command'
import { PrintStdMessage, shellService } from 'src/service/shell-service'

export type ProjectGitCloneCommandParams = {
  rootDir: string
  gitHost: string
  gitTeam: string
  projectPrefix?: string
}

export class GitCloneProjectCommand implements IProjectCommand {
  private readonly __rootDir: string
  private readonly __gitHost: string
  private readonly __gitTeam: string
  private readonly __projectPrefix: string

  constructor(params: ProjectGitCloneCommandParams) {
    this.__rootDir = params.rootDir
    this.__gitHost = params.gitHost
    this.__gitTeam = params.gitTeam
    this.__projectPrefix = params.projectPrefix ?? ''
  }

  public async execute(project: string): Promise<ExecResult> {
    const gitProject = [this.__projectPrefix, project].filter(Boolean).join('-')
    const cmd = `git clone git@${this.__gitHost}:${this.__gitTeam}/${gitProject}.git ${project}`
    return shellService.exec(cmd)
  }
}
