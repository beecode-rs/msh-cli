"use strict";
// import chalk from 'chalk'
// import { ChoiceCollection } from 'inquirer'
// import { assignIn } from 'lodash'
// import shell from 'shelljs'
// import { cliService } from 'src/service/cli-service'
// import { util } from 'src/util'
// import { config } from 'src/util/config'
// import { SubMenu } from 'src/util/sub-menu'
//
// export = Git
// class Git extends SubMenu {
//   // eslint-disable-next-line @typescript-eslint/naming-convention
//   private async gitCommand(command): Promise<void> {
//     const promises: any[] = []
//     for (const project of config.projects) {
//       const cmd = `git -C ${config.rootDir}/${project} ${command}`
//       const promise = util.execAsync(cmd).then((execResult) => {
//         util.log(chalk.green(`DONE - ${project}`))
//         return { [project]: execResult }
//       })
//       promises.push(promise)
//     }
//     const result = await Promise.all(promises)
//     cliService.printStdMessage(assignIn({}, ...result))
//   }
//   constructor() {
//     super('Git action?', [
//       { name: 'Status', value: 'status' },
//       { name: 'Fetch', value: 'fetch' },
//       { name: 'Pull', value: 'pull' },
//       { name: 'Clone', value: 'clone' },
//     ] as ChoiceCollection)
//   }
//
//   // eslint-disable-next-line @typescript-eslint/naming-convention
//   private async status(): Promise<void> {
//     await this.gitCommand('status')
//   }
//   private async __fetch(): Promise<void> {
//     await this.gitCommand('fetch')
//   }
//   private async __pull(): Promise<void> {
//     await this.gitCommand('pull')
//   }
//
//   /**
//    * Clone all project for microservices that belong to parent project
//    */
//   private async __clone(): Promise<void> {
//     shell.cd(config.rootDir)
//     const promises: any[] = []
//     for (const project of config.projects) {
//       const cmd = `git clone git@${config.git.host}:${config.git.team}/${config.git.projectPrefix}-${project}.git ${project}`
//       const promise = util.execAsync(cmd).then((execResult) => {
//         util.log(chalk.green(`DONE - ${project}`))
//         return { [project]: execResult }
//       })
//       promises.push(promise)
//     }
//     const result = await Promise.all(promises)
//     cliService.printStdMessage(assignIn({}, ...result))
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4ZWMvR2l0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0QkFBNEI7QUFDNUIsOENBQThDO0FBQzlDLG9DQUFvQztBQUNwQyw4QkFBOEI7QUFDOUIsdURBQXVEO0FBQ3ZELGtDQUFrQztBQUNsQywyQ0FBMkM7QUFDM0MsOENBQThDO0FBQzlDLEVBQUU7QUFDRixlQUFlO0FBQ2YsOEJBQThCO0FBQzlCLHFFQUFxRTtBQUNyRSx1REFBdUQ7QUFDdkQsaUNBQWlDO0FBQ2pDLCtDQUErQztBQUMvQyxxRUFBcUU7QUFDckUsbUVBQW1FO0FBQ25FLHFEQUFxRDtBQUNyRCwyQ0FBMkM7QUFDM0MsV0FBVztBQUNYLCtCQUErQjtBQUMvQixRQUFRO0FBQ1IsaURBQWlEO0FBQ2pELDBEQUEwRDtBQUMxRCxNQUFNO0FBQ04sb0JBQW9CO0FBQ3BCLDZCQUE2QjtBQUM3Qiw2Q0FBNkM7QUFDN0MsMkNBQTJDO0FBQzNDLHlDQUF5QztBQUN6QywyQ0FBMkM7QUFDM0MsNkJBQTZCO0FBQzdCLE1BQU07QUFDTixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLDRDQUE0QztBQUM1QyxzQ0FBc0M7QUFDdEMsTUFBTTtBQUNOLDZDQUE2QztBQUM3QyxxQ0FBcUM7QUFDckMsTUFBTTtBQUNOLDRDQUE0QztBQUM1QyxvQ0FBb0M7QUFDcEMsTUFBTTtBQUNOLEVBQUU7QUFDRixRQUFRO0FBQ1IseUVBQXlFO0FBQ3pFLFFBQVE7QUFDUiw2Q0FBNkM7QUFDN0MsK0JBQStCO0FBQy9CLGlDQUFpQztBQUNqQywrQ0FBK0M7QUFDL0MsZ0lBQWdJO0FBQ2hJLG1FQUFtRTtBQUNuRSxxREFBcUQ7QUFDckQsMkNBQTJDO0FBQzNDLFdBQVc7QUFDWCwrQkFBK0I7QUFDL0IsUUFBUTtBQUNSLGlEQUFpRDtBQUNqRCwwREFBMEQ7QUFDMUQsTUFBTTtBQUNOLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG4vLyBpbXBvcnQgeyBDaG9pY2VDb2xsZWN0aW9uIH0gZnJvbSAnaW5xdWlyZXInXG4vLyBpbXBvcnQgeyBhc3NpZ25JbiB9IGZyb20gJ2xvZGFzaCdcbi8vIGltcG9ydCBzaGVsbCBmcm9tICdzaGVsbGpzJ1xuLy8gaW1wb3J0IHsgY2xpU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL2NsaS1zZXJ2aWNlJ1xuLy8gaW1wb3J0IHsgdXRpbCB9IGZyb20gJ3NyYy91dGlsJ1xuLy8gaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuLy8gaW1wb3J0IHsgU3ViTWVudSB9IGZyb20gJ3NyYy91dGlsL3N1Yi1tZW51J1xuLy9cbi8vIGV4cG9ydCA9IEdpdFxuLy8gY2xhc3MgR2l0IGV4dGVuZHMgU3ViTWVudSB7XG4vLyAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbi8vICAgcHJpdmF0ZSBhc3luYyBnaXRDb21tYW5kKGNvbW1hbmQpOiBQcm9taXNlPHZvaWQ+IHtcbi8vICAgICBjb25zdCBwcm9taXNlczogYW55W10gPSBbXVxuLy8gICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBjb25maWcucHJvamVjdHMpIHtcbi8vICAgICAgIGNvbnN0IGNtZCA9IGBnaXQgLUMgJHtjb25maWcucm9vdERpcn0vJHtwcm9qZWN0fSAke2NvbW1hbmR9YFxuLy8gICAgICAgY29uc3QgcHJvbWlzZSA9IHV0aWwuZXhlY0FzeW5jKGNtZCkudGhlbigoZXhlY1Jlc3VsdCkgPT4ge1xuLy8gICAgICAgICB1dGlsLmxvZyhjaGFsay5ncmVlbihgRE9ORSAtICR7cHJvamVjdH1gKSlcbi8vICAgICAgICAgcmV0dXJuIHsgW3Byb2plY3RdOiBleGVjUmVzdWx0IH1cbi8vICAgICAgIH0pXG4vLyAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpXG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuLy8gICAgIGNsaVNlcnZpY2UucHJpbnRTdGRNZXNzYWdlKGFzc2lnbkluKHt9LCAuLi5yZXN1bHQpKVxuLy8gICB9XG4vLyAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgIHN1cGVyKCdHaXQgYWN0aW9uPycsIFtcbi8vICAgICAgIHsgbmFtZTogJ1N0YXR1cycsIHZhbHVlOiAnc3RhdHVzJyB9LFxuLy8gICAgICAgeyBuYW1lOiAnRmV0Y2gnLCB2YWx1ZTogJ2ZldGNoJyB9LFxuLy8gICAgICAgeyBuYW1lOiAnUHVsbCcsIHZhbHVlOiAncHVsbCcgfSxcbi8vICAgICAgIHsgbmFtZTogJ0Nsb25lJywgdmFsdWU6ICdjbG9uZScgfSxcbi8vICAgICBdIGFzIENob2ljZUNvbGxlY3Rpb24pXG4vLyAgIH1cbi8vXG4vLyAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbi8vICAgcHJpdmF0ZSBhc3luYyBzdGF0dXMoKTogUHJvbWlzZTx2b2lkPiB7XG4vLyAgICAgYXdhaXQgdGhpcy5naXRDb21tYW5kKCdzdGF0dXMnKVxuLy8gICB9XG4vLyAgIHByaXZhdGUgYXN5bmMgX19mZXRjaCgpOiBQcm9taXNlPHZvaWQ+IHtcbi8vICAgICBhd2FpdCB0aGlzLmdpdENvbW1hbmQoJ2ZldGNoJylcbi8vICAgfVxuLy8gICBwcml2YXRlIGFzeW5jIF9fcHVsbCgpOiBQcm9taXNlPHZvaWQ+IHtcbi8vICAgICBhd2FpdCB0aGlzLmdpdENvbW1hbmQoJ3B1bGwnKVxuLy8gICB9XG4vL1xuLy8gICAvKipcbi8vICAgICogQ2xvbmUgYWxsIHByb2plY3QgZm9yIG1pY3Jvc2VydmljZXMgdGhhdCBiZWxvbmcgdG8gcGFyZW50IHByb2plY3Rcbi8vICAgICovXG4vLyAgIHByaXZhdGUgYXN5bmMgX19jbG9uZSgpOiBQcm9taXNlPHZvaWQ+IHtcbi8vICAgICBzaGVsbC5jZChjb25maWcucm9vdERpcilcbi8vICAgICBjb25zdCBwcm9taXNlczogYW55W10gPSBbXVxuLy8gICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBjb25maWcucHJvamVjdHMpIHtcbi8vICAgICAgIGNvbnN0IGNtZCA9IGBnaXQgY2xvbmUgZ2l0QCR7Y29uZmlnLmdpdC5ob3N0fToke2NvbmZpZy5naXQudGVhbX0vJHtjb25maWcuZ2l0LnByb2plY3RQcmVmaXh9LSR7cHJvamVjdH0uZ2l0ICR7cHJvamVjdH1gXG4vLyAgICAgICBjb25zdCBwcm9taXNlID0gdXRpbC5leGVjQXN5bmMoY21kKS50aGVuKChleGVjUmVzdWx0KSA9PiB7XG4vLyAgICAgICAgIHV0aWwubG9nKGNoYWxrLmdyZWVuKGBET05FIC0gJHtwcm9qZWN0fWApKVxuLy8gICAgICAgICByZXR1cm4geyBbcHJvamVjdF06IGV4ZWNSZXN1bHQgfVxuLy8gICAgICAgfSlcbi8vICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSlcbi8vICAgICB9XG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4vLyAgICAgY2xpU2VydmljZS5wcmludFN0ZE1lc3NhZ2UoYXNzaWduSW4oe30sIC4uLnJlc3VsdCkpXG4vLyAgIH1cbi8vIH1cbiJdfQ==