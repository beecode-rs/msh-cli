import './index-init'

import { appStarterFactory } from '@beecode/msh-node-app'
import { CliApp } from 'src/app/cli-app'
import { updateNotifierUtil } from 'src/util/update-notifier-util'

updateNotifierUtil.check()

appStarterFactory(CliApp)
  .start()
  .catch((err) => console.log(err)) // eslint-disable-line no-console
