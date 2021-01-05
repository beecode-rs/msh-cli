import cVer from 'compare-versions'
import stringify from 'fast-json-stable-stringify'
import fs from 'fs'
import * as path from 'path'
import { IProjectCommand } from 'src/model/command/project-command'
import { NpmInstallProjectCommand } from 'src/model/command/project-command/npm-install-project-command'
import { config } from 'src/util/config'
import { logger } from 'src/util/logger'

export const npmService = {
  createCommand: (commandType: string): IProjectCommand => {
    switch (commandType) {
      case 'install':
        return new NpmInstallProjectCommand({ rootDir: config.rootDir })
      default:
        throw new Error(`Unsupported npm command [${commandType}]`)
    }
  },
  global: (): void => {
    throw new Error('not implemented yet')
    const gDeps = {}
    const gDepsNewer = {}
    const gDepsOlder = {}

    for (const project of config.projects) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const packageJs = require(path.join(process.cwd(), `${project}/package.json`))
      const allDeps = { ...packageJs.dependencies, ...packageJs.devDependencies }
      for (const key of Object.keys(allDeps)) {
        gDeps[key] = gDeps[key] || {}
        gDeps[key][allDeps[key]] = gDeps[key][allDeps[key]] || []
        gDeps[key][allDeps[key]].push(project)
      }
    }

    for (const key of Object.keys(gDeps)) {
      if (Object.keys(gDeps[key]).length > 1) {
        const sortedVersionsAsc = Object.keys(gDeps[key]).sort(cVer)
        gDepsNewer[key] = sortedVersionsAsc.pop()

        for (const oldVer of sortedVersionsAsc) {
          gDepsOlder[key] = gDepsOlder[key] || {}
          gDepsOlder[key][oldVer] = gDeps[key][oldVer]
        }
      } else {
        gDepsNewer[key] = Object.keys(gDeps[key])[0]
      }
    }

    // revert gDepsOlder result to print by project
    const gDepsReverted = {}
    for (const pack of Object.keys(gDepsOlder)) {
      const versions = gDepsOlder[pack]
      for (const ver of Object.keys(versions)) {
        const projs = versions[ver]
        for (const proj of projs) {
          gDepsReverted[proj] = gDepsReverted[proj] || {}
          gDepsReverted[proj][pack] = ver
        }
      }
    }
    logger.debug('Old Deps (by project):')
    logger.debug(JSON.stringify(gDepsReverted, null, 2))
    logger.debug('Old Deps (by package):')
    logger.debug(JSON.stringify(gDepsOlder, null, 2))

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const globalPackageJs = require(path.join(process.cwd(), `package.json`))
    globalPackageJs.dependencies = gDepsNewer

    fs.writeFileSync('package.json', JSON.stringify(JSON.parse(stringify(globalPackageJs)), null, 4), 'utf8')
  },
}
