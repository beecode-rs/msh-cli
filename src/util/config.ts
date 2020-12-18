import MshNodeEnv, { logger } from '@beecode/msh-node-env'
import dotenv from 'dotenv'

const env = MshNodeEnv({ loggerStrategy: new logger.ConsoleLogger(logger.LogLevel.INFO) })
dotenv.config({ path: './.msh' })
dotenv.config({ path: './.msh-user' })

export const config = Object.freeze({
  rootDir: env('ROOT_DIR').string.default(process.cwd()).required,
  projects: env('PROJECTS').json().default([]).required as string[],
  pullRequestSkip: env('PULL_REQUEST_SKIP').json().default([]).required,
  git: {
    team: env('GIT_TEAM').string.optional,
    projectPrefix: env('GIT_PROJECT_PREFIX').string.optional,
    host: env('GIT_HOST').string.default('bitbucket.org').required,
    username: env('GIT_USERNAME').string.optional,
    password: env('GIT_PASSWORD').string.optional,
  },
  dockerBaseImages: env('DOCKER_BASE_IMAGES').json().default([]).optional,
  cmd: {
    gitEnabled: env('CMD_GIT_ENABLED').boolean.default(true).required,
    cleanEnabled: env('CMD_CLEAN_ENABLED').boolean.default(true).required,
    npmEnabled: env('CMD_NPM_ENABLED').boolean.default(true).required,
    prEnabled: env('CMD_PR_ENABLED').boolean.default(true).required,
  },
  logLevel: env('LOG_LEVEL').string.default('debug').required,
})
