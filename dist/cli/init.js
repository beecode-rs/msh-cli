"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const mz_1 = require("mz");
const path_1 = __importDefault(require("path"));
const config_1 = require("src/util/config");
const init = {
    configFileLocation: () => path_1.default.join(config_1.config.rootDir, '.msh'),
    checkIfConfigExists: () => mz_1.fs.existsSync(init.configFileLocation()),
    create: () => {
        if (init.checkIfConfigExists()) {
            // util.log('Config already exists')
            return;
        }
        mz_1.fs.writeFileSync(init.configFileLocation(), init.default());
    },
    default: () => {
        return `
PROJECTS=[] # ["auth","auth-web","node-common",...]
GIT_TEAM= # git team name
GIT_PROJECT_PREFIX= # project prefix
PULL_REQUEST_SKIP=[] # ["type-definitions","node-common",...]
DOCKER_BASE_IMAGES=[] # ["bc-node-nginx","bc-node","bc-nginx","bc-base"]

CMD_GIT_ENABLED=true
CMD_CLEAN_ENABLED=true
CMD_NPM_ENABLED=true
CMD_PR_ENABLED=true
`;
    },
};
exports.init = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvaW5pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwyQkFBdUI7QUFDdkIsZ0RBQXVCO0FBQ3ZCLDRDQUF3QztBQUV4QyxNQUFNLElBQUksR0FBRztJQUNYLGtCQUFrQixFQUFFLEdBQVcsRUFBRSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDbkUsbUJBQW1CLEVBQUUsR0FBWSxFQUFFLENBQUMsT0FBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1RSxNQUFNLEVBQUUsR0FBUyxFQUFFO1FBQ2pCLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUU7WUFDOUIsb0NBQW9DO1lBQ3BDLE9BQU07U0FDUDtRQUNELE9BQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7SUFDN0QsQ0FBQztJQUNELE9BQU8sRUFBRSxHQUFXLEVBQUU7UUFDcEIsT0FBTzs7Ozs7Ozs7Ozs7Q0FXVixDQUFBO0lBQ0MsQ0FBQztDQUNGLENBQUE7QUFFUSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZzIH0gZnJvbSAnbXonXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuXG5jb25zdCBpbml0ID0ge1xuICBjb25maWdGaWxlTG9jYXRpb246ICgpOiBzdHJpbmcgPT4gcGF0aC5qb2luKGNvbmZpZy5yb290RGlyLCAnLm1zaCcpLFxuICBjaGVja0lmQ29uZmlnRXhpc3RzOiAoKTogYm9vbGVhbiA9PiBmcy5leGlzdHNTeW5jKGluaXQuY29uZmlnRmlsZUxvY2F0aW9uKCkpLFxuICBjcmVhdGU6ICgpOiB2b2lkID0+IHtcbiAgICBpZiAoaW5pdC5jaGVja0lmQ29uZmlnRXhpc3RzKCkpIHtcbiAgICAgIC8vIHV0aWwubG9nKCdDb25maWcgYWxyZWFkeSBleGlzdHMnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGZzLndyaXRlRmlsZVN5bmMoaW5pdC5jb25maWdGaWxlTG9jYXRpb24oKSwgaW5pdC5kZWZhdWx0KCkpXG4gIH0sXG4gIGRlZmF1bHQ6ICgpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBgXG5QUk9KRUNUUz1bXSAjIFtcImF1dGhcIixcImF1dGgtd2ViXCIsXCJub2RlLWNvbW1vblwiLC4uLl1cbkdJVF9URUFNPSAjIGdpdCB0ZWFtIG5hbWVcbkdJVF9QUk9KRUNUX1BSRUZJWD0gIyBwcm9qZWN0IHByZWZpeFxuUFVMTF9SRVFVRVNUX1NLSVA9W10gIyBbXCJ0eXBlLWRlZmluaXRpb25zXCIsXCJub2RlLWNvbW1vblwiLC4uLl1cbkRPQ0tFUl9CQVNFX0lNQUdFUz1bXSAjIFtcImJjLW5vZGUtbmdpbnhcIixcImJjLW5vZGVcIixcImJjLW5naW54XCIsXCJiYy1iYXNlXCJdXG5cbkNNRF9HSVRfRU5BQkxFRD10cnVlXG5DTURfQ0xFQU5fRU5BQkxFRD10cnVlXG5DTURfTlBNX0VOQUJMRUQ9dHJ1ZVxuQ01EX1BSX0VOQUJMRUQ9dHJ1ZVxuYFxuICB9LFxufVxuXG5leHBvcnQgeyBpbml0IH1cbiJdfQ==