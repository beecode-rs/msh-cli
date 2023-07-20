import { singletonPattern } from '@beecode/msh-util/singleton/pattern.js'

const packageJson = require('../../package.json') // eslint-disable-line

export const constant = singletonPattern(() =>
	Object.freeze({
		projectName: packageJson.name,
		projectVersion: packageJson.version,
	})
)
