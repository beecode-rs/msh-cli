[**@beecode/msh-cli**](../../../../../README.md)

***

[@beecode/msh-cli](../../../../../README.md) / [business/component/project-command/npm-install-project-command](../README.md) / NpmInstallProjectCommand

# Class: NpmInstallProjectCommand

Defined in: [business/component/project-command/npm-install-project-command.ts:7](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/npm-install-project-command.ts#L7)

## Implements

- [`ProjectExecutable`](../../../../model/executable/interfaces/ProjectExecutable.md)

## Constructors

### Constructor

> **new NpmInstallProjectCommand**(`params?`): `NpmInstallProjectCommand`

Defined in: [business/component/project-command/npm-install-project-command.ts:10](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/npm-install-project-command.ts#L10)

#### Parameters

##### params?

###### rootDir?

`string`

#### Returns

`NpmInstallProjectCommand`

## Properties

### \_rootDir

> `protected` `readonly` **\_rootDir**: `string`

Defined in: [business/component/project-command/npm-install-project-command.ts:8](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/npm-install-project-command.ts#L8)

## Methods

### execute()

> **execute**(`project`): `Promise`\<[`ExecuteResult`](../../../../model/executable/type-aliases/ExecuteResult.md)[]\>

Defined in: [business/component/project-command/npm-install-project-command.ts:15](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/business/component/project-command/npm-install-project-command.ts#L15)

#### Parameters

##### project

`string`

#### Returns

`Promise`\<[`ExecuteResult`](../../../../model/executable/type-aliases/ExecuteResult.md)[]\>

#### Implementation of

[`ProjectExecutable`](../../../../model/executable/interfaces/ProjectExecutable.md).[`execute`](../../../../model/executable/interfaces/ProjectExecutable.md#execute)
