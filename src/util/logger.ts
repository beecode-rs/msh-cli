const logMessage = (type: string) => (msg, obj?: any): void => {
  // eslint-disable-next-line no-console
  if (obj) console.log(`${type}: ${msg}\n`, obj)
  // eslint-disable-next-line no-console
  else console.log(`${type}: ${msg}`)
}

export const logger = {
  debug: (msg, obj?: any): void => logMessage('debug')(msg, obj),
  info: (msg, obj?: any): void => logMessage('info')(msg, obj),
  warn: (msg, obj?: any): void => logMessage('warn')(msg, obj),
  error: (msg, obj?: any): void => logMessage('error')(msg, obj),
  child: (): any => logger,
}
