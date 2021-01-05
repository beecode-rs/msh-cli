import minimist from 'minimist'
import minimistOptions, { Options } from 'minimist-options'

export type argsServiceParams = {
  args: string[]
  options: Options
}

export type appCommands = minimist.ParsedArgs & {
  'http-server': boolean
  H: boolean
  tui: boolean
  T: boolean
}
export type cliCommands = minimist.ParsedArgs & {
  help: boolean
  h: boolean
  version: boolean
  v: boolean
  git: boolean
  g: boolean
  npm: boolean
  n: boolean
  init: boolean
  i: boolean
}
export const argsService = {
  appCommandOptions: {
    'http-server': {
      type: 'boolean',
      alias: 'H',
    },
    tui: {
      type: 'boolean',
      alias: 'T',
    },
  } as Options,
  cliCommandOptions: {
    help: {
      type: 'boolean',
      alias: 'h',
    },
    version: {
      type: 'boolean',
      alias: 'v',
    },
    git: {
      type: 'boolean',
      alias: 'g',
    },
    npm: {
      type: 'boolean',
      alias: 'n',
    },
    init: {
      type: 'boolean',
      alias: 'i',
    },
  } as Options,
  selectedCommandCount: (params: argsServiceParams): number => {
    const miniOpts = minimistOptions(params.options)
    const commands = argsService.argToObject(params)
    return (miniOpts.boolean as string[]).reduce((sum, cmd) => {
      return commands[cmd] ? ++sum : sum
    }, 0)
  },
  argToObject: <T extends minimist.ParsedArgs>(params: argsServiceParams): T => {
    const miniOpts = minimistOptions(params.options)
    return minimist<T>(params.args, miniOpts)
  },
}
