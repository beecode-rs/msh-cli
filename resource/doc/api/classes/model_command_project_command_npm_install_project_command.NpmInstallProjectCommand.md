[@beecode/msh-cli](../README.md) / [model/command/project-command/npm-install-project-command](../modules/model_command_project_command_npm_install_project_command.md) / NpmInstallProjectCommand

# Class: NpmInstallProjectCommand

[model/command/project-command/npm-install-project-command](../modules/model_command_project_command_npm_install_project_command.md).NpmInstallProjectCommand

## Implements

- [`ProjectExecutable`](../interfaces/model_command_interfaces.ProjectExecutable.md)

## Table of contents

### Constructors

- [constructor](model_command_project_command_npm_install_project_command.NpmInstallProjectCommand.md#constructor)

### Properties

- [\_rootDir](model_command_project_command_npm_install_project_command.NpmInstallProjectCommand.md#_rootdir)

### Methods

- [execute](model_command_project_command_npm_install_project_command.NpmInstallProjectCommand.md#execute)

## Constructors

### constructor

• **new NpmInstallProjectCommand**(`params?`): [`NpmInstallProjectCommand`](model_command_project_command_npm_install_project_command.NpmInstallProjectCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Object` |
| `params.rootDir?` | `string` |

#### Returns

[`NpmInstallProjectCommand`](model_command_project_command_npm_install_project_command.NpmInstallProjectCommand.md)

#### Defined in

[cli/src/model/command/project-command/npm-install-project-command.ts:10](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-install-project-command.ts#L10)

## Properties

### \_rootDir

• `Protected` `Readonly` **\_rootDir**: `string`

#### Defined in

[cli/src/model/command/project-command/npm-install-project-command.ts:8](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-install-project-command.ts#L8)

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

[cli/src/model/command/project-command/npm-install-project-command.ts:15](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/npm-install-project-command.ts#L15)
