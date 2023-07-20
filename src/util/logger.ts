import { LogLevel } from '@beecode/msh-logger'
import { LoggerStrategyConsole } from '@beecode/msh-logger/logger-strategy/console/index.js'
import { ConsoleLogStrategySimple } from '@beecode/msh-logger/logger-strategy/console/log-strategy/simple.js'
import { singletonPattern } from '@beecode/msh-util/singleton/pattern.js'

import { config } from '#/util/config.js'

export const logger = singletonPattern(() => {
	return new LoggerStrategyConsole({
		consoleLogStrategy: new ConsoleLogStrategySimple(),
		logLevel: LogLevel[config().logLevel.toUpperCase()] ?? LogLevel.INFO,
	})
})
