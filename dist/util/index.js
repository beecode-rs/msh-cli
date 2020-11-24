"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.util = void 0;
const chalk_1 = __importDefault(require("chalk"));
const shelljs_1 = __importDefault(require("shelljs"));
const config_1 = require("src/util/config");
const util = {
    execAsync: (command) => {
        return new Promise((resolve) => {
            {
                shelljs_1.default.exec(command, { silent: true }, (code, stdout, stderr) => {
                    const execResult = { stdout, stderr, error: false };
                    if (code !== 0)
                        execResult.error = true;
                    return resolve(execResult);
                });
            }
        });
    },
    log: (msg) => {
        /* tslint:disable */
        if (typeof msg === 'object') {
            // eslint-disable-next-line no-console
            console.log(JSON.stringify(msg, null, 4));
        }
        else {
            // eslint-disable-next-line no-console
            console.log(msg);
        }
        /* tslint:enable */
    },
    printConfig: () => {
        const gitUserName = config_1.config.git.username ? `     username : ${chalk_1.default.cyan(config_1.config.git.username)}` : ``;
        const pullRequestSkip = config_1.config.pullRequestSkip && config_1.config.pullRequestSkip.length > 0
            ? `PullRequest skip:\n[ ${chalk_1.default.cyan(config_1.config.pullRequestSkip.join(chalk_1.default.white(' | ')))} ]\n`
            : ``;
        const dockerBaseImages = config_1.config.dockerBaseImages && config_1.config.dockerBaseImages.length > 0
            ? `Docker base images:\n[ ${chalk_1.default.cyan(config_1.config.dockerBaseImages.join(chalk_1.default.white(' | ')))} ]\n`
            : ``;
        util.log(`
RootDir: ${chalk_1.default.cyan(config_1.config.rootDir)}
Git:
${gitUserName}
     team     : ${chalk_1.default.cyan(config_1.config.git.team)}
     host     : ${chalk_1.default.cyan(config_1.config.git.host)}
     prefix   : ${chalk_1.default.cyan(config_1.config.git.projectPrefix)}

Project List:
[ ${chalk_1.default.cyan(config_1.config.projects.join(chalk_1.default.white(' | ')))} ]

${pullRequestSkip}
${dockerBaseImages}
`);
    },
};
exports.util = util;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsc0RBQTJCO0FBQzNCLDRDQUF3QztBQUV4QyxNQUFNLElBQUksR0FBRztJQUNYLFNBQVMsRUFBRSxDQUFDLE9BQWUsRUFBK0QsRUFBRTtRQUMxRixPQUFPLElBQUksT0FBTyxDQUFxRCxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2pGO2dCQUNFLGlCQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQzdELE1BQU0sVUFBVSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUE7b0JBQ25ELElBQUksSUFBSSxLQUFLLENBQUM7d0JBQUUsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7b0JBQ3ZDLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUM1QixDQUFDLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsR0FBRyxFQUFFLENBQUMsR0FBaUIsRUFBUSxFQUFFO1FBQy9CLG9CQUFvQjtRQUNwQixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixzQ0FBc0M7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUMxQzthQUFNO1lBQ0wsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDakI7UUFDRCxtQkFBbUI7SUFDckIsQ0FBQztJQUNELFdBQVcsRUFBRSxHQUFTLEVBQUU7UUFDdEIsTUFBTSxXQUFXLEdBQUcsZUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixlQUFLLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBQ25HLE1BQU0sZUFBZSxHQUNuQixlQUFNLENBQUMsZUFBZSxJQUFJLGVBQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDekQsQ0FBQyxDQUFDLHdCQUF3QixlQUFLLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQzNGLENBQUMsQ0FBQyxFQUFFLENBQUE7UUFDUixNQUFNLGdCQUFnQixHQUNwQixlQUFNLENBQUMsZ0JBQWdCLElBQUksZUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQzNELENBQUMsQ0FBQywwQkFBMEIsZUFBSyxDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQzlGLENBQUMsQ0FBQyxFQUFFLENBQUE7UUFFUixJQUFJLENBQUMsR0FBRyxDQUFDO1dBQ0YsZUFBSyxDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsT0FBTyxDQUFDOztFQUVuQyxXQUFXO2tCQUNLLGVBQUssQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7a0JBQzNCLGVBQUssQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7a0JBQzNCLGVBQUssQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7OztJQUdsRCxlQUFLLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7RUFFdEQsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQixDQUFDLENBQUE7SUFDQSxDQUFDO0NBQ0YsQ0FBQTtBQUNRLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IHNoZWxsIGZyb20gJ3NoZWxsanMnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdzcmMvdXRpbC9jb25maWcnXG5cbmNvbnN0IHV0aWwgPSB7XG4gIGV4ZWNBc3luYzogKGNvbW1hbmQ6IHN0cmluZyk6IFByb21pc2U8eyBzdGRvdXQ6IHN0cmluZzsgc3RkZXJyOiBzdHJpbmc7IGVycm9yOiBib29sZWFuIH0+ID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8eyBzdGRvdXQ6IHN0cmluZzsgc3RkZXJyOiBzdHJpbmc7IGVycm9yOiBib29sZWFuIH0+KChyZXNvbHZlKSA9PiB7XG4gICAgICB7XG4gICAgICAgIHNoZWxsLmV4ZWMoY29tbWFuZCwgeyBzaWxlbnQ6IHRydWUgfSwgKGNvZGUsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhlY1Jlc3VsdCA9IHsgc3Rkb3V0LCBzdGRlcnIsIGVycm9yOiBmYWxzZSB9XG4gICAgICAgICAgaWYgKGNvZGUgIT09IDApIGV4ZWNSZXN1bHQuZXJyb3IgPSB0cnVlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoZXhlY1Jlc3VsdClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGxvZzogKG1zZzogc3RyaW5nIHwgYW55KTogdm9pZCA9PiB7XG4gICAgLyogdHNsaW50OmRpc2FibGUgKi9cbiAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShtc2csIG51bGwsIDQpKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5sb2cobXNnKVxuICAgIH1cbiAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXG4gIH0sXG4gIHByaW50Q29uZmlnOiAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZ2l0VXNlck5hbWUgPSBjb25maWcuZ2l0LnVzZXJuYW1lID8gYCAgICAgdXNlcm5hbWUgOiAke2NoYWxrLmN5YW4oY29uZmlnLmdpdC51c2VybmFtZSl9YCA6IGBgXG4gICAgY29uc3QgcHVsbFJlcXVlc3RTa2lwID1cbiAgICAgIGNvbmZpZy5wdWxsUmVxdWVzdFNraXAgJiYgY29uZmlnLnB1bGxSZXF1ZXN0U2tpcC5sZW5ndGggPiAwXG4gICAgICAgID8gYFB1bGxSZXF1ZXN0IHNraXA6XFxuWyAke2NoYWxrLmN5YW4oY29uZmlnLnB1bGxSZXF1ZXN0U2tpcC5qb2luKGNoYWxrLndoaXRlKCcgfCAnKSkpfSBdXFxuYFxuICAgICAgICA6IGBgXG4gICAgY29uc3QgZG9ja2VyQmFzZUltYWdlcyA9XG4gICAgICBjb25maWcuZG9ja2VyQmFzZUltYWdlcyAmJiBjb25maWcuZG9ja2VyQmFzZUltYWdlcy5sZW5ndGggPiAwXG4gICAgICAgID8gYERvY2tlciBiYXNlIGltYWdlczpcXG5bICR7Y2hhbGsuY3lhbihjb25maWcuZG9ja2VyQmFzZUltYWdlcy5qb2luKGNoYWxrLndoaXRlKCcgfCAnKSkpfSBdXFxuYFxuICAgICAgICA6IGBgXG5cbiAgICB1dGlsLmxvZyhgXG5Sb290RGlyOiAke2NoYWxrLmN5YW4oY29uZmlnLnJvb3REaXIpfVxuR2l0OlxuJHtnaXRVc2VyTmFtZX1cbiAgICAgdGVhbSAgICAgOiAke2NoYWxrLmN5YW4oY29uZmlnLmdpdC50ZWFtKX1cbiAgICAgaG9zdCAgICAgOiAke2NoYWxrLmN5YW4oY29uZmlnLmdpdC5ob3N0KX1cbiAgICAgcHJlZml4ICAgOiAke2NoYWxrLmN5YW4oY29uZmlnLmdpdC5wcm9qZWN0UHJlZml4KX1cblxuUHJvamVjdCBMaXN0OlxuWyAke2NoYWxrLmN5YW4oY29uZmlnLnByb2plY3RzLmpvaW4oY2hhbGsud2hpdGUoJyB8ICcpKSl9IF1cblxuJHtwdWxsUmVxdWVzdFNraXB9XG4ke2RvY2tlckJhc2VJbWFnZXN9XG5gKVxuICB9LFxufVxuZXhwb3J0IHsgdXRpbCB9XG4iXX0=