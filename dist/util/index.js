"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEJBQTRCO0FBQzVCLDhCQUE4QjtBQUM5QiwyQ0FBMkM7QUFFM0MsaUJBQWlCO0FBQ2pCLGlHQUFpRztBQUNqRywwRkFBMEY7QUFDMUYsUUFBUTtBQUNSLDBFQUEwRTtBQUMxRSw4REFBOEQ7QUFDOUQsa0RBQWtEO0FBQ2xELHFDQUFxQztBQUNyQyxXQUFXO0FBQ1gsUUFBUTtBQUNSLE9BQU87QUFDUCxLQUFLO0FBRUwsc0NBQXNDO0FBQ3RDLHlCQUF5QjtBQUN6QixtQ0FBbUM7QUFDbkMsNkNBQTZDO0FBQzdDLGdEQUFnRDtBQUNoRCxhQUFhO0FBQ2IsNkNBQTZDO0FBQzdDLHVCQUF1QjtBQUN2QixNQUFNO0FBQ04sd0JBQXdCO0FBQ3hCLEtBQUs7QUFDTCwrQkFBK0I7QUFDL0IsMEdBQTBHO0FBQzFHLDhCQUE4QjtBQUM5QixvRUFBb0U7QUFDcEUsc0dBQXNHO0FBQ3RHLGVBQWU7QUFDZiwrQkFBK0I7QUFDL0Isc0VBQXNFO0FBQ3RFLHlHQUF5RztBQUN6RyxlQUFlO0FBQ2YsRUFBRTtBQUNGLG9CQUFvQjtBQUNwQiw0Q0FBNEM7QUFDNUMsVUFBVTtBQUNWLG9CQUFvQjtBQUNwQixvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ3BELDZEQUE2RDtBQUM3RCxLQUFLO0FBQ0wsbUJBQW1CO0FBQ25CLGlFQUFpRTtBQUNqRSxLQUFLO0FBQ0wsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6QixRQUFRO0FBQ1IsVUFBVTtBQUNWLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG4vLyBpbXBvcnQgc2hlbGwgZnJvbSAnc2hlbGxqcydcbi8vIGltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ3NyYy91dGlsL2NvbmZpZydcblxuLy8gY29uc3QgdXRpbCA9IHtcbi8vIGV4ZWNBc3luYzogKGNvbW1hbmQ6IHN0cmluZyk6IFByb21pc2U8eyBzdGRvdXQ6IHN0cmluZzsgc3RkZXJyOiBzdHJpbmc7IGVycm9yOiBib29sZWFuIH0+ID0+IHtcbi8vICAgcmV0dXJuIG5ldyBQcm9taXNlPHsgc3Rkb3V0OiBzdHJpbmc7IHN0ZGVycjogc3RyaW5nOyBlcnJvcjogYm9vbGVhbiB9PigocmVzb2x2ZSkgPT4ge1xuLy8gICAgIHtcbi8vICAgICAgIHNoZWxsLmV4ZWMoY29tbWFuZCwgeyBzaWxlbnQ6IHRydWUgfSwgKGNvZGUsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGV4ZWNSZXN1bHQgPSB7IHN0ZG91dCwgc3RkZXJyLCBlcnJvcjogZmFsc2UgfVxuLy8gICAgICAgICBpZiAoY29kZSAhPT0gMCkgZXhlY1Jlc3VsdC5lcnJvciA9IHRydWVcbi8vICAgICAgICAgcmV0dXJuIHJlc29sdmUoZXhlY1Jlc3VsdClcbi8vICAgICAgIH0pXG4vLyAgICAgfVxuLy8gICB9KVxuLy8gfSxcblxuLy8gbG9nOiAobXNnOiBzdHJpbmcgfCBhbnkpOiB2b2lkID0+IHtcbi8vICAgLyogdHNsaW50OmRpc2FibGUgKi9cbi8vICAgaWYgKHR5cGVvZiBtc2cgPT09ICdvYmplY3QnKSB7XG4vLyAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbi8vICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShtc2csIG51bGwsIDQpKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4vLyAgICAgY29uc29sZS5sb2cobXNnKVxuLy8gICB9XG4vLyAgIC8qIHRzbGludDplbmFibGUgKi9cbi8vIH0sXG4vLyAgIHByaW50Q29uZmlnOiAoKTogdm9pZCA9PiB7XG4vLyAgICAgY29uc3QgZ2l0VXNlck5hbWUgPSBjb25maWcuZ2l0LnVzZXJuYW1lID8gYCAgICAgdXNlcm5hbWUgOiAke2NoYWxrLmN5YW4oY29uZmlnLmdpdC51c2VybmFtZSl9YCA6IGBgXG4vLyAgICAgY29uc3QgcHVsbFJlcXVlc3RTa2lwID1cbi8vICAgICAgIGNvbmZpZy5wdWxsUmVxdWVzdFNraXAgJiYgY29uZmlnLnB1bGxSZXF1ZXN0U2tpcC5sZW5ndGggPiAwXG4vLyAgICAgICAgID8gYFB1bGxSZXF1ZXN0IHNraXA6XFxuWyAke2NoYWxrLmN5YW4oY29uZmlnLnB1bGxSZXF1ZXN0U2tpcC5qb2luKGNoYWxrLndoaXRlKCcgfCAnKSkpfSBdXFxuYFxuLy8gICAgICAgICA6IGBgXG4vLyAgICAgY29uc3QgZG9ja2VyQmFzZUltYWdlcyA9XG4vLyAgICAgICBjb25maWcuZG9ja2VyQmFzZUltYWdlcyAmJiBjb25maWcuZG9ja2VyQmFzZUltYWdlcy5sZW5ndGggPiAwXG4vLyAgICAgICAgID8gYERvY2tlciBiYXNlIGltYWdlczpcXG5bICR7Y2hhbGsuY3lhbihjb25maWcuZG9ja2VyQmFzZUltYWdlcy5qb2luKGNoYWxrLndoaXRlKCcgfCAnKSkpfSBdXFxuYFxuLy8gICAgICAgICA6IGBgXG4vL1xuLy8gLy8gICAgIHV0aWwubG9nKGBcbi8vIC8vIFJvb3REaXI6ICR7Y2hhbGsuY3lhbihjb25maWcucm9vdERpcil9XG4vLyAvLyBHaXQ6XG4vLyAvLyAke2dpdFVzZXJOYW1lfVxuLy8gLy8gICAgICB0ZWFtICAgICA6ICR7Y2hhbGsuY3lhbihjb25maWcuZ2l0LnRlYW0pfVxuLy8gLy8gICAgICBob3N0ICAgICA6ICR7Y2hhbGsuY3lhbihjb25maWcuZ2l0Lmhvc3QpfVxuLy8gLy8gICAgICBwcmVmaXggICA6ICR7Y2hhbGsuY3lhbihjb25maWcuZ2l0LnByb2plY3RQcmVmaXgpfVxuLy8gLy9cbi8vIC8vIFByb2plY3QgTGlzdDpcbi8vIC8vIFsgJHtjaGFsay5jeWFuKGNvbmZpZy5wcm9qZWN0cy5qb2luKGNoYWxrLndoaXRlKCcgfCAnKSkpfSBdXG4vLyAvL1xuLy8gLy8gJHtwdWxsUmVxdWVzdFNraXB9XG4vLyAvLyAke2RvY2tlckJhc2VJbWFnZXN9XG4vLyAvLyBgKVxuLy8gLy8gICB9LFxuLy8gfVxuIl19