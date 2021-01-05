import MshNodeEnv from '@beecode/msh-node-env'
import { ConsoleLogger, LogLevel } from '@beecode/msh-node-log'
import dotenv from 'dotenv'

const env = MshNodeEnv({ loggerStrategy: new ConsoleLogger(LogLevel.INFO) })
dotenv.config({ path: './.msh' })
dotenv.config({ path: './.msh-user' })

export const config = Object.freeze({
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
  logLevel: env('LOG_LEVEL').string.default('error').required,
})
