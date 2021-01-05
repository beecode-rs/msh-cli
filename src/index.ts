import 'module-alias/register'
import 'source-map-support/register'

const unhandledFn = (errorType) => (err): void => {
  // eslint-disable-next-line no-console
  console.error(errorType, err)
  process.exit(1)
}

process.on('uncaughtException', unhandledFn('Uncaught Exception'))
process.on('unhandledRejection', unhandledFn('Unhandled Rejection'))

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('src/app').app.start()
