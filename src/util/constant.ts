// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../../package.json')

export const constant = Object.freeze({
  projectName: packageJson.name,
  projectVersion: packageJson.version,
})
