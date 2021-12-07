import './index-init'

import { appStarterFactory } from '@beecode/msh-node-app'
import { TuiApp } from 'src/app/tui-app'

appStarterFactory(TuiApp)
  .start()
  .catch((err) => console.log(err)) // eslint-disable-line no-console
