[**@beecode/msh-cli**](../../../../../README.md)

***

[@beecode/msh-cli](../../../../../README.md) / [model/command/project-command/project-command](../README.md) / ProjectCommand

# Class: ProjectCommand

Defined in: [model/command/project-command/project-command.ts:4](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/project-command.ts#L4)

## Constructors

### Constructor

> **new ProjectCommand**(`params`): `ProjectCommand`

Defined in: [model/command/project-command/project-command.ts:8](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/project-command.ts#L8)

#### Parameters

##### params

###### command

[`ProjectExecutable`](../../../interfaces/interfaces/ProjectExecutable.md)

###### projects?

`string`[]

#### Returns

`ProjectCommand`

## Properties

### \_command

> `protected` `readonly` **\_command**: [`ProjectExecutable`](../../../interfaces/interfaces/ProjectExecutable.md)

Defined in: [model/command/project-command/project-command.ts:6](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/project-command.ts#L6)

***

### \_projects

> `protected` `readonly` **\_projects**: `string`[]

Defined in: [model/command/project-command/project-command.ts:5](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/project-command.ts#L5)

## Methods

### execute()

> **execute**(): `Promise`\<[`ExecuteResult`](../../../interfaces/type-aliases/ExecuteResult.md)[]\>

Defined in: [model/command/project-command/project-command.ts:14](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/project-command.ts#L14)

#### Returns

`Promise`\<[`ExecuteResult`](../../../interfaces/type-aliases/ExecuteResult.md)[]\>
