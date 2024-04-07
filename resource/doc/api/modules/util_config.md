[@beecode/msh-cli](../README.md) / util/config

# Module: util/config

## Table of contents

### Functions

- [config](util_config.md#config)

## Functions

### config

▸ **config**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cmd` | \{ `gitEnabled`: `boolean` ; `npmEnabled`: `boolean`  } |
| `cmd.gitEnabled` | `boolean` |
| `cmd.npmEnabled` | `boolean` |
| `git` | \{ `host`: `string` ; `password`: `undefined` \| `string` ; `projectPrefix`: `undefined` \| `string` ; `team`: `undefined` \| `string` ; `username`: `undefined` \| `string`  } |
| `git.host` | `string` |
| `git.password` | `undefined` \| `string` |
| `git.projectPrefix` | `undefined` \| `string` |
| `git.team` | `undefined` \| `string` |
| `git.username` | `undefined` \| `string` |
| `logLevel` | `string` |
| `npm` | \{ `globalIgnorePackages`: `string`[]  } |
| `npm.globalIgnorePackages` | `string`[] |
| `projects` | `string`[] |
| `pullRequestSkip` | `string`[] |
| `rootDir` | `string` |

#### Defined in

[cli/src/util/config.ts:15](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/util/config.ts#L15)
