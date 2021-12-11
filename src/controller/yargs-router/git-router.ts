import { GitCloneProjectCommand } from 'src/model/command/project-command/git-clone-project-command'
import { GitSimpleCommand, GitSimpleProjectCommand } from 'src/model/command/project-command/git-simple-project-command'
import { GitTagProjectCommand } from 'src/model/command/project-command/git-tag-project-command'
import { projectCommandFactory } from 'src/model/command/project-command/project-command'
import { terminalWrapperFactory } from 'src/service/terminal-wrapper'
import yargs from 'yargs'

export const gitRouter = {
  commands: (yargs: yargs.Argv): yargs.Argv => {
    gitRouter._clone(yargs)
    gitRouter._pull(yargs)
    gitRouter._fetch(yargs)
    gitRouter._status(yargs)
    gitRouter._tag(yargs)
    return yargs
  },
  _clone: (yargs: yargs.Argv): void => {
    yargs.command({
      command: 'clone',
      describe: 'execute git clone',
      handler: async (argv: any) => {
        await terminalWrapperFactory({
          command: projectCommandFactory({ command: new GitCloneProjectCommand() }),
        }).execute()
      },
    })
  },
  _pull: (yargs: yargs.Argv): void => {
    yargs.command({
      command: 'pull',
      describe: 'execute git pull',
      handler: async (argv: any) => {
        await terminalWrapperFactory({
          command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.PULL }) }),
        }).execute()
      },
    })
  },
  _fetch: (yargs: yargs.Argv): void => {
    yargs.command({
      command: 'fetch',
      describe: 'execute git fetch',
      handler: async (argv: any) => {
        await terminalWrapperFactory({
          command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.FETCH }) }),
        }).execute()
      },
    })
  },
  _status: (yargs: yargs.Argv): void => {
    yargs.command({
      command: 'status',
      describe: 'execute git status',
      handler: async (argv: any) => {
        await terminalWrapperFactory({
          command: projectCommandFactory({ command: new GitSimpleProjectCommand({ gitSimpleCommand: GitSimpleCommand.STATUS }) }),
        }).execute()
      },
    })
  },
  _tag: (yargs: yargs.Argv): void => {
    yargs.command({
      command: 'tag',
      describe: 'execute git tag',
      builder: (y) => {
        y.options('name', {
          alias: 'n',
          describe: 'filter tag by name (* is allowed)',
          type: 'string',
        })
        return y
      },
      handler: async (argv: any) => {
        await terminalWrapperFactory({
          command: projectCommandFactory({ command: new GitTagProjectCommand({ filterByName: argv.name }) }),
        }).execute()
      },
    })
  },
}
