[**@beecode/msh-cli**](../../../../../README.md)

***

[@beecode/msh-cli](../../../../../README.md) / [model/command/project-command/npm-global-project-command](../README.md) / NpmGlobalProjectCommand

# Class: NpmGlobalProjectCommand

Defined in: [model/command/project-command/npm-global-project-command.ts:19](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/npm-global-project-command.ts#L19)

## Implements

- [`Executable`](../../../interfaces/interfaces/Executable.md)

## Constructors

### Constructor

> **new NpmGlobalProjectCommand**(): `NpmGlobalProjectCommand`

#### Returns

`NpmGlobalProjectCommand`

## Methods

### \_allDepsByProject()

> `protected` **\_allDepsByProject**(): [`ProjectWithDependencies`](../type-aliases/ProjectWithDependencies.md)

Defined in: [model/command/project-command/npm-global-project-command.ts:51](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/npm-global-project-command.ts#L51)

#### Returns

[`ProjectWithDependencies`](../type-aliases/ProjectWithDependencies.md)

***

### \_highestDependencies()

> `protected` **\_highestDependencies**(`uniquePackages`): [`DependenciesObject`](../type-aliases/DependenciesObject.md)

Defined in: [model/command/project-command/npm-global-project-command.ts:112](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/npm-global-project-command.ts#L112)

#### Parameters

##### uniquePackages

[`UniquePackages`](../type-aliases/UniquePackages.md)

#### Returns

[`DependenciesObject`](../type-aliases/DependenciesObject.md)

***

### \_highestVersion()

> `protected` **\_highestVersion**(`versions`): `string`

Defined in: [model/command/project-command/npm-global-project-command.ts:118](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/npm-global-project-command.ts#L118)

#### Parameters

##### versions

`string`[]

#### Returns

`string`

***

### \_overrideGlobalDepsWithNewHighestDependencies()

> `protected` **\_overrideGlobalDepsWithNewHighestDependencies**(`highestDependencies`): `void`

Defined in: [model/command/project-command/npm-global-project-command.ts:128](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/npm-global-project-command.ts#L128)

#### Parameters

##### highestDependencies

[`DependenciesObject`](../type-aliases/DependenciesObject.md)

#### Returns

`void`

***

### \_packageJsonForProject()

> `protected` **\_packageJsonForProject**(`project?`): `any`

Defined in: [model/command/project-command/npm-global-project-command.ts:136](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/npm-global-project-command.ts#L136)

#### Parameters

##### project?

`string`

#### Returns

`any`

***

### \_removeIgnoredPackages()

> `protected` **\_removeIgnoredPackages**(`dependencies`): [`DependenciesObject`](../type-aliases/DependenciesObject.md)

Defined in: [model/command/project-command/npm-global-project-command.ts:63](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/npm-global-project-command.ts#L63)

#### Parameters

##### dependencies

[`DependenciesObject`](../type-aliases/DependenciesObject.md)

#### Returns

[`DependenciesObject`](../type-aliases/DependenciesObject.md)

***

### \_uniquePackages()

> `protected` **\_uniquePackages**(`depsByProject`): [`UniquePackages`](../type-aliases/UniquePackages.md)

Defined in: [model/command/project-command/npm-global-project-command.ts:74](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/npm-global-project-command.ts#L74)

#### Parameters

##### depsByProject

[`ProjectWithDependencies`](../type-aliases/ProjectWithDependencies.md)

#### Returns

[`UniquePackages`](../type-aliases/UniquePackages.md)

***

### \_versionConflictWarningMessage()

> `protected` **\_versionConflictWarningMessage**(`uniquePackages`): `string`[]

Defined in: [model/command/project-command/npm-global-project-command.ts:90](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/npm-global-project-command.ts#L90)

#### Parameters

##### uniquePackages

[`UniquePackages`](../type-aliases/UniquePackages.md)

#### Returns

`string`[]

***

### execute()

> **execute**(): `Promise`\<[`ExecuteResult`](../../../interfaces/type-aliases/ExecuteResult.md)[]\>

Defined in: [model/command/project-command/npm-global-project-command.ts:21](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/model/command/project-command/npm-global-project-command.ts#L21)

#### Returns

`Promise`\<[`ExecuteResult`](../../../interfaces/type-aliases/ExecuteResult.md)[]\>

#### Implementation of

[`Executable`](../../../interfaces/interfaces/Executable.md).[`execute`](../../../interfaces/interfaces/Executable.md#execute)
