import { LogLevel } from '@beecode/msh-logger'
import { PresetConsoleSimpleString } from '@beecode/msh-logger/controller/preset/console-simple-string'
import { singletonPattern } from '@beecode/msh-util/singleton/pattern'

// import { config } from '#src/util/config'

export const logger = singletonPattern(() => {
	return new PresetConsoleSimpleString({
		logLevel: LogLevel.DEBUG,
		// TODO: ESM: fix debug level
		// logLevel: (LogLevel[config().logLevel.toUpperCase()] as any) ?? LogLevel.INFO,
	})
})
