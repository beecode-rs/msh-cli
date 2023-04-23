import './index-init'

import { AppStarter } from '@beecode/msh-app-boot'
import { HttpServerApp } from 'src/app/http-server-app'

new AppStarter(new HttpServerApp()).start().catch((err) => console.log(err)) // eslint-disable-line no-console
