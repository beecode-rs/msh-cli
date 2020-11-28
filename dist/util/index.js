"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("src/util/config"), exports);
__exportStar(require("src/util/constant"), exports);
__exportStar(require("src/util/logger"), exports);
// import chalk from 'chalk'
// import shell from 'shelljs'
// import { config } from 'src/util/config'
// const util = {
// execAsync: (command: string): Promise<{ stdout: string; stderr: string; error: boolean }> => {
//   return new Promise<{ stdout: string; stderr: string; error: boolean }>((resolve) => {
//     {
//       shell.exec(command, { silent: true }, (code, stdout, stderr) => {
//         const execResult = { stdout, stderr, error: false }
//         if (code !== 0) execResult.error = true
//         return resolve(execResult)
//       })
//     }
//   })
// },
// log: (msg: string | any): void => {
//   /* tslint:disable */
//   if (typeof msg === 'object') {
//     // eslint-disable-next-line no-console
//     console.log(JSON.stringify(msg, null, 4))
//   } else {
//     // eslint-disable-next-line no-console
//     console.log(msg)
//   }
//   /* tslint:enable */
// },
//   printConfig: (): void => {
//     const gitUserName = config.git.username ? `     username : ${chalk.cyan(config.git.username)}` : ``
//     const pullRequestSkip =
//       config.pullRequestSkip && config.pullRequestSkip.length > 0
//         ? `PullRequest skip:\n[ ${chalk.cyan(config.pullRequestSkip.join(chalk.white(' | ')))} ]\n`
//         : ``
//     const dockerBaseImages =
//       config.dockerBaseImages && config.dockerBaseImages.length > 0
//         ? `Docker base images:\n[ ${chalk.cyan(config.dockerBaseImages.join(chalk.white(' | ')))} ]\n`
//         : ``
//
// //     util.log(`
// // RootDir: ${chalk.cyan(config.rootDir)}
// // Git:
// // ${gitUserName}
// //      team     : ${chalk.cyan(config.git.team)}
// //      host     : ${chalk.cyan(config.git.host)}
// //      prefix   : ${chalk.cyan(config.git.projectPrefix)}
// //
// // Project List:
// // [ ${chalk.cyan(config.projects.join(chalk.white(' | ')))} ]
// //
// // ${pullRequestSkip}
// // ${dockerBaseImages}
// // `)
// //   },
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxrREFBK0I7QUFDL0Isb0RBQWlDO0FBQ2pDLGtEQUErQjtBQUcvQiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLDJDQUEyQztBQUUzQyxpQkFBaUI7QUFDZixpR0FBaUc7QUFDakcsMEZBQTBGO0FBQzFGLFFBQVE7QUFDUiwwRUFBMEU7QUFDMUUsOERBQThEO0FBQzlELGtEQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsV0FBVztBQUNYLFFBQVE7QUFDUixPQUFPO0FBQ1AsS0FBSztBQUVMLHNDQUFzQztBQUN0Qyx5QkFBeUI7QUFDekIsbUNBQW1DO0FBQ25DLDZDQUE2QztBQUM3QyxnREFBZ0Q7QUFDaEQsYUFBYTtBQUNiLDZDQUE2QztBQUM3Qyx1QkFBdUI7QUFDdkIsTUFBTTtBQUNOLHdCQUF3QjtBQUN4QixLQUFLO0FBQ1AsK0JBQStCO0FBQy9CLDBHQUEwRztBQUMxRyw4QkFBOEI7QUFDOUIsb0VBQW9FO0FBQ3BFLHNHQUFzRztBQUN0RyxlQUFlO0FBQ2YsK0JBQStCO0FBQy9CLHNFQUFzRTtBQUN0RSx5R0FBeUc7QUFDekcsZUFBZTtBQUNmLEVBQUU7QUFDRixvQkFBb0I7QUFDcEIsNENBQTRDO0FBQzVDLFVBQVU7QUFDVixvQkFBb0I7QUFDcEIsb0RBQW9EO0FBQ3BELG9EQUFvRDtBQUNwRCw2REFBNkQ7QUFDN0QsS0FBSztBQUNMLG1CQUFtQjtBQUNuQixpRUFBaUU7QUFDakUsS0FBSztBQUNMLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIsUUFBUTtBQUNSLFVBQVU7QUFDVixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuZXhwb3J0ICogZnJvbSAnc3JjL3V0aWwvY29uc3RhbnQnXG5leHBvcnQgKiBmcm9tICdzcmMvdXRpbC9sb2dnZXInXG5cblxuLy8gaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuLy8gaW1wb3J0IHNoZWxsIGZyb20gJ3NoZWxsanMnXG4vLyBpbXBvcnQgeyBjb25maWcgfSBmcm9tICdzcmMvdXRpbC9jb25maWcnXG5cbi8vIGNvbnN0IHV0aWwgPSB7XG4gIC8vIGV4ZWNBc3luYzogKGNvbW1hbmQ6IHN0cmluZyk6IFByb21pc2U8eyBzdGRvdXQ6IHN0cmluZzsgc3RkZXJyOiBzdHJpbmc7IGVycm9yOiBib29sZWFuIH0+ID0+IHtcbiAgLy8gICByZXR1cm4gbmV3IFByb21pc2U8eyBzdGRvdXQ6IHN0cmluZzsgc3RkZXJyOiBzdHJpbmc7IGVycm9yOiBib29sZWFuIH0+KChyZXNvbHZlKSA9PiB7XG4gIC8vICAgICB7XG4gIC8vICAgICAgIHNoZWxsLmV4ZWMoY29tbWFuZCwgeyBzaWxlbnQ6IHRydWUgfSwgKGNvZGUsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gIC8vICAgICAgICAgY29uc3QgZXhlY1Jlc3VsdCA9IHsgc3Rkb3V0LCBzdGRlcnIsIGVycm9yOiBmYWxzZSB9XG4gIC8vICAgICAgICAgaWYgKGNvZGUgIT09IDApIGV4ZWNSZXN1bHQuZXJyb3IgPSB0cnVlXG4gIC8vICAgICAgICAgcmV0dXJuIHJlc29sdmUoZXhlY1Jlc3VsdClcbiAgLy8gICAgICAgfSlcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuICAvLyB9LFxuXG4gIC8vIGxvZzogKG1zZzogc3RyaW5nIHwgYW55KTogdm9pZCA9PiB7XG4gIC8vICAgLyogdHNsaW50OmRpc2FibGUgKi9cbiAgLy8gICBpZiAodHlwZW9mIG1zZyA9PT0gJ29iamVjdCcpIHtcbiAgLy8gICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIC8vICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShtc2csIG51bGwsIDQpKVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAvLyAgICAgY29uc29sZS5sb2cobXNnKVxuICAvLyAgIH1cbiAgLy8gICAvKiB0c2xpbnQ6ZW5hYmxlICovXG4gIC8vIH0sXG4vLyAgIHByaW50Q29uZmlnOiAoKTogdm9pZCA9PiB7XG4vLyAgICAgY29uc3QgZ2l0VXNlck5hbWUgPSBjb25maWcuZ2l0LnVzZXJuYW1lID8gYCAgICAgdXNlcm5hbWUgOiAke2NoYWxrLmN5YW4oY29uZmlnLmdpdC51c2VybmFtZSl9YCA6IGBgXG4vLyAgICAgY29uc3QgcHVsbFJlcXVlc3RTa2lwID1cbi8vICAgICAgIGNvbmZpZy5wdWxsUmVxdWVzdFNraXAgJiYgY29uZmlnLnB1bGxSZXF1ZXN0U2tpcC5sZW5ndGggPiAwXG4vLyAgICAgICAgID8gYFB1bGxSZXF1ZXN0IHNraXA6XFxuWyAke2NoYWxrLmN5YW4oY29uZmlnLnB1bGxSZXF1ZXN0U2tpcC5qb2luKGNoYWxrLndoaXRlKCcgfCAnKSkpfSBdXFxuYFxuLy8gICAgICAgICA6IGBgXG4vLyAgICAgY29uc3QgZG9ja2VyQmFzZUltYWdlcyA9XG4vLyAgICAgICBjb25maWcuZG9ja2VyQmFzZUltYWdlcyAmJiBjb25maWcuZG9ja2VyQmFzZUltYWdlcy5sZW5ndGggPiAwXG4vLyAgICAgICAgID8gYERvY2tlciBiYXNlIGltYWdlczpcXG5bICR7Y2hhbGsuY3lhbihjb25maWcuZG9ja2VyQmFzZUltYWdlcy5qb2luKGNoYWxrLndoaXRlKCcgfCAnKSkpfSBdXFxuYFxuLy8gICAgICAgICA6IGBgXG4vL1xuLy8gLy8gICAgIHV0aWwubG9nKGBcbi8vIC8vIFJvb3REaXI6ICR7Y2hhbGsuY3lhbihjb25maWcucm9vdERpcil9XG4vLyAvLyBHaXQ6XG4vLyAvLyAke2dpdFVzZXJOYW1lfVxuLy8gLy8gICAgICB0ZWFtICAgICA6ICR7Y2hhbGsuY3lhbihjb25maWcuZ2l0LnRlYW0pfVxuLy8gLy8gICAgICBob3N0ICAgICA6ICR7Y2hhbGsuY3lhbihjb25maWcuZ2l0Lmhvc3QpfVxuLy8gLy8gICAgICBwcmVmaXggICA6ICR7Y2hhbGsuY3lhbihjb25maWcuZ2l0LnByb2plY3RQcmVmaXgpfVxuLy8gLy9cbi8vIC8vIFByb2plY3QgTGlzdDpcbi8vIC8vIFsgJHtjaGFsay5jeWFuKGNvbmZpZy5wcm9qZWN0cy5qb2luKGNoYWxrLndoaXRlKCcgfCAnKSkpfSBdXG4vLyAvL1xuLy8gLy8gJHtwdWxsUmVxdWVzdFNraXB9XG4vLyAvLyAke2RvY2tlckJhc2VJbWFnZXN9XG4vLyAvLyBgKVxuLy8gLy8gICB9LFxuLy8gfVxuIl19