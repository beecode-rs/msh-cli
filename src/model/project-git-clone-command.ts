import { ProjectCommand } from 'src/model/project-command'
import { PrintStdMessage } from 'src/service/cli-service'
import { shellService } from 'src/service/shell-service'

export type ProjectGitCloneCommandParams = {
  rootDir: string
  gitHost: string
  gitTeam: string
  projectPrefix?: string
}

export class ProjectGitCloneCommand implements ProjectCommand {
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

  public async execute(project: string): Promise<PrintStdMessage> {
    const gitProject = [this.__projectPrefix, project].filter(Boolean).join('-')
    const cmd = `git clone git@${this.__gitHost}:${this.__gitTeam}/${gitProject}.git ${project}`
    const result = await shellService.exec(cmd)
    return { [project]: result }
  }
}
