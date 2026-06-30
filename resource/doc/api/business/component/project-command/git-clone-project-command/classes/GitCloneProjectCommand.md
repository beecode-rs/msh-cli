[**@beecode/msh-cli**](../../../../../README.md)

***

[@beecode/msh-cli](../../../../../README.md) / [business/component/project-command/git-clone-project-command](../README.md) / GitCloneProjectCommand

# Class: GitCloneProjectCommand

Defined in: [business/component/project-command/git-clone-project-command.ts:5](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-clone-project-command.ts#L5)

## Implements

- [`ProjectExecutable`](../../../../model/executable/interfaces/ProjectExecutable.md)

## Constructors

### Constructor

> **new GitCloneProjectCommand**(`params?`): `GitCloneProjectCommand`

Defined in: [business/component/project-command/git-clone-project-command.ts:11](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-clone-project-command.ts#L11)

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

Defined in: [business/component/project-command/git-clone-project-command.ts:7](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-clone-project-command.ts#L7)

***

### \_gitTeam

> `protected` `readonly` **\_gitTeam**: `string`

Defined in: [business/component/project-command/git-clone-project-command.ts:8](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-clone-project-command.ts#L8)

***

### \_projectPrefix

> `protected` `readonly` **\_projectPrefix**: `string`

Defined in: [business/component/project-command/git-clone-project-command.ts:9](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-clone-project-command.ts#L9)

***

### \_rootDir

> `protected` `readonly` **\_rootDir**: `string`

Defined in: [business/component/project-command/git-clone-project-command.ts:6](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-clone-project-command.ts#L6)

## Methods

### execute()

> **execute**(`project`): `Promise`\<[`ExecuteResult`](../../../../model/executable/type-aliases/ExecuteResult.md)[]\>

Defined in: [business/component/project-command/git-clone-project-command.ts:27](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-clone-project-command.ts#L27)

#### Parameters

##### project

`string`

#### Returns

`Promise`\<[`ExecuteResult`](../../../../model/executable/type-aliases/ExecuteResult.md)[]\>

#### Implementation of

[`ProjectExecutable`](../../../../model/executable/interfaces/ProjectExecutable.md).[`execute`](../../../../model/executable/interfaces/ProjectExecutable.md#execute)
