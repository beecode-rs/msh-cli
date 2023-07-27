import './index-init'

import { AppStarter } from '@beecode/msh-app-boot'
import { HttpServerApp } from 'src/app/http-server-app'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
new AppStarter(new HttpServerApp()).start().catch((err: any) => console.log(err)) // eslint-disable-line no-console
