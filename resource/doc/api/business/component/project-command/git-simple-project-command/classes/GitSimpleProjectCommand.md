[**@beecode/msh-cli**](../../../../../README.md)

***

[@beecode/msh-cli](../../../../../README.md) / [business/component/project-command/git-simple-project-command](../README.md) / GitSimpleProjectCommand

# Class: GitSimpleProjectCommand

Defined in: [business/component/project-command/git-simple-project-command.ts:11](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-simple-project-command.ts#L11)

## Implements

- [`ProjectExecutable`](../../../../model/executable/interfaces/ProjectExecutable.md)

## Constructors

### Constructor

> **new GitSimpleProjectCommand**(`params`): `GitSimpleProjectCommand`

Defined in: [business/component/project-command/git-simple-project-command.ts:15](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-simple-project-command.ts#L15)

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

Defined in: [business/component/project-command/git-simple-project-command.ts:13](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-simple-project-command.ts#L13)

***

### \_simpleGitCommand

> `protected` `readonly` **\_simpleGitCommand**: [`GitSimpleCommand`](../enumerations/GitSimpleCommand.md)

Defined in: [business/component/project-command/git-simple-project-command.ts:12](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-simple-project-command.ts#L12)

## Methods

### execute()

> **execute**(`project`): `Promise`\<[`ExecuteResult`](../../../../model/executable/type-aliases/ExecuteResult.md)[]\>

Defined in: [business/component/project-command/git-simple-project-command.ts:21](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-simple-project-command.ts#L21)

#### Parameters

##### project

`string`

#### Returns

`Promise`\<[`ExecuteResult`](../../../../model/executable/type-aliases/ExecuteResult.md)[]\>

#### Implementation of

[`ProjectExecutable`](../../../../model/executable/interfaces/ProjectExecutable.md).[`execute`](../../../../model/executable/interfaces/ProjectExecutable.md#execute)
