"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initConfigService = void 0;
const mz_1 = require("mz");
const path_1 = __importDefault(require("path"));
const config_1 = require("src/util/config");
exports.initConfigService = {
    configFileLocation: () => path_1.default.join((0, config_1.config)().rootDir, '.msh'),
    configFileExists: () => mz_1.fs.existsSync(exports.initConfigService.configFileLocation()),
    tryToCreateConfig: async () => {
        if (exports.initConfigService.configFileExists())
            throw new Error('Config already exists');
        await mz_1.fs.writeFile(exports.initConfigService.configFileLocation(), exports.initConfigService.configDefaultValue());
    },
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1jb25maWctc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL2luaXQtY29uZmlnLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMkJBQXVCO0FBQ3ZCLGdEQUF1QjtBQUN2Qiw0Q0FBd0M7QUFFM0IsUUFBQSxpQkFBaUIsR0FBRztJQUMvQixrQkFBa0IsRUFBRSxHQUFXLEVBQUUsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUEsZUFBTSxHQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUNyRSxnQkFBZ0IsRUFBRSxHQUFZLEVBQUUsQ0FBQyxPQUFFLENBQUMsVUFBVSxDQUFDLHlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDdEYsaUJBQWlCLEVBQUUsS0FBSyxJQUFtQixFQUFFO1FBQzNDLElBQUkseUJBQWlCLENBQUMsZ0JBQWdCLEVBQUU7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUE7UUFDbEYsTUFBTSxPQUFFLENBQUMsU0FBUyxDQUFDLHlCQUFpQixDQUFDLGtCQUFrQixFQUFFLEVBQUUseUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFBO0lBQ3BHLENBQUM7SUFDRCxrQkFBa0IsRUFBRSxHQUFXLEVBQUUsQ0FDL0I7UUFDRSxxRUFBcUU7UUFDckUsWUFBWTtRQUNaLEVBQUU7UUFDRixrRUFBa0U7UUFDbEUsYUFBYTtRQUNiLEVBQUU7UUFDRix1Q0FBdUM7UUFDdkMsWUFBWTtRQUNaLEVBQUU7UUFDRix5R0FBeUc7UUFDekcsc0JBQXNCO1FBQ3RCLG1FQUFtRTtRQUNuRSw4RUFBOEU7UUFDOUUsRUFBRTtRQUNGLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsNEJBQTRCO1FBQzVCLHlCQUF5QjtRQUN6QixFQUFFO1FBQ0Ysa0JBQWtCO1FBQ2xCLEVBQUU7UUFDRixzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtLQUNqQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Q0FDZixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnMgfSBmcm9tICdteidcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdzcmMvdXRpbC9jb25maWcnXG5cbmV4cG9ydCBjb25zdCBpbml0Q29uZmlnU2VydmljZSA9IHtcbiAgY29uZmlnRmlsZUxvY2F0aW9uOiAoKTogc3RyaW5nID0+IHBhdGguam9pbihjb25maWcoKS5yb290RGlyLCAnLm1zaCcpLFxuICBjb25maWdGaWxlRXhpc3RzOiAoKTogYm9vbGVhbiA9PiBmcy5leGlzdHNTeW5jKGluaXRDb25maWdTZXJ2aWNlLmNvbmZpZ0ZpbGVMb2NhdGlvbigpKSxcbiAgdHJ5VG9DcmVhdGVDb25maWc6IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBpZiAoaW5pdENvbmZpZ1NlcnZpY2UuY29uZmlnRmlsZUV4aXN0cygpKSB0aHJvdyBuZXcgRXJyb3IoJ0NvbmZpZyBhbHJlYWR5IGV4aXN0cycpXG4gICAgYXdhaXQgZnMud3JpdGVGaWxlKGluaXRDb25maWdTZXJ2aWNlLmNvbmZpZ0ZpbGVMb2NhdGlvbigpLCBpbml0Q29uZmlnU2VydmljZS5jb25maWdEZWZhdWx0VmFsdWUoKSlcbiAgfSxcbiAgY29uZmlnRGVmYXVsdFZhbHVlOiAoKTogc3RyaW5nID0+XG4gICAgW1xuICAgICAgJyMgUk9PVF9ESVIgLSBbb3B0aW9uYWxdIGRlZmF1bHQgaXMgdGhlIGZvbGRlciB3aGVyZSBtc2ggaXMgZXhlY3V0ZWQnLFxuICAgICAgJyNST09UX0RJUj0nLFxuICAgICAgJycsXG4gICAgICAnIyBQUk9KRUNUIC0gW3JlcXVpcmVkXSBleDogW1wiYXV0aFwiLFwiYXV0aC13ZWJcIixcIm5vZGUtY29tbW9uXCIsLi4uXScsXG4gICAgICAnUFJPSkVDVFM9W10nLFxuICAgICAgJycsXG4gICAgICAnIyBHSVRfVEVBTSAtIFtyZXF1aXJlZF0gZ2l0IHRlYW0gbmFtZScsXG4gICAgICAnI0dJVF9URUFNPScsXG4gICAgICAnJyxcbiAgICAgICcjIEdJVF9QUk9KRUNUX1BSRUZJWCAtIFtvcHRpb25hbF0gZXg6IG1zaCAvLyBpZiBwcm9qZWN0IGlzIG1zaC1ub2RlLWVudiB5b3UgY2FuIHVzZSBub2RlLWVudiBpbiBQUk9KRUNUJyxcbiAgICAgICcjR0lUX1BST0pFQ1RfUFJFRklYPScsXG4gICAgICAvLyAnUFVMTF9SRVFVRVNUX1NLSVA9W10gIyBbXCJ0eXBlLWRlZmluaXRpb25zXCIsXCJub2RlLWNvbW1vblwiLC4uLl0nLFxuICAgICAgLy8gJ0RPQ0tFUl9CQVNFX0lNQUdFUz1bXSAjIFtcImJjLW5vZGUtbmdpbnhcIixcImJjLW5vZGVcIixcImJjLW5naW54XCIsXCJiYy1iYXNlXCJdJyxcbiAgICAgICcnLFxuICAgICAgJyNDTURfR0lUX0VOQUJMRUQ9dHJ1ZScsXG4gICAgICAnI0NNRF9OUE1fRU5BQkxFRD10cnVlJyxcbiAgICAgIC8vICdDTURfQ0xFQU5fRU5BQkxFRD10cnVlJyxcbiAgICAgIC8vICdDTURfUFJfRU5BQkxFRD10cnVlJyxcbiAgICAgICcnLFxuICAgICAgJyNMT0dfTEVWRUw9ZXJyb3InLFxuICAgICAgJycsXG4gICAgICAnIyMgbW92ZSB0byAubXNoLXVzZXInLFxuICAgICAgJyNHSVRfVVNFUk5BTUU9JyxcbiAgICAgICcjR0lUX1BBU1NXT1JEPScsXG4gICAgXS5qb2luKCdcXG4nKSxcbn1cbiJdfQ==