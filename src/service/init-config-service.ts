import { fs } from 'mz'
import path from 'path'
import { config } from 'src/util/config'

export const initConfigService = {
  configFileLocation: (): string => path.join(config.rootDir, '.msh'),
  configFileExists: (): boolean => fs.existsSync(initConfigService.configFileLocation()),
  tryToCreateConfig: async (): Promise<void> => {
    if (initConfigService.configFileExists()) throw new Error('Config already exists')
    await fs.writeFile(initConfigService.configFileLocation(), initConfigService.configDefaultValue())
  },
  configDefaultValue: (): string =>
    [
      '# ROOT_DIR - [optional] default is the folder where msh is executed',
      '#ROOT_DIR=',
      '',
      '# PROJECT - [required] ex: ["auth","auth-web","node-common",...]',
      'PROJECTS=[]',
      '',
      '# GIT_TEAM - [required] git team name',
      '#GIT_TEAM=',
      '',
      '# GIT_PROJECT_PREFIX - [optional] ex: msh // if project is msh-node-env you can use node-env in PROJECT',
      '#GIT_PROJECT_PREFIX=',
      // 'PULL_REQUEST_SKIP=[] # ["type-definitions","node-common",...]',
      // 'DOCKER_BASE_IMAGES=[] # ["bc-node-nginx","bc-node","bc-nginx","bc-base"]',
      '',
      '#CMD_GIT_ENABLED=true',
      '#CMD_NPM_ENABLED=true',
      // 'CMD_CLEAN_ENABLED=true',
      // 'CMD_PR_ENABLED=true',
      '',
      '#LOG_LEVEL=error',
      '',
      '## move to .msh-user',
      '#GIT_USERNAME=',
      '#GIT_PASSWORD=',
    ].join('\n'),
}
