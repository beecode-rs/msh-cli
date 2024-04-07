[@beecode/msh-cli](../README.md) / [model/command/project-command/git-simple-project-command](../modules/model_command_project_command_git_simple_project_command.md) / GitSimpleProjectCommand

# Class: GitSimpleProjectCommand

[model/command/project-command/git-simple-project-command](../modules/model_command_project_command_git_simple_project_command.md).GitSimpleProjectCommand

## Implements

- [`ProjectExecutable`](../interfaces/model_command_interfaces.ProjectExecutable.md)

## Table of contents

### Constructors

- [constructor](model_command_project_command_git_simple_project_command.GitSimpleProjectCommand.md#constructor)

### Properties

- [\_rootDir](model_command_project_command_git_simple_project_command.GitSimpleProjectCommand.md#_rootdir)
- [\_simpleGitCommand](model_command_project_command_git_simple_project_command.GitSimpleProjectCommand.md#_simplegitcommand)

### Methods

- [execute](model_command_project_command_git_simple_project_command.GitSimpleProjectCommand.md#execute)

## Constructors

### constructor

• **new GitSimpleProjectCommand**(`params`): [`GitSimpleProjectCommand`](model_command_project_command_git_simple_project_command.GitSimpleProjectCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.gitSimpleCommand` | [`GitSimpleCommand`](../enums/model_command_project_command_git_simple_project_command.GitSimpleCommand.md) |
| `params.rootDir?` | `string` |

#### Returns

[`GitSimpleProjectCommand`](model_command_project_command_git_simple_project_command.GitSimpleProjectCommand.md)

#### Defined in

[cli/src/model/command/project-command/git-simple-project-command.ts:15](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-simple-project-command.ts#L15)

## Properties

### \_rootDir

• `Protected` `Readonly` **\_rootDir**: `string`

#### Defined in

[cli/src/model/command/project-command/git-simple-project-command.ts:13](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-simple-project-command.ts#L13)

___

### \_simpleGitCommand

• `Protected` `Readonly` **\_simpleGitCommand**: [`GitSimpleCommand`](../enums/model_command_project_command_git_simple_project_command.GitSimpleCommand.md)

#### Defined in

[cli/src/model/command/project-command/git-simple-project-command.ts:12](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-simple-project-command.ts#L12)

## Methods

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

[cli/src/model/command/project-command/git-simple-project-command.ts:21](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-simple-project-command.ts#L21)
