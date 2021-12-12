import updateNotifier from 'update-notifier'

const packageJson = require('../../package.json') // eslint-disable-line

export const updateNotifierUtil = {
  check: (): void => {
    updateNotifier({ pkg: packageJson }).notify()
  },
}
