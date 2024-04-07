[@beecode/msh-cli](../README.md) / model/command/project-command/npm-global-project-command

# Module: model/command/project-command/npm-global-project-command

## Table of contents

### Classes

- [NpmGlobalProjectCommand](../classes/model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md)

### Type Aliases

- [DependenciesObject](model_command_project_command_npm_global_project_command.md#dependenciesobject)
- [ProjectWithDependencies](model_command_project_command_npm_global_project_command.md#projectwithdependencies)
- [UniquePackages](model_command_project_command_npm_global_project_command.md#uniquepackages)
- [VersionOnProjects](model_command_project_command_npm_global_project_command.md#versiononprojects)

### Functions

- [npmGlobalProjectCommandFactory](model_command_project_command_npm_global_project_command.md#npmglobalprojectcommandfactory)

## Type Aliases

### DependenciesObject

Ƭ **DependenciesObject**: `Record`\<`string`, `string`\>

#### Defined in

[cli/src/model/command/project-command/npm-global-project-command.ts:14](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-global-project-command.ts#L14)

___

### ProjectWithDependencies

Ƭ **ProjectWithDependencies**: `Record`\<`string`, [`DependenciesObject`](model_command_project_command_npm_global_project_command.md#dependenciesobject)\>

#### Defined in

[cli/src/model/command/project-command/npm-global-project-command.ts:16](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-global-project-command.ts#L16)

___

### UniquePackages

Ƭ **UniquePackages**: `Record`\<`string`, \{ `versionProject`: [`VersionOnProjects`](model_command_project_command_npm_global_project_command.md#versiononprojects) ; `versions`: `string`[]  }\>

#### Defined in

[cli/src/model/command/project-command/npm-global-project-command.ts:12](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-global-project-command.ts#L12)

___

### VersionOnProjects

Ƭ **VersionOnProjects**: `Record`\<`string`, `string`[]\>

#### Defined in

[cli/src/model/command/project-command/npm-global-project-command.ts:10](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-global-project-command.ts#L10)

## Functions

### npmGlobalProjectCommandFactory

▸ **npmGlobalProjectCommandFactory**(`...params`): [`NpmGlobalProjectCommand`](../classes/model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | [] |

#### Returns

[`NpmGlobalProjectCommand`](../classes/model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md)

#### Defined in

[cli/src/model/command/project-command/npm-global-project-command.ts:138](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-global-project-command.ts#L138)
