"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initConfigService = void 0;
const mz_1 = require("mz");
const path_1 = __importDefault(require("path"));
const config_1 = require("../util/config");
exports.initConfigService = {
    configDefaultValue: () => [
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
    configFileExists: () => mz_1.fs.existsSync(exports.initConfigService.configFileLocation()),
    configFileLocation: () => path_1.default.join((0, config_1.config)().rootDir, '.msh'),
    tryToCreateConfig: async () => {
        if (exports.initConfigService.configFileExists()) {
            throw new Error('Config already exists');
        }
        await mz_1.fs.writeFile(exports.initConfigService.configFileLocation(), exports.initConfigService.configDefaultValue());
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1jb25maWctc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL2luaXQtY29uZmlnLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMkJBQXVCO0FBQ3ZCLGdEQUF1QjtBQUN2Qiw0Q0FBd0M7QUFFM0IsUUFBQSxpQkFBaUIsR0FBRztJQUNoQyxrQkFBa0IsRUFBRSxHQUFXLEVBQUUsQ0FDaEM7UUFDQyxxRUFBcUU7UUFDckUsWUFBWTtRQUNaLEVBQUU7UUFDRixrRUFBa0U7UUFDbEUsYUFBYTtRQUNiLEVBQUU7UUFDRix1Q0FBdUM7UUFDdkMsWUFBWTtRQUNaLEVBQUU7UUFDRix5R0FBeUc7UUFDekcsc0JBQXNCO1FBQ3RCLG1FQUFtRTtRQUNuRSw4RUFBOEU7UUFDOUUsRUFBRTtRQUNGLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsNEJBQTRCO1FBQzVCLHlCQUF5QjtRQUN6QixFQUFFO1FBQ0Ysa0JBQWtCO1FBQ2xCLEVBQUU7UUFDRixzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtLQUNoQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFYixnQkFBZ0IsRUFBRSxHQUFZLEVBQUUsQ0FBQyxPQUFFLENBQUMsVUFBVSxDQUFDLHlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFFdEYsa0JBQWtCLEVBQUUsR0FBVyxFQUFFLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFBLGVBQU0sR0FBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFFckUsaUJBQWlCLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQzVDLElBQUkseUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUN6QyxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUE7U0FDeEM7UUFDRCxNQUFNLE9BQUUsQ0FBQyxTQUFTLENBQUMseUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsRUFBRSx5QkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUE7SUFDbkcsQ0FBQztDQUNELENBQUEifQ==