"use strict";
// import chalk from 'chalk'
// import { ChoiceCollection } from 'inquirer'
// import { assignIn } from 'lodash'
// import { cliService } from 'src/service/cli-service'
// import { util } from 'src/util'
// import { config } from 'src/util/config'
// import { SubMenu } from 'src/util/sub-menu'
//
// export = Clean
// class Clean extends SubMenu {
//   /**
//    * Remove content from node_modules folder located in all microservice projects
//    */
//   private async __npm(): Promise<void> {
//     const promises: any[] = []
//     for (const project of config.projects) {
//       const cmd = `rm -rf ${config.rootDir}/${project}/node_modules/*`
//       const promise = util.execAsync(cmd).then((execResult) => {
//         util.log(chalk.green(`DONE - ${project}`))
//         return { [project]: execResult }
//       })
//       promises.push(promise)
//     }
//     const result = await Promise.all(promises)
//     cliService.printStdMessage(assignIn({}, ...result))
//   }
//
//   /**
//    * Remove all images created for all microservices in this project, including global docker images.
//    * Before removing all images run `docker-compose down` to remove all containers
//    */
//   private async __docker(): Promise<void> {
//     for (const image of [
//       ...config.projects.map((proj) => `${config.git.projectPrefix}_${proj}`),
//       ...config.dockerBaseImages,
//     ]) {
//       const result = await util.execAsync(`docker rmi ${image}`)
//       util.log(chalk.cyan(image))
//       if (!result.error) util.log(result.stdout)
//       else util.log(chalk.red(result.stderr))
//     }
//   }
//   constructor() {
//     super('Clean action?', [
//       { name: 'NPM', value: 'npm' },
//       { name: 'Docker Images', value: 'docker' },
//     ] as ChoiceCollection)
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xlYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhlYy9DbGVhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEJBQTRCO0FBQzVCLDhDQUE4QztBQUM5QyxvQ0FBb0M7QUFDcEMsdURBQXVEO0FBQ3ZELGtDQUFrQztBQUNsQywyQ0FBMkM7QUFDM0MsOENBQThDO0FBQzlDLEVBQUU7QUFDRixpQkFBaUI7QUFDakIsZ0NBQWdDO0FBQ2hDLFFBQVE7QUFDUixvRkFBb0Y7QUFDcEYsUUFBUTtBQUNSLDJDQUEyQztBQUMzQyxpQ0FBaUM7QUFDakMsK0NBQStDO0FBQy9DLHlFQUF5RTtBQUN6RSxtRUFBbUU7QUFDbkUscURBQXFEO0FBQ3JELDJDQUEyQztBQUMzQyxXQUFXO0FBQ1gsK0JBQStCO0FBQy9CLFFBQVE7QUFDUixpREFBaUQ7QUFDakQsMERBQTBEO0FBQzFELE1BQU07QUFDTixFQUFFO0FBQ0YsUUFBUTtBQUNSLHdHQUF3RztBQUN4RyxxRkFBcUY7QUFDckYsUUFBUTtBQUNSLDhDQUE4QztBQUM5Qyw0QkFBNEI7QUFDNUIsaUZBQWlGO0FBQ2pGLG9DQUFvQztBQUNwQyxXQUFXO0FBQ1gsbUVBQW1FO0FBQ25FLG9DQUFvQztBQUNwQyxtREFBbUQ7QUFDbkQsZ0RBQWdEO0FBQ2hELFFBQVE7QUFDUixNQUFNO0FBQ04sb0JBQW9CO0FBQ3BCLCtCQUErQjtBQUMvQix1Q0FBdUM7QUFDdkMsb0RBQW9EO0FBQ3BELDZCQUE2QjtBQUM3QixNQUFNO0FBQ04sSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbi8vIGltcG9ydCB7IENob2ljZUNvbGxlY3Rpb24gfSBmcm9tICdpbnF1aXJlcidcbi8vIGltcG9ydCB7IGFzc2lnbkluIH0gZnJvbSAnbG9kYXNoJ1xuLy8gaW1wb3J0IHsgY2xpU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlL2NsaS1zZXJ2aWNlJ1xuLy8gaW1wb3J0IHsgdXRpbCB9IGZyb20gJ3NyYy91dGlsJ1xuLy8gaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuLy8gaW1wb3J0IHsgU3ViTWVudSB9IGZyb20gJ3NyYy91dGlsL3N1Yi1tZW51J1xuLy9cbi8vIGV4cG9ydCA9IENsZWFuXG4vLyBjbGFzcyBDbGVhbiBleHRlbmRzIFN1Yk1lbnUge1xuLy8gICAvKipcbi8vICAgICogUmVtb3ZlIGNvbnRlbnQgZnJvbSBub2RlX21vZHVsZXMgZm9sZGVyIGxvY2F0ZWQgaW4gYWxsIG1pY3Jvc2VydmljZSBwcm9qZWN0c1xuLy8gICAgKi9cbi8vICAgcHJpdmF0ZSBhc3luYyBfX25wbSgpOiBQcm9taXNlPHZvaWQ+IHtcbi8vICAgICBjb25zdCBwcm9taXNlczogYW55W10gPSBbXVxuLy8gICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBjb25maWcucHJvamVjdHMpIHtcbi8vICAgICAgIGNvbnN0IGNtZCA9IGBybSAtcmYgJHtjb25maWcucm9vdERpcn0vJHtwcm9qZWN0fS9ub2RlX21vZHVsZXMvKmBcbi8vICAgICAgIGNvbnN0IHByb21pc2UgPSB1dGlsLmV4ZWNBc3luYyhjbWQpLnRoZW4oKGV4ZWNSZXN1bHQpID0+IHtcbi8vICAgICAgICAgdXRpbC5sb2coY2hhbGsuZ3JlZW4oYERPTkUgLSAke3Byb2plY3R9YCkpXG4vLyAgICAgICAgIHJldHVybiB7IFtwcm9qZWN0XTogZXhlY1Jlc3VsdCB9XG4vLyAgICAgICB9KVxuLy8gICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKVxuLy8gICAgIH1cbi8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcbi8vICAgICBjbGlTZXJ2aWNlLnByaW50U3RkTWVzc2FnZShhc3NpZ25Jbih7fSwgLi4ucmVzdWx0KSlcbi8vICAgfVxuLy9cbi8vICAgLyoqXG4vLyAgICAqIFJlbW92ZSBhbGwgaW1hZ2VzIGNyZWF0ZWQgZm9yIGFsbCBtaWNyb3NlcnZpY2VzIGluIHRoaXMgcHJvamVjdCwgaW5jbHVkaW5nIGdsb2JhbCBkb2NrZXIgaW1hZ2VzLlxuLy8gICAgKiBCZWZvcmUgcmVtb3ZpbmcgYWxsIGltYWdlcyBydW4gYGRvY2tlci1jb21wb3NlIGRvd25gIHRvIHJlbW92ZSBhbGwgY29udGFpbmVyc1xuLy8gICAgKi9cbi8vICAgcHJpdmF0ZSBhc3luYyBfX2RvY2tlcigpOiBQcm9taXNlPHZvaWQ+IHtcbi8vICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIFtcbi8vICAgICAgIC4uLmNvbmZpZy5wcm9qZWN0cy5tYXAoKHByb2opID0+IGAke2NvbmZpZy5naXQucHJvamVjdFByZWZpeH1fJHtwcm9qfWApLFxuLy8gICAgICAgLi4uY29uZmlnLmRvY2tlckJhc2VJbWFnZXMsXG4vLyAgICAgXSkge1xuLy8gICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXRpbC5leGVjQXN5bmMoYGRvY2tlciBybWkgJHtpbWFnZX1gKVxuLy8gICAgICAgdXRpbC5sb2coY2hhbGsuY3lhbihpbWFnZSkpXG4vLyAgICAgICBpZiAoIXJlc3VsdC5lcnJvcikgdXRpbC5sb2cocmVzdWx0LnN0ZG91dClcbi8vICAgICAgIGVsc2UgdXRpbC5sb2coY2hhbGsucmVkKHJlc3VsdC5zdGRlcnIpKVxuLy8gICAgIH1cbi8vICAgfVxuLy8gICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICBzdXBlcignQ2xlYW4gYWN0aW9uPycsIFtcbi8vICAgICAgIHsgbmFtZTogJ05QTScsIHZhbHVlOiAnbnBtJyB9LFxuLy8gICAgICAgeyBuYW1lOiAnRG9ja2VyIEltYWdlcycsIHZhbHVlOiAnZG9ja2VyJyB9LFxuLy8gICAgIF0gYXMgQ2hvaWNlQ29sbGVjdGlvbilcbi8vICAgfVxuLy8gfVxuIl19