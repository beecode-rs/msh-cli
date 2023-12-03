import { LogLevel } from '@beecode/msh-logger'
import { LoggerStrategyConsole } from '@beecode/msh-logger/logger-strategy/console/index'
import { ConsoleLogStrategySimple } from '@beecode/msh-logger/logger-strategy/console/log-strategy/simple'
import { singletonPattern } from '@beecode/msh-util/singleton/pattern'

import { config } from '#/util/config'

export const logger = singletonPattern(() => {
	return new LoggerStrategyConsole({
		consoleLogStrategy: new ConsoleLogStrategySimple(),
		logLevel: (LogLevel[config().logLevel.toUpperCase()] as any) ?? LogLevel.INFO,
	})
})
