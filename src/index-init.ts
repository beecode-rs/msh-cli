import 'source-map-support/register'
import { setAppBootLogger } from '@beecode/msh-app-boot/util/logger.js'

import { logger } from '#/util/logger.js'

process.on('uncaughtException', (error) => logger().error('Uncaught Exception', { error }))
process.on('unhandledRejection', (error) => logger().error('Unhandled Rejection', { error }))

setAppBootLogger(logger())
