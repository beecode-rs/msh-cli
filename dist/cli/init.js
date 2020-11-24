"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const mz_1 = require("mz");
const path_1 = __importDefault(require("path"));
const util_1 = require("src/util");
const config_1 = require("src/util/config");
const init = {
    configFileLocation: () => path_1.default.join(config_1.config.rootDir, '.msh'),
    checkIfConfigExists: () => mz_1.fs.existsSync(init.configFileLocation()),
    create: () => {
        if (init.checkIfConfigExists()) {
            util_1.util.log('Config already exists');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvaW5pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwyQkFBdUI7QUFDdkIsZ0RBQXVCO0FBQ3ZCLG1DQUErQjtBQUMvQiw0Q0FBd0M7QUFFeEMsTUFBTSxJQUFJLEdBQUc7SUFDWCxrQkFBa0IsRUFBRSxHQUFXLEVBQUUsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQ25FLG1CQUFtQixFQUFFLEdBQVksRUFBRSxDQUFDLE9BQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUUsTUFBTSxFQUFFLEdBQVMsRUFBRTtRQUNqQixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO1lBQzlCLFdBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtZQUNqQyxPQUFNO1NBQ1A7UUFDRCxPQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFDRCxPQUFPLEVBQUUsR0FBVyxFQUFFO1FBQ3BCLE9BQU87Ozs7Ozs7Ozs7O0NBV1YsQ0FBQTtJQUNDLENBQUM7Q0FDRixDQUFBO0FBRVEsb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcyB9IGZyb20gJ216J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IHV0aWwgfSBmcm9tICdzcmMvdXRpbCdcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ3NyYy91dGlsL2NvbmZpZydcblxuY29uc3QgaW5pdCA9IHtcbiAgY29uZmlnRmlsZUxvY2F0aW9uOiAoKTogc3RyaW5nID0+IHBhdGguam9pbihjb25maWcucm9vdERpciwgJy5tc2gnKSxcbiAgY2hlY2tJZkNvbmZpZ0V4aXN0czogKCk6IGJvb2xlYW4gPT4gZnMuZXhpc3RzU3luYyhpbml0LmNvbmZpZ0ZpbGVMb2NhdGlvbigpKSxcbiAgY3JlYXRlOiAoKTogdm9pZCA9PiB7XG4gICAgaWYgKGluaXQuY2hlY2tJZkNvbmZpZ0V4aXN0cygpKSB7XG4gICAgICB1dGlsLmxvZygnQ29uZmlnIGFscmVhZHkgZXhpc3RzJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBmcy53cml0ZUZpbGVTeW5jKGluaXQuY29uZmlnRmlsZUxvY2F0aW9uKCksIGluaXQuZGVmYXVsdCgpKVxuICB9LFxuICBkZWZhdWx0OiAoKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gYFxuUFJPSkVDVFM9W10gIyBbXCJhdXRoXCIsXCJhdXRoLXdlYlwiLFwibm9kZS1jb21tb25cIiwuLi5dXG5HSVRfVEVBTT0gIyBnaXQgdGVhbSBuYW1lXG5HSVRfUFJPSkVDVF9QUkVGSVg9ICMgcHJvamVjdCBwcmVmaXhcblBVTExfUkVRVUVTVF9TS0lQPVtdICMgW1widHlwZS1kZWZpbml0aW9uc1wiLFwibm9kZS1jb21tb25cIiwuLi5dXG5ET0NLRVJfQkFTRV9JTUFHRVM9W10gIyBbXCJiYy1ub2RlLW5naW54XCIsXCJiYy1ub2RlXCIsXCJiYy1uZ2lueFwiLFwiYmMtYmFzZVwiXVxuXG5DTURfR0lUX0VOQUJMRUQ9dHJ1ZVxuQ01EX0NMRUFOX0VOQUJMRUQ9dHJ1ZVxuQ01EX05QTV9FTkFCTEVEPXRydWVcbkNNRF9QUl9FTkFCTEVEPXRydWVcbmBcbiAgfSxcbn1cblxuZXhwb3J0IHsgaW5pdCB9XG4iXX0=