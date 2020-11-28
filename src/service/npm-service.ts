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
    throw new Error('Not implemented yet')
  },
}
