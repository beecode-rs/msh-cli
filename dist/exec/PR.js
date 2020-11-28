"use strict";
// import chalk from 'chalk'
// import inquirer, { ChoiceCollection } from 'inquirer'
// import { assignIn } from 'lodash'
// import request from 'request-promise-native'
// import { util } from 'src/util'
// import { config } from 'src/util/config'
// import { SubMenu } from 'src/util/sub-menu'
//
// export = PR
// class PR extends SubMenu {
//   private async __createMergePR(): Promise<void> {
//     // TODO split into multiple functions
//     let username = config.git.username
//     let password = config.git.password
//     if (!username) {
//       username = (await inquirer.prompt({ type: 'input', message: 'BitBucket username:', name: 'user' })).user
//     }
//     if (!password) {
//       password = (await inquirer.prompt({ type: 'password', message: 'BitBucket password:', name: 'pass' })).pass
//     }
//     const Authorization = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
//
//     const makePullRequestPromises: any[] = []
//     for (const project of config.projects) {
//       if (config.pullRequestSkip.includes(project)) continue
//       const url = `https://api.bitbucket.org/2.0/repositories/${config.git.team}/${config.git.projectPrefix}-${project}/pullrequests`
//       const promise = request(url, {
//         method: 'POST',
//         headers: { Authorization },
//         json: {
//           title: 'Deploy to production',
//           source: { branch: { name: 'master' } },
//           destination: { branch: { name: 'production' } },
//         },
//       })
//         .then((result) => {
//           util.log(
//             chalk.green(
//               `https://bitbucket.org/${config.git.team}/${config.git.projectPrefix}-${project}/pull-requests/${result.id}`
//             )
//           )
//           return {
//             [project]: `https://api.bitbucket.org/2.0/repositories/${config.git.team}/${config.git.projectPrefix}-${project}/pullrequests/${result.id}/merge`,
//           }
//         })
//         .catch((err) => {
//           util.log(chalk.yellow(`${project} - ${err.message}`))
//         })
//       makePullRequestPromises.push(promise)
//     }
//     const pullRequestResults = assignIn(
//       {},
//       ...(await Promise.all(makePullRequestPromises)).filter((pr) => typeof pr !== 'undefined')
//     )
//
//     if (Object.keys(pullRequestResults as any).length > 0) {
//       const mergeIt: string = (
//         await inquirer.prompt({
//           type: 'input',
//           message: 'Merge all (y/N):',
//           name: 'merge',
//         })
//       ).merge.toString()
//       if (mergeIt.toUpperCase() === 'Y') {
//         const mergePromises: any[] = []
//         for (const [pr, urlMerge] of Object.entries(pullRequestResults as any)) {
//           const mergePromise = request(urlMerge, {
//             method: 'POST',
//             headers: { Authorization },
//           }).then((result) => {
//             util.log(chalk.green(`${pr}: ${JSON.parse(result).state}`))
//           })
//           mergePromises.push(mergePromise)
//         }
//         await Promise.all(mergePromises)
//       }
//     }
//   }
//
//   constructor() {
//     super('Pull Request action?', [{ name: 'Create / Merge PR', value: 'createMergePR' }] as ChoiceCollection)
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUFIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhlYy9QUi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEJBQTRCO0FBQzVCLHdEQUF3RDtBQUN4RCxvQ0FBb0M7QUFDcEMsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywyQ0FBMkM7QUFDM0MsOENBQThDO0FBQzlDLEVBQUU7QUFDRixjQUFjO0FBQ2QsNkJBQTZCO0FBQzdCLHFEQUFxRDtBQUNyRCw0Q0FBNEM7QUFDNUMseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6Qyx1QkFBdUI7QUFDdkIsaUhBQWlIO0FBQ2pILFFBQVE7QUFDUix1QkFBdUI7QUFDdkIsb0hBQW9IO0FBQ3BILFFBQVE7QUFDUixpR0FBaUc7QUFDakcsRUFBRTtBQUNGLGdEQUFnRDtBQUNoRCwrQ0FBK0M7QUFDL0MsK0RBQStEO0FBQy9ELHdJQUF3STtBQUN4SSx1Q0FBdUM7QUFDdkMsMEJBQTBCO0FBQzFCLHNDQUFzQztBQUN0QyxrQkFBa0I7QUFDbEIsMkNBQTJDO0FBQzNDLG9EQUFvRDtBQUNwRCw2REFBNkQ7QUFDN0QsYUFBYTtBQUNiLFdBQVc7QUFDWCw4QkFBOEI7QUFDOUIsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQiw2SEFBNkg7QUFDN0gsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZCxxQkFBcUI7QUFDckIsaUtBQWlLO0FBQ2pLLGNBQWM7QUFDZCxhQUFhO0FBQ2IsNEJBQTRCO0FBQzVCLGtFQUFrRTtBQUNsRSxhQUFhO0FBQ2IsOENBQThDO0FBQzlDLFFBQVE7QUFDUiwyQ0FBMkM7QUFDM0MsWUFBWTtBQUNaLGtHQUFrRztBQUNsRyxRQUFRO0FBQ1IsRUFBRTtBQUNGLCtEQUErRDtBQUMvRCxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLDJCQUEyQjtBQUMzQix5Q0FBeUM7QUFDekMsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYiwyQkFBMkI7QUFDM0IsNkNBQTZDO0FBQzdDLDBDQUEwQztBQUMxQyxvRkFBb0Y7QUFDcEYscURBQXFEO0FBQ3JELDhCQUE4QjtBQUM5QiwwQ0FBMEM7QUFDMUMsa0NBQWtDO0FBQ2xDLDBFQUEwRTtBQUMxRSxlQUFlO0FBQ2YsNkNBQTZDO0FBQzdDLFlBQVk7QUFDWiwyQ0FBMkM7QUFDM0MsVUFBVTtBQUNWLFFBQVE7QUFDUixNQUFNO0FBQ04sRUFBRTtBQUNGLG9CQUFvQjtBQUNwQixpSEFBaUg7QUFDakgsTUFBTTtBQUNOLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG4vLyBpbXBvcnQgaW5xdWlyZXIsIHsgQ2hvaWNlQ29sbGVjdGlvbiB9IGZyb20gJ2lucXVpcmVyJ1xuLy8gaW1wb3J0IHsgYXNzaWduSW4gfSBmcm9tICdsb2Rhc2gnXG4vLyBpbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0LXByb21pc2UtbmF0aXZlJ1xuLy8gaW1wb3J0IHsgdXRpbCB9IGZyb20gJ3NyYy91dGlsJ1xuLy8gaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnc3JjL3V0aWwvY29uZmlnJ1xuLy8gaW1wb3J0IHsgU3ViTWVudSB9IGZyb20gJ3NyYy91dGlsL3N1Yi1tZW51J1xuLy9cbi8vIGV4cG9ydCA9IFBSXG4vLyBjbGFzcyBQUiBleHRlbmRzIFN1Yk1lbnUge1xuLy8gICBwcml2YXRlIGFzeW5jIF9fY3JlYXRlTWVyZ2VQUigpOiBQcm9taXNlPHZvaWQ+IHtcbi8vICAgICAvLyBUT0RPIHNwbGl0IGludG8gbXVsdGlwbGUgZnVuY3Rpb25zXG4vLyAgICAgbGV0IHVzZXJuYW1lID0gY29uZmlnLmdpdC51c2VybmFtZVxuLy8gICAgIGxldCBwYXNzd29yZCA9IGNvbmZpZy5naXQucGFzc3dvcmRcbi8vICAgICBpZiAoIXVzZXJuYW1lKSB7XG4vLyAgICAgICB1c2VybmFtZSA9IChhd2FpdCBpbnF1aXJlci5wcm9tcHQoeyB0eXBlOiAnaW5wdXQnLCBtZXNzYWdlOiAnQml0QnVja2V0IHVzZXJuYW1lOicsIG5hbWU6ICd1c2VyJyB9KSkudXNlclxuLy8gICAgIH1cbi8vICAgICBpZiAoIXBhc3N3b3JkKSB7XG4vLyAgICAgICBwYXNzd29yZCA9IChhd2FpdCBpbnF1aXJlci5wcm9tcHQoeyB0eXBlOiAncGFzc3dvcmQnLCBtZXNzYWdlOiAnQml0QnVja2V0IHBhc3N3b3JkOicsIG5hbWU6ICdwYXNzJyB9KSkucGFzc1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBBdXRob3JpemF0aW9uID0gYEJhc2ljICR7QnVmZmVyLmZyb20oYCR7dXNlcm5hbWV9OiR7cGFzc3dvcmR9YCkudG9TdHJpbmcoJ2Jhc2U2NCcpfWBcbi8vXG4vLyAgICAgY29uc3QgbWFrZVB1bGxSZXF1ZXN0UHJvbWlzZXM6IGFueVtdID0gW11cbi8vICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgY29uZmlnLnByb2plY3RzKSB7XG4vLyAgICAgICBpZiAoY29uZmlnLnB1bGxSZXF1ZXN0U2tpcC5pbmNsdWRlcyhwcm9qZWN0KSkgY29udGludWVcbi8vICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5iaXRidWNrZXQub3JnLzIuMC9yZXBvc2l0b3JpZXMvJHtjb25maWcuZ2l0LnRlYW19LyR7Y29uZmlnLmdpdC5wcm9qZWN0UHJlZml4fS0ke3Byb2plY3R9L3B1bGxyZXF1ZXN0c2Bcbi8vICAgICAgIGNvbnN0IHByb21pc2UgPSByZXF1ZXN0KHVybCwge1xuLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uIH0sXG4vLyAgICAgICAgIGpzb246IHtcbi8vICAgICAgICAgICB0aXRsZTogJ0RlcGxveSB0byBwcm9kdWN0aW9uJyxcbi8vICAgICAgICAgICBzb3VyY2U6IHsgYnJhbmNoOiB7IG5hbWU6ICdtYXN0ZXInIH0gfSxcbi8vICAgICAgICAgICBkZXN0aW5hdGlvbjogeyBicmFuY2g6IHsgbmFtZTogJ3Byb2R1Y3Rpb24nIH0gfSxcbi8vICAgICAgICAgfSxcbi8vICAgICAgIH0pXG4vLyAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbi8vICAgICAgICAgICB1dGlsLmxvZyhcbi8vICAgICAgICAgICAgIGNoYWxrLmdyZWVuKFxuLy8gICAgICAgICAgICAgICBgaHR0cHM6Ly9iaXRidWNrZXQub3JnLyR7Y29uZmlnLmdpdC50ZWFtfS8ke2NvbmZpZy5naXQucHJvamVjdFByZWZpeH0tJHtwcm9qZWN0fS9wdWxsLXJlcXVlc3RzLyR7cmVzdWx0LmlkfWBcbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgICApXG4vLyAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIFtwcm9qZWN0XTogYGh0dHBzOi8vYXBpLmJpdGJ1Y2tldC5vcmcvMi4wL3JlcG9zaXRvcmllcy8ke2NvbmZpZy5naXQudGVhbX0vJHtjb25maWcuZ2l0LnByb2plY3RQcmVmaXh9LSR7cHJvamVjdH0vcHVsbHJlcXVlc3RzLyR7cmVzdWx0LmlkfS9tZXJnZWAsXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgICAgICAgIHV0aWwubG9nKGNoYWxrLnllbGxvdyhgJHtwcm9qZWN0fSAtICR7ZXJyLm1lc3NhZ2V9YCkpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICBtYWtlUHVsbFJlcXVlc3RQcm9taXNlcy5wdXNoKHByb21pc2UpXG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IHB1bGxSZXF1ZXN0UmVzdWx0cyA9IGFzc2lnbkluKFxuLy8gICAgICAge30sXG4vLyAgICAgICAuLi4oYXdhaXQgUHJvbWlzZS5hbGwobWFrZVB1bGxSZXF1ZXN0UHJvbWlzZXMpKS5maWx0ZXIoKHByKSA9PiB0eXBlb2YgcHIgIT09ICd1bmRlZmluZWQnKVxuLy8gICAgIClcbi8vXG4vLyAgICAgaWYgKE9iamVjdC5rZXlzKHB1bGxSZXF1ZXN0UmVzdWx0cyBhcyBhbnkpLmxlbmd0aCA+IDApIHtcbi8vICAgICAgIGNvbnN0IG1lcmdlSXQ6IHN0cmluZyA9IChcbi8vICAgICAgICAgYXdhaXQgaW5xdWlyZXIucHJvbXB0KHtcbi8vICAgICAgICAgICB0eXBlOiAnaW5wdXQnLFxuLy8gICAgICAgICAgIG1lc3NhZ2U6ICdNZXJnZSBhbGwgKHkvTik6Jyxcbi8vICAgICAgICAgICBuYW1lOiAnbWVyZ2UnLFxuLy8gICAgICAgICB9KVxuLy8gICAgICAgKS5tZXJnZS50b1N0cmluZygpXG4vLyAgICAgICBpZiAobWVyZ2VJdC50b1VwcGVyQ2FzZSgpID09PSAnWScpIHtcbi8vICAgICAgICAgY29uc3QgbWVyZ2VQcm9taXNlczogYW55W10gPSBbXVxuLy8gICAgICAgICBmb3IgKGNvbnN0IFtwciwgdXJsTWVyZ2VdIG9mIE9iamVjdC5lbnRyaWVzKHB1bGxSZXF1ZXN0UmVzdWx0cyBhcyBhbnkpKSB7XG4vLyAgICAgICAgICAgY29uc3QgbWVyZ2VQcm9taXNlID0gcmVxdWVzdCh1cmxNZXJnZSwge1xuLy8gICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4vLyAgICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb24gfSxcbi8vICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbi8vICAgICAgICAgICAgIHV0aWwubG9nKGNoYWxrLmdyZWVuKGAke3ByfTogJHtKU09OLnBhcnNlKHJlc3VsdCkuc3RhdGV9YCkpXG4vLyAgICAgICAgICAgfSlcbi8vICAgICAgICAgICBtZXJnZVByb21pc2VzLnB1c2gobWVyZ2VQcm9taXNlKVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKG1lcmdlUHJvbWlzZXMpXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vL1xuLy8gICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICBzdXBlcignUHVsbCBSZXF1ZXN0IGFjdGlvbj8nLCBbeyBuYW1lOiAnQ3JlYXRlIC8gTWVyZ2UgUFInLCB2YWx1ZTogJ2NyZWF0ZU1lcmdlUFInIH1dIGFzIENob2ljZUNvbGxlY3Rpb24pXG4vLyAgIH1cbi8vIH1cbiJdfQ==