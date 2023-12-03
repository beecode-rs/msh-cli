import 'source-map-support/register'
import { setAppBootLogger } from '@beecode/msh-app-boot/util/logger'

import { logger } from '#/util/logger'

process.on('uncaughtException', (error) => logger().error('Uncaught Exception', { error }))
process.on('unhandledRejection', (error) => logger().error('Unhandled Rejection', { error }))

setAppBootLogger(logger())
