[**@beecode/msh-cli**](../../../../../README.md)

***

[@beecode/msh-cli](../../../../../README.md) / [model/command/project-command/git-tag-project-command](../README.md) / GitTagProjectCommand

# Class: GitTagProjectCommand

Defined in: [model/command/project-command/git-tag-project-command.ts:5](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-tag-project-command.ts#L5)

## Implements

- [`ProjectExecutable`](../../../interfaces/interfaces/ProjectExecutable.md)

## Constructors

### Constructor

> **new GitTagProjectCommand**(`params`): `GitTagProjectCommand`

Defined in: [model/command/project-command/git-tag-project-command.ts:9](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-tag-project-command.ts#L9)

#### Parameters

##### params

###### filterByName?

`string`

###### rootDir?

`string`

#### Returns

`GitTagProjectCommand`

## Properties

### \_filterByName?

> `protected` `readonly` `optional` **\_filterByName?**: `string`

Defined in: [model/command/project-command/git-tag-project-command.ts:7](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-tag-project-command.ts#L7)

***

### \_rootDir

> `protected` `readonly` **\_rootDir**: `string`

Defined in: [model/command/project-command/git-tag-project-command.ts:6](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-tag-project-command.ts#L6)

## Methods

### \_getFilterLine()

> `protected` **\_getFilterLine**(): `string`

Defined in: [model/command/project-command/git-tag-project-command.ts:28](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-tag-project-command.ts#L28)

#### Returns

`string`

***

### execute()

> **execute**(`project`): `Promise`\<[`ExecuteResult`](../../../interfaces/type-aliases/ExecuteResult.md)[]\>

Defined in: [model/command/project-command/git-tag-project-command.ts:15](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-tag-project-command.ts#L15)

#### Parameters

##### project

`string`

#### Returns

`Promise`\<[`ExecuteResult`](../../../interfaces/type-aliases/ExecuteResult.md)[]\>

#### Implementation of

[`ProjectExecutable`](../../../interfaces/interfaces/ProjectExecutable.md).[`execute`](../../../interfaces/interfaces/ProjectExecutable.md#execute)
