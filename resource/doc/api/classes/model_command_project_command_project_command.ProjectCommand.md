[@beecode/msh-cli](../README.md) / [model/command/project-command/project-command](../modules/model_command_project_command_project_command.md) / ProjectCommand

# Class: ProjectCommand

[model/command/project-command/project-command](../modules/model_command_project_command_project_command.md).ProjectCommand

## Table of contents

### Constructors

- [constructor](model_command_project_command_project_command.ProjectCommand.md#constructor)

### Properties

- [\_command](model_command_project_command_project_command.ProjectCommand.md#_command)
- [\_projects](model_command_project_command_project_command.ProjectCommand.md#_projects)

### Methods

- [execute](model_command_project_command_project_command.ProjectCommand.md#execute)

## Constructors

### constructor

• **new ProjectCommand**(`params`): [`ProjectCommand`](model_command_project_command_project_command.ProjectCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.command` | [`ProjectExecutable`](../interfaces/model_command_interfaces.ProjectExecutable.md) |
| `params.projects?` | `string`[] |

#### Returns

[`ProjectCommand`](model_command_project_command_project_command.ProjectCommand.md)

#### Defined in

[cli/src/model/command/project-command/project-command.ts:8](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/project-command.ts#L8)

## Properties

### \_command

• `Protected` `Readonly` **\_command**: [`ProjectExecutable`](../interfaces/model_command_interfaces.ProjectExecutable.md)

#### Defined in

[cli/src/model/command/project-command/project-command.ts:6](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/project-command.ts#L6)

___

### \_projects

• `Protected` `Readonly` **\_projects**: `string`[]

#### Defined in

[cli/src/model/command/project-command/project-command.ts:5](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/project-command.ts#L5)

## Methods

### execute

▸ **execute**(): `Promise`\<[`ExecuteResult`](../modules/model_command_interfaces.md#executeresult)[]\>

#### Returns

`Promise`\<[`ExecuteResult`](../modules/model_command_interfaces.md#executeresult)[]\>

#### Defined in

[cli/src/model/command/project-command/project-command.ts:14](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/project-command/project-command.ts#L14)
