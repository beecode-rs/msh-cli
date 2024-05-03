import updateNotifier from 'update-notifier'

// @ts-expect-error
import packageJson from '#packageJson' assert { type: 'json' }

export const updateNotifierUtil = {
	check: async (): Promise<void> => {
		updateNotifier({ pkg: packageJson }).notify()
	},
}
