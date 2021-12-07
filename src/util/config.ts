import { MshNodeEnv } from '@beecode/msh-node-env'
import { NodeEnvLogger } from '@beecode/msh-node-env/lib/util/logger'
import { LogLevelType } from '@beecode/msh-node-log'
import { SimpleConsoleLog } from '@beecode/msh-node-log/lib/console-log-strategy/simple-console-log'
import { ConsoleLogger } from '@beecode/msh-node-log/lib/console-logger'
import { cacheUtil } from '@beecode/msh-node-util/lib/cache-util'
import dotenv from 'dotenv'

NodeEnvLogger(new ConsoleLogger({ logLevel: LogLevelType.INFO, consoleLogStrategy: new SimpleConsoleLog() }))

const env = MshNodeEnv()
dotenv.config({ path: './.msh' })
dotenv.config({ path: './.msh-user' })

export const config = cacheUtil.singleton(() =>
  Object.freeze({
    rootDir: env('ROOT_DIR').string.default(process.cwd()).required,
    projects: env('PROJECTS').json<string[]>().default([]).required,
    pullRequestSkip: env('PULL_REQUEST_SKIP').json<string[]>().default([]).required,
    git: {
      team: env('GIT_TEAM').string.optional,
      projectPrefix: env('GIT_PROJECT_PREFIX').string.optional,
      host: env('GIT_HOST').string.default('bitbucket.org').required,
      username: env('GIT_USERNAME').string.optional,
      password: env('GIT_PASSWORD').string.optional,
    },
    // dockerBaseImages: env('DOCKER_BASE_IMAGES').json<string[]>().default([]).optional,
    cmd: {
      gitEnabled: env('CMD_GIT_ENABLED').boolean.default(true).required,
      // cleanEnabled: env('CMD_CLEAN_ENABLED').boolean.default(false).required,
      npmEnabled: env('CMD_NPM_ENABLED').boolean.default(true).required,
      // prEnabled: env('CMD_PR_ENABLED').boolean.default(false).required,
    },
    npm: {
      globalIgnorePackages: env('NPM_GLOBAL_IGNORE_PACKAGES').json<string[]>().default([]).required,
    },
    logLevel: env('LOG_LEVEL').string.default('error').required,
  })
)
