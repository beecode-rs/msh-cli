"use strict";
// import cVer from 'compare-versions'
// import stringify from 'fast-json-stable-stringify'
// import fs from 'fs'
// import { ChoiceCollection } from 'inquirer'
// import * as path from 'path'
// import { util } from 'src/util'
// import { config } from 'src/util/config'
// import { SubMenu } from 'src/util/sub-menu'
//
// export = NPM
// class NPM extends SubMenu {
//   constructor() {
//     super('NPM action?', [{ name: 'Global NPM', value: 'global' }] as ChoiceCollection)
//   }
//
//   /**
//    * Gather all npm packages into one package.json located in parent project.
//    */
//   private async __global(): Promise<void> {
//     const gDeps = {}
//     const gDepsNewer = {}
//     const gDepsOlder = {}
//
//     for (const project of config.projects) {
//       // eslint-disable-next-line @typescript-eslint/no-var-requires
//       const packageJs = require(path.join(process.cwd(), `${project}/package.json`))
//       const allDeps = { ...packageJs.dependencies, ...packageJs.devDependencies }
//       for (const key of Object.keys(allDeps)) {
//         gDeps[key] = gDeps[key] || {}
//         gDeps[key][allDeps[key]] = gDeps[key][allDeps[key]] || []
//         gDeps[key][allDeps[key]].push(project)
//       }
//     }
//
//     for (const key of Object.keys(gDeps)) {
//       if (Object.keys(gDeps[key]).length > 1) {
//         const sortedVersionsAsc = Object.keys(gDeps[key]).sort(cVer)
//         gDepsNewer[key] = sortedVersionsAsc.pop()
//
//         for (const oldVer of sortedVersionsAsc) {
//           gDepsOlder[key] = gDepsOlder[key] || {}
//           gDepsOlder[key][oldVer] = gDeps[key][oldVer]
//         }
//       } else {
//         gDepsNewer[key] = Object.keys(gDeps[key])[0]
//       }
//     }
//
//     // revert gDepsOlder result to print by project
//     const gDepsReverted = {}
//     for (const pack of Object.keys(gDepsOlder)) {
//       const versions = gDepsOlder[pack]
//       for (const ver of Object.keys(versions)) {
//         const projs = versions[ver]
//         for (const proj of projs) {
//           gDepsReverted[proj] = gDepsReverted[proj] || {}
//           gDepsReverted[proj][pack] = ver
//         }
//       }
//     }
//     util.log('Old Deps (by project):')
//     util.log(gDepsReverted)
//     util.log('Old Deps (by package):')
//     util.log(gDepsOlder)
//
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     const globalPackageJs = require(path.join(process.cwd(), `package.json`))
//     globalPackageJs.dependencies = gDepsNewer
//
//     fs.writeFileSync('package.json', JSON.stringify(JSON.parse(stringify(globalPackageJs)), null, 4), 'utf8')
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTlBNLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4ZWMvTlBNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBc0M7QUFDdEMscURBQXFEO0FBQ3JELHNCQUFzQjtBQUN0Qiw4Q0FBOEM7QUFDOUMsK0JBQStCO0FBQy9CLGtDQUFrQztBQUNsQywyQ0FBMkM7QUFDM0MsOENBQThDO0FBQzlDLEVBQUU7QUFDRixlQUFlO0FBQ2YsOEJBQThCO0FBQzlCLG9CQUFvQjtBQUNwQiwwRkFBMEY7QUFDMUYsTUFBTTtBQUNOLEVBQUU7QUFDRixRQUFRO0FBQ1IsZ0ZBQWdGO0FBQ2hGLFFBQVE7QUFDUiw4Q0FBOEM7QUFDOUMsdUJBQXVCO0FBQ3ZCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsRUFBRTtBQUNGLCtDQUErQztBQUMvQyx1RUFBdUU7QUFDdkUsdUZBQXVGO0FBQ3ZGLG9GQUFvRjtBQUNwRixrREFBa0Q7QUFDbEQsd0NBQXdDO0FBQ3hDLG9FQUFvRTtBQUNwRSxpREFBaUQ7QUFDakQsVUFBVTtBQUNWLFFBQVE7QUFDUixFQUFFO0FBQ0YsOENBQThDO0FBQzlDLGtEQUFrRDtBQUNsRCx1RUFBdUU7QUFDdkUsb0RBQW9EO0FBQ3BELEVBQUU7QUFDRixvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ3BELHlEQUF5RDtBQUN6RCxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLHVEQUF1RDtBQUN2RCxVQUFVO0FBQ1YsUUFBUTtBQUNSLEVBQUU7QUFDRixzREFBc0Q7QUFDdEQsK0JBQStCO0FBQy9CLG9EQUFvRDtBQUNwRCwwQ0FBMEM7QUFDMUMsbURBQW1EO0FBQ25ELHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsNERBQTREO0FBQzVELDRDQUE0QztBQUM1QyxZQUFZO0FBQ1osVUFBVTtBQUNWLFFBQVE7QUFDUix5Q0FBeUM7QUFDekMsOEJBQThCO0FBQzlCLHlDQUF5QztBQUN6QywyQkFBMkI7QUFDM0IsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxnRkFBZ0Y7QUFDaEYsZ0RBQWdEO0FBQ2hELEVBQUU7QUFDRixnSEFBZ0g7QUFDaEgsTUFBTTtBQUNOLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgY1ZlciBmcm9tICdjb21wYXJlLXZlcnNpb25zJ1xuLy8gaW1wb3J0IHN0cmluZ2lmeSBmcm9tICdmYXN0LWpzb24tc3RhYmxlLXN0cmluZ2lmeSdcbi8vIGltcG9ydCBmcyBmcm9tICdmcydcbi8vIGltcG9ydCB7IENob2ljZUNvbGxlY3Rpb24gfSBmcm9tICdpbnF1aXJlcidcbi8vIGltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbi8vIGltcG9ydCB7IHV0aWwgfSBmcm9tICdzcmMvdXRpbCdcbi8vIGltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ3NyYy91dGlsL2NvbmZpZydcbi8vIGltcG9ydCB7IFN1Yk1lbnUgfSBmcm9tICdzcmMvdXRpbC9zdWItbWVudSdcbi8vXG4vLyBleHBvcnQgPSBOUE1cbi8vIGNsYXNzIE5QTSBleHRlbmRzIFN1Yk1lbnUge1xuLy8gICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICBzdXBlcignTlBNIGFjdGlvbj8nLCBbeyBuYW1lOiAnR2xvYmFsIE5QTScsIHZhbHVlOiAnZ2xvYmFsJyB9XSBhcyBDaG9pY2VDb2xsZWN0aW9uKVxuLy8gICB9XG4vL1xuLy8gICAvKipcbi8vICAgICogR2F0aGVyIGFsbCBucG0gcGFja2FnZXMgaW50byBvbmUgcGFja2FnZS5qc29uIGxvY2F0ZWQgaW4gcGFyZW50IHByb2plY3QuXG4vLyAgICAqL1xuLy8gICBwcml2YXRlIGFzeW5jIF9fZ2xvYmFsKCk6IFByb21pc2U8dm9pZD4ge1xuLy8gICAgIGNvbnN0IGdEZXBzID0ge31cbi8vICAgICBjb25zdCBnRGVwc05ld2VyID0ge31cbi8vICAgICBjb25zdCBnRGVwc09sZGVyID0ge31cbi8vXG4vLyAgICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIGNvbmZpZy5wcm9qZWN0cykge1xuLy8gICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbi8vICAgICAgIGNvbnN0IHBhY2thZ2VKcyA9IHJlcXVpcmUocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIGAke3Byb2plY3R9L3BhY2thZ2UuanNvbmApKVxuLy8gICAgICAgY29uc3QgYWxsRGVwcyA9IHsgLi4ucGFja2FnZUpzLmRlcGVuZGVuY2llcywgLi4ucGFja2FnZUpzLmRldkRlcGVuZGVuY2llcyB9XG4vLyAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhhbGxEZXBzKSkge1xuLy8gICAgICAgICBnRGVwc1trZXldID0gZ0RlcHNba2V5XSB8fCB7fVxuLy8gICAgICAgICBnRGVwc1trZXldW2FsbERlcHNba2V5XV0gPSBnRGVwc1trZXldW2FsbERlcHNba2V5XV0gfHwgW11cbi8vICAgICAgICAgZ0RlcHNba2V5XVthbGxEZXBzW2tleV1dLnB1c2gocHJvamVjdClcbi8vICAgICAgIH1cbi8vICAgICB9XG4vL1xuLy8gICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGdEZXBzKSkge1xuLy8gICAgICAgaWYgKE9iamVjdC5rZXlzKGdEZXBzW2tleV0pLmxlbmd0aCA+IDEpIHtcbi8vICAgICAgICAgY29uc3Qgc29ydGVkVmVyc2lvbnNBc2MgPSBPYmplY3Qua2V5cyhnRGVwc1trZXldKS5zb3J0KGNWZXIpXG4vLyAgICAgICAgIGdEZXBzTmV3ZXJba2V5XSA9IHNvcnRlZFZlcnNpb25zQXNjLnBvcCgpXG4vL1xuLy8gICAgICAgICBmb3IgKGNvbnN0IG9sZFZlciBvZiBzb3J0ZWRWZXJzaW9uc0FzYykge1xuLy8gICAgICAgICAgIGdEZXBzT2xkZXJba2V5XSA9IGdEZXBzT2xkZXJba2V5XSB8fCB7fVxuLy8gICAgICAgICAgIGdEZXBzT2xkZXJba2V5XVtvbGRWZXJdID0gZ0RlcHNba2V5XVtvbGRWZXJdXG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGdEZXBzTmV3ZXJba2V5XSA9IE9iamVjdC5rZXlzKGdEZXBzW2tleV0pWzBdXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy9cbi8vICAgICAvLyByZXZlcnQgZ0RlcHNPbGRlciByZXN1bHQgdG8gcHJpbnQgYnkgcHJvamVjdFxuLy8gICAgIGNvbnN0IGdEZXBzUmV2ZXJ0ZWQgPSB7fVxuLy8gICAgIGZvciAoY29uc3QgcGFjayBvZiBPYmplY3Qua2V5cyhnRGVwc09sZGVyKSkge1xuLy8gICAgICAgY29uc3QgdmVyc2lvbnMgPSBnRGVwc09sZGVyW3BhY2tdXG4vLyAgICAgICBmb3IgKGNvbnN0IHZlciBvZiBPYmplY3Qua2V5cyh2ZXJzaW9ucykpIHtcbi8vICAgICAgICAgY29uc3QgcHJvanMgPSB2ZXJzaW9uc1t2ZXJdXG4vLyAgICAgICAgIGZvciAoY29uc3QgcHJvaiBvZiBwcm9qcykge1xuLy8gICAgICAgICAgIGdEZXBzUmV2ZXJ0ZWRbcHJval0gPSBnRGVwc1JldmVydGVkW3Byb2pdIHx8IHt9XG4vLyAgICAgICAgICAgZ0RlcHNSZXZlcnRlZFtwcm9qXVtwYWNrXSA9IHZlclxuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHV0aWwubG9nKCdPbGQgRGVwcyAoYnkgcHJvamVjdCk6Jylcbi8vICAgICB1dGlsLmxvZyhnRGVwc1JldmVydGVkKVxuLy8gICAgIHV0aWwubG9nKCdPbGQgRGVwcyAoYnkgcGFja2FnZSk6Jylcbi8vICAgICB1dGlsLmxvZyhnRGVwc09sZGVyKVxuLy9cbi8vICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlc1xuLy8gICAgIGNvbnN0IGdsb2JhbFBhY2thZ2VKcyA9IHJlcXVpcmUocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIGBwYWNrYWdlLmpzb25gKSlcbi8vICAgICBnbG9iYWxQYWNrYWdlSnMuZGVwZW5kZW5jaWVzID0gZ0RlcHNOZXdlclxuLy9cbi8vICAgICBmcy53cml0ZUZpbGVTeW5jKCdwYWNrYWdlLmpzb24nLCBKU09OLnN0cmluZ2lmeShKU09OLnBhcnNlKHN0cmluZ2lmeShnbG9iYWxQYWNrYWdlSnMpKSwgbnVsbCwgNCksICd1dGY4Jylcbi8vICAgfVxuLy8gfVxuIl19