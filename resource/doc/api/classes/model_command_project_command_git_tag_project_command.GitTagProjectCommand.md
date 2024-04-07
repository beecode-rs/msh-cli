[@beecode/msh-cli](../README.md) / [model/command/project-command/git-tag-project-command](../modules/model_command_project_command_git_tag_project_command.md) / GitTagProjectCommand

# Class: GitTagProjectCommand

[model/command/project-command/git-tag-project-command](../modules/model_command_project_command_git_tag_project_command.md).GitTagProjectCommand

## Implements

- [`ProjectExecutable`](../interfaces/model_command_interfaces.ProjectExecutable.md)

## Table of contents

### Constructors

- [constructor](model_command_project_command_git_tag_project_command.GitTagProjectCommand.md#constructor)

### Properties

- [\_filterByName](model_command_project_command_git_tag_project_command.GitTagProjectCommand.md#_filterbyname)
- [\_rootDir](model_command_project_command_git_tag_project_command.GitTagProjectCommand.md#_rootdir)

### Methods

- [\_getFilterLine](model_command_project_command_git_tag_project_command.GitTagProjectCommand.md#_getfilterline)
- [execute](model_command_project_command_git_tag_project_command.GitTagProjectCommand.md#execute)

## Constructors

### constructor

• **new GitTagProjectCommand**(`params`): [`GitTagProjectCommand`](model_command_project_command_git_tag_project_command.GitTagProjectCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.filterByName?` | `string` |
| `params.rootDir?` | `string` |

#### Returns

[`GitTagProjectCommand`](model_command_project_command_git_tag_project_command.GitTagProjectCommand.md)

#### Defined in

[cli/src/model/command/project-command/git-tag-project-command.ts:9](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-tag-project-command.ts#L9)

## Properties

### \_filterByName

• `Protected` `Optional` `Readonly` **\_filterByName**: `string`

#### Defined in

[cli/src/model/command/project-command/git-tag-project-command.ts:7](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-tag-project-command.ts#L7)

___

### \_rootDir

• `Protected` `Readonly` **\_rootDir**: `string`

#### Defined in

[cli/src/model/command/project-command/git-tag-project-command.ts:6](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-tag-project-command.ts#L6)

## Methods

### \_getFilterLine

▸ **_getFilterLine**(): `string`

#### Returns

`string`

#### Defined in

[cli/src/model/command/project-command/git-tag-project-command.ts:27](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-tag-project-command.ts#L27)

___

### execute

▸ **execute**(`project`): `Promise`\<[`ExecuteResult`](../modules/model_command_interfaces.md#executeresult)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `string` |

#### Returns

`Promise`\<[`ExecuteResult`](../modules/model_command_interfaces.md#executeresult)[]\>

#### Implementation of

[ProjectExecutable](../interfaces/model_command_interfaces.ProjectExecutable.md).[execute](../interfaces/model_command_interfaces.ProjectExecutable.md#execute)

#### Defined in

[cli/src/model/command/project-command/git-tag-project-command.ts:15](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-tag-project-command.ts#L15)
