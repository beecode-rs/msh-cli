[**@beecode/msh-cli**](../../../../README.md)

***

[@beecode/msh-cli](../../../../README.md) / [business/use-case/project-command](../README.md) / ProjectCommand

# Class: ProjectCommand

Defined in: [business/use-case/project-command.ts:4](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/use-case/project-command.ts#L4)

## Constructors

### Constructor

> **new ProjectCommand**(`params`): `ProjectCommand`

Defined in: [business/use-case/project-command.ts:8](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/use-case/project-command.ts#L8)

#### Parameters

##### params

###### command

[`ProjectExecutable`](../../../model/executable/interfaces/ProjectExecutable.md)

###### projects?

`string`[]

#### Returns

`ProjectCommand`

## Properties

### \_command

> `protected` `readonly` **\_command**: [`ProjectExecutable`](../../../model/executable/interfaces/ProjectExecutable.md)

Defined in: [business/use-case/project-command.ts:6](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/use-case/project-command.ts#L6)

***

### \_projects

> `protected` `readonly` **\_projects**: `string`[]

Defined in: [business/use-case/project-command.ts:5](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/use-case/project-command.ts#L5)

## Methods

### execute()

> **execute**(): `Promise`\<[`ExecuteResult`](../../../model/executable/type-aliases/ExecuteResult.md)[]\>

Defined in: [business/use-case/project-command.ts:14](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/use-case/project-command.ts#L14)

#### Returns

`Promise`\<[`ExecuteResult`](../../../model/executable/type-aliases/ExecuteResult.md)[]\>
