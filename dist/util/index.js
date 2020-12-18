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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxrREFBK0I7QUFDL0Isb0RBQWlDO0FBQ2pDLGtEQUErQjtBQUUvQiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLDJDQUEyQztBQUUzQyxpQkFBaUI7QUFDakIsaUdBQWlHO0FBQ2pHLDBGQUEwRjtBQUMxRixRQUFRO0FBQ1IsMEVBQTBFO0FBQzFFLDhEQUE4RDtBQUM5RCxrREFBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLFdBQVc7QUFDWCxRQUFRO0FBQ1IsT0FBTztBQUNQLEtBQUs7QUFFTCxzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLG1DQUFtQztBQUNuQyw2Q0FBNkM7QUFDN0MsZ0RBQWdEO0FBQ2hELGFBQWE7QUFDYiw2Q0FBNkM7QUFDN0MsdUJBQXVCO0FBQ3ZCLE1BQU07QUFDTix3QkFBd0I7QUFDeEIsS0FBSztBQUNMLCtCQUErQjtBQUMvQiwwR0FBMEc7QUFDMUcsOEJBQThCO0FBQzlCLG9FQUFvRTtBQUNwRSxzR0FBc0c7QUFDdEcsZUFBZTtBQUNmLCtCQUErQjtBQUMvQixzRUFBc0U7QUFDdEUseUdBQXlHO0FBQ3pHLGVBQWU7QUFDZixFQUFFO0FBQ0Ysb0JBQW9CO0FBQ3BCLDRDQUE0QztBQUM1QyxVQUFVO0FBQ1Ysb0JBQW9CO0FBQ3BCLG9EQUFvRDtBQUNwRCxvREFBb0Q7QUFDcEQsNkRBQTZEO0FBQzdELEtBQUs7QUFDTCxtQkFBbUI7QUFDbkIsaUVBQWlFO0FBQ2pFLEtBQUs7QUFDTCx3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLFFBQVE7QUFDUixVQUFVO0FBQ1YsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJ3NyYy91dGlsL2NvbmZpZydcbmV4cG9ydCAqIGZyb20gJ3NyYy91dGlsL2NvbnN0YW50J1xuZXhwb3J0ICogZnJvbSAnc3JjL3V0aWwvbG9nZ2VyJ1xuXG4vLyBpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG4vLyBpbXBvcnQgc2hlbGwgZnJvbSAnc2hlbGxqcydcbi8vIGltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ3NyYy91dGlsL2NvbmZpZydcblxuLy8gY29uc3QgdXRpbCA9IHtcbi8vIGV4ZWNBc3luYzogKGNvbW1hbmQ6IHN0cmluZyk6IFByb21pc2U8eyBzdGRvdXQ6IHN0cmluZzsgc3RkZXJyOiBzdHJpbmc7IGVycm9yOiBib29sZWFuIH0+ID0+IHtcbi8vICAgcmV0dXJuIG5ldyBQcm9taXNlPHsgc3Rkb3V0OiBzdHJpbmc7IHN0ZGVycjogc3RyaW5nOyBlcnJvcjogYm9vbGVhbiB9PigocmVzb2x2ZSkgPT4ge1xuLy8gICAgIHtcbi8vICAgICAgIHNoZWxsLmV4ZWMoY29tbWFuZCwgeyBzaWxlbnQ6IHRydWUgfSwgKGNvZGUsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGV4ZWNSZXN1bHQgPSB7IHN0ZG91dCwgc3RkZXJyLCBlcnJvcjogZmFsc2UgfVxuLy8gICAgICAgICBpZiAoY29kZSAhPT0gMCkgZXhlY1Jlc3VsdC5lcnJvciA9IHRydWVcbi8vICAgICAgICAgcmV0dXJuIHJlc29sdmUoZXhlY1Jlc3VsdClcbi8vICAgICAgIH0pXG4vLyAgICAgfVxuLy8gICB9KVxuLy8gfSxcblxuLy8gbG9nOiAobXNnOiBzdHJpbmcgfCBhbnkpOiB2b2lkID0+IHtcbi8vICAgLyogdHNsaW50OmRpc2FibGUgKi9cbi8vICAgaWYgKHR5cGVvZiBtc2cgPT09ICdvYmplY3QnKSB7XG4vLyAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbi8vICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShtc2csIG51bGwsIDQpKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4vLyAgICAgY29uc29sZS5sb2cobXNnKVxuLy8gICB9XG4vLyAgIC8qIHRzbGludDplbmFibGUgKi9cbi8vIH0sXG4vLyAgIHByaW50Q29uZmlnOiAoKTogdm9pZCA9PiB7XG4vLyAgICAgY29uc3QgZ2l0VXNlck5hbWUgPSBjb25maWcuZ2l0LnVzZXJuYW1lID8gYCAgICAgdXNlcm5hbWUgOiAke2NoYWxrLmN5YW4oY29uZmlnLmdpdC51c2VybmFtZSl9YCA6IGBgXG4vLyAgICAgY29uc3QgcHVsbFJlcXVlc3RTa2lwID1cbi8vICAgICAgIGNvbmZpZy5wdWxsUmVxdWVzdFNraXAgJiYgY29uZmlnLnB1bGxSZXF1ZXN0U2tpcC5sZW5ndGggPiAwXG4vLyAgICAgICAgID8gYFB1bGxSZXF1ZXN0IHNraXA6XFxuWyAke2NoYWxrLmN5YW4oY29uZmlnLnB1bGxSZXF1ZXN0U2tpcC5qb2luKGNoYWxrLndoaXRlKCcgfCAnKSkpfSBdXFxuYFxuLy8gICAgICAgICA6IGBgXG4vLyAgICAgY29uc3QgZG9ja2VyQmFzZUltYWdlcyA9XG4vLyAgICAgICBjb25maWcuZG9ja2VyQmFzZUltYWdlcyAmJiBjb25maWcuZG9ja2VyQmFzZUltYWdlcy5sZW5ndGggPiAwXG4vLyAgICAgICAgID8gYERvY2tlciBiYXNlIGltYWdlczpcXG5bICR7Y2hhbGsuY3lhbihjb25maWcuZG9ja2VyQmFzZUltYWdlcy5qb2luKGNoYWxrLndoaXRlKCcgfCAnKSkpfSBdXFxuYFxuLy8gICAgICAgICA6IGBgXG4vL1xuLy8gLy8gICAgIHV0aWwubG9nKGBcbi8vIC8vIFJvb3REaXI6ICR7Y2hhbGsuY3lhbihjb25maWcucm9vdERpcil9XG4vLyAvLyBHaXQ6XG4vLyAvLyAke2dpdFVzZXJOYW1lfVxuLy8gLy8gICAgICB0ZWFtICAgICA6ICR7Y2hhbGsuY3lhbihjb25maWcuZ2l0LnRlYW0pfVxuLy8gLy8gICAgICBob3N0ICAgICA6ICR7Y2hhbGsuY3lhbihjb25maWcuZ2l0Lmhvc3QpfVxuLy8gLy8gICAgICBwcmVmaXggICA6ICR7Y2hhbGsuY3lhbihjb25maWcuZ2l0LnByb2plY3RQcmVmaXgpfVxuLy8gLy9cbi8vIC8vIFByb2plY3QgTGlzdDpcbi8vIC8vIFsgJHtjaGFsay5jeWFuKGNvbmZpZy5wcm9qZWN0cy5qb2luKGNoYWxrLndoaXRlKCcgfCAnKSkpfSBdXG4vLyAvL1xuLy8gLy8gJHtwdWxsUmVxdWVzdFNraXB9XG4vLyAvLyAke2RvY2tlckJhc2VJbWFnZXN9XG4vLyAvLyBgKVxuLy8gLy8gICB9LFxuLy8gfVxuIl19