import { singletonPattern } from '@beecode/msh-util/singleton/pattern'

// @ts-expect-error
import packageJson from '#packageJson' assert { type: 'json' }

export const constant = singletonPattern(() =>
	Object.freeze({
		projectName: packageJson.name,
		projectVersion: packageJson.version,
	})
)
