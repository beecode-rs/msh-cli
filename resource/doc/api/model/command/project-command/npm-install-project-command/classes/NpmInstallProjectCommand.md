[**@beecode/msh-cli**](../../../../../README.md)

***

[@beecode/msh-cli](../../../../../README.md) / [model/command/project-command/npm-install-project-command](../README.md) / NpmInstallProjectCommand

# Class: NpmInstallProjectCommand

Defined in: [model/command/project-command/npm-install-project-command.ts:7](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/npm-install-project-command.ts#L7)

## Implements

- [`ProjectExecutable`](../../../interfaces/interfaces/ProjectExecutable.md)

## Constructors

### Constructor

> **new NpmInstallProjectCommand**(`params?`): `NpmInstallProjectCommand`

Defined in: [model/command/project-command/npm-install-project-command.ts:10](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/npm-install-project-command.ts#L10)

#### Parameters

##### params?

###### rootDir?

`string`

#### Returns

`NpmInstallProjectCommand`

## Properties

### \_rootDir

> `protected` `readonly` **\_rootDir**: `string`

Defined in: [model/command/project-command/npm-install-project-command.ts:8](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/npm-install-project-command.ts#L8)

## Methods

### execute()

> **execute**(`project`): `Promise`\<[`ExecuteResult`](../../../interfaces/type-aliases/ExecuteResult.md)[]\>

Defined in: [model/command/project-command/npm-install-project-command.ts:15](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/npm-install-project-command.ts#L15)

#### Parameters

##### project

`string`

#### Returns

`Promise`\<[`ExecuteResult`](../../../interfaces/type-aliases/ExecuteResult.md)[]\>

#### Implementation of

[`ProjectExecutable`](../../../interfaces/interfaces/ProjectExecutable.md).[`execute`](../../../interfaces/interfaces/ProjectExecutable.md#execute)
