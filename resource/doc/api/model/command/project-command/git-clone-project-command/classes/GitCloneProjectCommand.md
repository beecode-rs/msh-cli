[**@beecode/msh-cli**](../../../../../README.md)

***

[@beecode/msh-cli](../../../../../README.md) / [model/command/project-command/git-clone-project-command](../README.md) / GitCloneProjectCommand

# Class: GitCloneProjectCommand

Defined in: [model/command/project-command/git-clone-project-command.ts:5](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-clone-project-command.ts#L5)

## Implements

- [`ProjectExecutable`](../../../interfaces/interfaces/ProjectExecutable.md)

## Constructors

### Constructor

> **new GitCloneProjectCommand**(`params?`): `GitCloneProjectCommand`

Defined in: [model/command/project-command/git-clone-project-command.ts:11](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-clone-project-command.ts#L11)

#### Parameters

##### params?

###### gitHost?

`string`

###### gitTeam?

`string`

###### projectPrefix?

`string`

###### rootDir?

`string`

#### Returns

`GitCloneProjectCommand`

## Properties

### \_gitHost

> `protected` `readonly` **\_gitHost**: `string`

Defined in: [model/command/project-command/git-clone-project-command.ts:7](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-clone-project-command.ts#L7)

***

### \_gitTeam

> `protected` `readonly` **\_gitTeam**: `string`

Defined in: [model/command/project-command/git-clone-project-command.ts:8](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-clone-project-command.ts#L8)

***

### \_projectPrefix

> `protected` `readonly` **\_projectPrefix**: `string`

Defined in: [model/command/project-command/git-clone-project-command.ts:9](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-clone-project-command.ts#L9)

***

### \_rootDir

> `protected` `readonly` **\_rootDir**: `string`

Defined in: [model/command/project-command/git-clone-project-command.ts:6](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-clone-project-command.ts#L6)

## Methods

### execute()

> **execute**(`project`): `Promise`\<[`ExecuteResult`](../../../interfaces/type-aliases/ExecuteResult.md)[]\>

Defined in: [model/command/project-command/git-clone-project-command.ts:27](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-clone-project-command.ts#L27)

#### Parameters

##### project

`string`

#### Returns

`Promise`\<[`ExecuteResult`](../../../interfaces/type-aliases/ExecuteResult.md)[]\>

#### Implementation of

[`ProjectExecutable`](../../../interfaces/interfaces/ProjectExecutable.md).[`execute`](../../../interfaces/interfaces/ProjectExecutable.md#execute)
