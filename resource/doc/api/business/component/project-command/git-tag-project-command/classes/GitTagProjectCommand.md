[**@beecode/msh-cli**](../../../../../README.md)

***

[@beecode/msh-cli](../../../../../README.md) / [business/component/project-command/git-tag-project-command](../README.md) / GitTagProjectCommand

# Class: GitTagProjectCommand

Defined in: [business/component/project-command/git-tag-project-command.ts:5](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-tag-project-command.ts#L5)

## Implements

- [`ProjectExecutable`](../../../../model/executable/interfaces/ProjectExecutable.md)

## Constructors

### Constructor

> **new GitTagProjectCommand**(`params`): `GitTagProjectCommand`

Defined in: [business/component/project-command/git-tag-project-command.ts:9](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-tag-project-command.ts#L9)

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

Defined in: [business/component/project-command/git-tag-project-command.ts:7](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-tag-project-command.ts#L7)

***

### \_rootDir

> `protected` `readonly` **\_rootDir**: `string`

Defined in: [business/component/project-command/git-tag-project-command.ts:6](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-tag-project-command.ts#L6)

## Methods

### \_getFilterLine()

> `protected` **\_getFilterLine**(): `string`

Defined in: [business/component/project-command/git-tag-project-command.ts:28](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-tag-project-command.ts#L28)

#### Returns

`string`

***

### execute()

> **execute**(`project`): `Promise`\<[`ExecuteResult`](../../../../model/executable/type-aliases/ExecuteResult.md)[]\>

Defined in: [business/component/project-command/git-tag-project-command.ts:15](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/git-tag-project-command.ts#L15)

#### Parameters

##### project

`string`

#### Returns

`Promise`\<[`ExecuteResult`](../../../../model/executable/type-aliases/ExecuteResult.md)[]\>

#### Implementation of

[`ProjectExecutable`](../../../../model/executable/interfaces/ProjectExecutable.md).[`execute`](../../../../model/executable/interfaces/ProjectExecutable.md#execute)
