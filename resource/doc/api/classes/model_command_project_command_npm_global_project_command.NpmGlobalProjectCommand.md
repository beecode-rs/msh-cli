[@beecode/msh-cli](../README.md) / [model/command/project-command/npm-global-project-command](../modules/model_command_project_command_npm_global_project_command.md) / NpmGlobalProjectCommand

# Class: NpmGlobalProjectCommand

[model/command/project-command/npm-global-project-command](../modules/model_command_project_command_npm_global_project_command.md).NpmGlobalProjectCommand

## Implements

- [`Executable`](../interfaces/model_command_interfaces.Executable.md)

## Table of contents

### Constructors

- [constructor](model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md#constructor)

### Methods

- [\_allDepsByProject](model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md#_alldepsbyproject)
- [\_highestDependencies](model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md#_highestdependencies)
- [\_highestVersion](model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md#_highestversion)
- [\_overrideGlobalDepsWithNewHighestDependencies](model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md#_overrideglobaldepswithnewhighestdependencies)
- [\_packageJsonForProject](model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md#_packagejsonforproject)
- [\_removeIgnoredPackages](model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md#_removeignoredpackages)
- [\_uniquePackages](model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md#_uniquepackages)
- [\_versionConflictWarningMessage](model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md#_versionconflictwarningmessage)
- [execute](model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md#execute)

## Constructors

### constructor

• **new NpmGlobalProjectCommand**(): [`NpmGlobalProjectCommand`](model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md)

#### Returns

[`NpmGlobalProjectCommand`](model_command_project_command_npm_global_project_command.NpmGlobalProjectCommand.md)

## Methods

### \_allDepsByProject

▸ **_allDepsByProject**(): [`ProjectWithDependencies`](../modules/model_command_project_command_npm_global_project_command.md#projectwithdependencies)

#### Returns

[`ProjectWithDependencies`](../modules/model_command_project_command_npm_global_project_command.md#projectwithdependencies)

#### Defined in

[cli/src/model/command/project-command/npm-global-project-command.ts:48](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-global-project-command.ts#L48)

___

### \_highestDependencies

▸ **_highestDependencies**(`uniquePackages`): [`DependenciesObject`](../modules/model_command_project_command_npm_global_project_command.md#dependenciesobject)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uniquePackages` | [`UniquePackages`](../modules/model_command_project_command_npm_global_project_command.md#uniquepackages) |

#### Returns

[`DependenciesObject`](../modules/model_command_project_command_npm_global_project_command.md#dependenciesobject)

#### Defined in

[cli/src/model/command/project-command/npm-global-project-command.ts:109](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-global-project-command.ts#L109)

___

### \_highestVersion

▸ **_highestVersion**(`versions`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `versions` | `string`[] |

#### Returns

`string`

#### Defined in

[cli/src/model/command/project-command/npm-global-project-command.ts:115](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-global-project-command.ts#L115)

___

### \_overrideGlobalDepsWithNewHighestDependencies

▸ **_overrideGlobalDepsWithNewHighestDependencies**(`highestDependencies`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `highestDependencies` | [`DependenciesObject`](../modules/model_command_project_command_npm_global_project_command.md#dependenciesobject) |

#### Returns

`void`

#### Defined in

[cli/src/model/command/project-command/npm-global-project-command.ts:125](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-global-project-command.ts#L125)

___

### \_packageJsonForProject

▸ **_packageJsonForProject**(`project?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `project?` | `string` |

#### Returns

`any`

#### Defined in

[cli/src/model/command/project-command/npm-global-project-command.ts:133](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-global-project-command.ts#L133)

___

### \_removeIgnoredPackages

▸ **_removeIgnoredPackages**(`dependencies`): [`DependenciesObject`](../modules/model_command_project_command_npm_global_project_command.md#dependenciesobject)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dependencies` | [`DependenciesObject`](../modules/model_command_project_command_npm_global_project_command.md#dependenciesobject) |

#### Returns

[`DependenciesObject`](../modules/model_command_project_command_npm_global_project_command.md#dependenciesobject)

#### Defined in

[cli/src/model/command/project-command/npm-global-project-command.ts:60](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-global-project-command.ts#L60)

___

### \_uniquePackages

▸ **_uniquePackages**(`depsByProject`): [`UniquePackages`](../modules/model_command_project_command_npm_global_project_command.md#uniquepackages)

#### Parameters

| Name | Type |
| :------ | :------ |
| `depsByProject` | [`ProjectWithDependencies`](../modules/model_command_project_command_npm_global_project_command.md#projectwithdependencies) |

#### Returns

[`UniquePackages`](../modules/model_command_project_command_npm_global_project_command.md#uniquepackages)

#### Defined in

[cli/src/model/command/project-command/npm-global-project-command.ts:71](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-global-project-command.ts#L71)

___

### \_versionConflictWarningMessage

▸ **_versionConflictWarningMessage**(`uniquePackages`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `uniquePackages` | [`UniquePackages`](../modules/model_command_project_command_npm_global_project_command.md#uniquepackages) |

#### Returns

`string`[]

#### Defined in

[cli/src/model/command/project-command/npm-global-project-command.ts:87](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-global-project-command.ts#L87)

___

### execute

▸ **execute**(): `Promise`\<[`ExecuteResult`](../modules/model_command_interfaces.md#executeresult)[]\>

#### Returns

`Promise`\<[`ExecuteResult`](../modules/model_command_interfaces.md#executeresult)[]\>

#### Implementation of

[Executable](../interfaces/model_command_interfaces.Executable.md).[execute](../interfaces/model_command_interfaces.Executable.md#execute)

#### Defined in

[cli/src/model/command/project-command/npm-global-project-command.ts:19](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-global-project-command.ts#L19)
