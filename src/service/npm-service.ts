import cVer from 'compare-versions'
import stringify from 'fast-json-stable-stringify'
import fs from 'fs'
import * as path from 'path'
import { PrintStdMessage, cliService } from 'src/service'
import { config, logger } from 'src/util'

export const npmService = {
  install: async (): Promise<void> => {
    const promises = config.projects.map((project) => {
      return new Promise<PrintStdMessage>((resolve, rejects) => {
        cliService.cd(project)
        const cmd = `npm i -s`
        cliService
          .exec({ cmd })
          .then((result) => {
            logger.debug(`exec done for project [${project}]`)
            logger.debug(JSON.stringify({ [project]: result }))
            resolve({ [project]: result })
          })
          .catch(rejects)
        cliService.cd('..')
      })
    })
    const results = await Promise.all(promises)
    cliService.printStdMessage(...results)
  },
  global: (): void => {
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
