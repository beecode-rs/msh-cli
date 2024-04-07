[@beecode/msh-cli](../README.md) / [model/command/project-command/git-clone-project-command](../modules/model_command_project_command_git_clone_project_command.md) / GitCloneProjectCommand

# Class: GitCloneProjectCommand

[model/command/project-command/git-clone-project-command](../modules/model_command_project_command_git_clone_project_command.md).GitCloneProjectCommand

## Implements

- [`ProjectExecutable`](../interfaces/model_command_interfaces.ProjectExecutable.md)

## Table of contents

### Constructors

- [constructor](model_command_project_command_git_clone_project_command.GitCloneProjectCommand.md#constructor)

### Properties

- [\_gitHost](model_command_project_command_git_clone_project_command.GitCloneProjectCommand.md#_githost)
- [\_gitTeam](model_command_project_command_git_clone_project_command.GitCloneProjectCommand.md#_gitteam)
- [\_projectPrefix](model_command_project_command_git_clone_project_command.GitCloneProjectCommand.md#_projectprefix)
- [\_rootDir](model_command_project_command_git_clone_project_command.GitCloneProjectCommand.md#_rootdir)

### Methods

- [execute](model_command_project_command_git_clone_project_command.GitCloneProjectCommand.md#execute)

## Constructors

### constructor

• **new GitCloneProjectCommand**(`params?`): [`GitCloneProjectCommand`](model_command_project_command_git_clone_project_command.GitCloneProjectCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Object` |
| `params.gitHost?` | `string` |
| `params.gitTeam?` | `string` |
| `params.projectPrefix?` | `string` |
| `params.rootDir?` | `string` |

#### Returns

[`GitCloneProjectCommand`](model_command_project_command_git_clone_project_command.GitCloneProjectCommand.md)

#### Defined in

[cli/src/model/command/project-command/git-clone-project-command.ts:11](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-clone-project-command.ts#L11)

## Properties

### \_gitHost

• `Protected` `Readonly` **\_gitHost**: `string`

#### Defined in

[cli/src/model/command/project-command/git-clone-project-command.ts:7](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-clone-project-command.ts#L7)

___

### \_gitTeam

• `Protected` `Readonly` **\_gitTeam**: `string`

#### Defined in

[cli/src/model/command/project-command/git-clone-project-command.ts:8](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-clone-project-command.ts#L8)

___

### \_projectPrefix

• `Protected` `Readonly` **\_projectPrefix**: `string`

#### Defined in

[cli/src/model/command/project-command/git-clone-project-command.ts:9](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-clone-project-command.ts#L9)

___

### \_rootDir

• `Protected` `Readonly` **\_rootDir**: `string`

#### Defined in

[cli/src/model/command/project-command/git-clone-project-command.ts:6](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-clone-project-command.ts#L6)

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

[cli/src/model/command/project-command/git-clone-project-command.ts:27](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/git-clone-project-command.ts#L27)
