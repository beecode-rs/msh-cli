import { mshEnv } from '@beecode/msh-env'
import { setEnvLogger } from '@beecode/msh-env/dist/util/logger'
import { LogLevel } from '@beecode/msh-logger'
import { LoggerStrategyConsole } from '@beecode/msh-logger/dist/logger-strategy/console'
import { ConsoleLogStrategySimple } from '@beecode/msh-logger/dist/logger-strategy/console/log-strategy/simple'
import { singletonPattern } from '@beecode/msh-util/dist/singleton/pattern'
import dotenv from 'dotenv'

setEnvLogger(new LoggerStrategyConsole({ consoleLogStrategy: new ConsoleLogStrategySimple(), logLevel: LogLevel.INFO }))

const env = mshEnv()
dotenv.config({ path: './.msh' })
dotenv.config({ path: './.msh-user' })

export const config = singletonPattern(() => {
	return {
		// dockerBaseImages: env('DOCKER_BASE_IMAGES').json<string[]>().default([]).optional,
		cmd: {
			gitEnabled: env('CMD_GIT_ENABLED').boolean.default(true).required,
			// cleanEnabled: env('CMD_CLEAN_ENABLED').boolean.default(false).required,
			npmEnabled: env('CMD_NPM_ENABLED').boolean.default(true).required,
			// prEnabled: env('CMD_PR_ENABLED').boolean.default(false).required,
		},

		git: {
			host: env('GIT_HOST').string.default('bitbucket.org').required,
			password: env('GIT_PASSWORD').string.optional,
			projectPrefix: env('GIT_PROJECT_PREFIX').string.optional,
			team: env('GIT_TEAM').string.optional,
			username: env('GIT_USERNAME').string.optional,
		},

		logLevel: env('LOG_LEVEL').string.default('error').required,

		npm: {
			globalIgnorePackages: env('NPM_GLOBAL_IGNORE_PACKAGES').json<string[]>().default([]).required,
		},

		projects: env('PROJECTS').json<string[]>().default([]).required,
		pullRequestSkip: env('PULL_REQUEST_SKIP').json<string[]>().default([]).required,
		rootDir: env('ROOT_DIR').string.default(process.cwd()).required,
	} as const
})
