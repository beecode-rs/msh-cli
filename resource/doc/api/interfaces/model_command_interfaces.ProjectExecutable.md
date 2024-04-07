[@beecode/msh-cli](../README.md) / [model/command/interfaces](../modules/model_command_interfaces.md) / ProjectExecutable

# Interface: ProjectExecutable

[model/command/interfaces](../modules/model_command_interfaces.md).ProjectExecutable

## Implemented by

- [`GitCloneProjectCommand`](../classes/model_command_project_command_git_clone_project_command.GitCloneProjectCommand.md)
- [`GitSimpleProjectCommand`](../classes/model_command_project_command_git_simple_project_command.GitSimpleProjectCommand.md)
- [`GitTagProjectCommand`](../classes/model_command_project_command_git_tag_project_command.GitTagProjectCommand.md)
- [`NpmInstallProjectCommand`](../classes/model_command_project_command_npm_install_project_command.NpmInstallProjectCommand.md)

## Table of contents

### Methods

- [execute](model_command_interfaces.ProjectExecutable.md#execute)

## Methods

### execute

▸ **execute**(`project`): `Promise`\<[`ExecuteResult`](../modules/model_command_interfaces.md#executeresult)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `string` |

#### Returns

`Promise`\<[`ExecuteResult`](../modules/model_command_interfaces.md#executeresult)[]\>

#### Defined in

[cli/src/model/command/interfaces.ts:12](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/model/command/interfaces.ts#L12)
