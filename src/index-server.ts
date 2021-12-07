import './index-init'

import { appStarterFactory } from '@beecode/msh-node-app'
import { HttpServerApp } from 'src/app/http-server-app'

appStarterFactory(HttpServerApp)
  .start()
  .catch((err) => console.log(err)) // eslint-disable-line no-console
