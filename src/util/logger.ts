import { config } from 'src/util'

export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
}

const logMessage = (type: string) => {
  return (msg: string, obj?: any): void => {
    if (!logger._shouldLog(type)) return
    // eslint-disable-next-line no-console
    console.log(`${type.toUpperCase()}: ${msg}`)
    // eslint-disable-next-line no-console
    if (obj) console.log(obj)
  }
}

export const logger = {
  debug: (msg: string, obj?: any): void => {
    logMessage(LogLevel.DEBUG)(msg, obj)
  },
  info: (msg: string, obj?: any): void => {
    logMessage(LogLevel.INFO)(msg, obj)
  },
  warn: (msg: string, obj?: any): void => {
    logMessage(LogLevel.WARN)(msg, obj)
  },
  error: (msg: string, obj?: any): void => {
    logMessage(LogLevel.ERROR)(msg, obj)
  },
  child: (): any => logger,
  _logLevelToInt: (logLevel: string): number => {
    switch (logLevel) {
      case LogLevel.ERROR:
        return 0
      case LogLevel.WARN:
        return 1
      case LogLevel.INFO:
        return 2
      case LogLevel.DEBUG:
        return 4
      default:
        throw new Error(`Unknown log lever [${logLevel}]`)
    }
  },
  _shouldLog: (currentLevel: string): boolean => {
    return logger._logLevelToInt(config.logLevel) >= logger._logLevelToInt(currentLevel)
  },
}
