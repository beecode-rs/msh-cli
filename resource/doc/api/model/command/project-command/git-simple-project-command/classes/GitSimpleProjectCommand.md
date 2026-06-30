[**@beecode/msh-cli**](../../../../../README.md)

***

[@beecode/msh-cli](../../../../../README.md) / [model/command/project-command/git-simple-project-command](../README.md) / GitSimpleProjectCommand

# Class: GitSimpleProjectCommand

Defined in: [model/command/project-command/git-simple-project-command.ts:11](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-simple-project-command.ts#L11)

## Implements

- [`ProjectExecutable`](../../../interfaces/interfaces/ProjectExecutable.md)

## Constructors

### Constructor

> **new GitSimpleProjectCommand**(`params`): `GitSimpleProjectCommand`

Defined in: [model/command/project-command/git-simple-project-command.ts:15](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-simple-project-command.ts#L15)

#### Parameters

##### params

###### gitSimpleCommand

[`GitSimpleCommand`](../enumerations/GitSimpleCommand.md)

###### rootDir?

`string`

#### Returns

`GitSimpleProjectCommand`

## Properties

### \_rootDir

> `protected` `readonly` **\_rootDir**: `string`

Defined in: [model/command/project-command/git-simple-project-command.ts:13](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-simple-project-command.ts#L13)

***

### \_simpleGitCommand

> `protected` `readonly` **\_simpleGitCommand**: [`GitSimpleCommand`](../enumerations/GitSimpleCommand.md)

Defined in: [model/command/project-command/git-simple-project-command.ts:12](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-simple-project-command.ts#L12)

## Methods

### execute()

> **execute**(`project`): `Promise`\<[`ExecuteResult`](../../../interfaces/type-aliases/ExecuteResult.md)[]\>

Defined in: [model/command/project-command/git-simple-project-command.ts:21](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/git-simple-project-command.ts#L21)

#### Parameters

##### project

`string`

#### Returns

`Promise`\<[`ExecuteResult`](../../../interfaces/type-aliases/ExecuteResult.md)[]\>

#### Implementation of

[`ProjectExecutable`](../../../interfaces/interfaces/ProjectExecutable.md).[`execute`](../../../interfaces/interfaces/ProjectExecutable.md#execute)
