import './index-init'

import { appStarterFactory } from '@beecode/msh-node-app'
import { CliApp } from 'src/app/cli-app'

appStarterFactory(CliApp)
  .start()
  .catch((err) => console.log(err)) // eslint-disable-line no-console
