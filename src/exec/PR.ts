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
