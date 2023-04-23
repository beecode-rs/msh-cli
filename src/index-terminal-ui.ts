import './index-init'

import { AppStarter } from '@beecode/msh-app-boot'
import { TuiApp } from 'src/app/tui-app'

new AppStarter(new TuiApp()).start().catch((err) => console.log(err)) // eslint-disable-line no-console
