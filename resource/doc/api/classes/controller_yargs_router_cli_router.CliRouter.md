[@beecode/msh-cli](../README.md) / [controller/yargs-router/cli-router](../modules/controller_yargs_router_cli_router.md) / CliRouter

# Class: CliRouter

[controller/yargs-router/cli-router](../modules/controller_yargs_router_cli_router.md).CliRouter

## Table of contents

### Constructors

- [constructor](controller_yargs_router_cli_router.CliRouter.md#constructor)

### Properties

- [\_yargs](controller_yargs_router_cli_router.CliRouter.md#_yargs)

### Methods

- [\_demandCommands](controller_yargs_router_cli_router.CliRouter.md#_demandcommands)
- [\_gitCommands](controller_yargs_router_cli_router.CliRouter.md#_gitcommands)
- [\_helpVersionAlias](controller_yargs_router_cli_router.CliRouter.md#_helpversionalias)
- [\_initCommands](controller_yargs_router_cli_router.CliRouter.md#_initcommands)
- [\_npmCommands](controller_yargs_router_cli_router.CliRouter.md#_npmcommands)
- [\_setupUsage](controller_yargs_router_cli_router.CliRouter.md#_setupusage)
- [routeArgv](controller_yargs_router_cli_router.CliRouter.md#routeargv)

## Constructors

### constructor

• **new CliRouter**(`argv`): [`CliRouter`](controller_yargs_router_cli_router.CliRouter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `argv` | `string`[] |

#### Returns

[`CliRouter`](controller_yargs_router_cli_router.CliRouter.md)

#### Defined in

[cli/src/controller/yargs-router/cli-router.ts:12](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/controller/yargs-router/cli-router.ts#L12)

## Properties

### \_yargs

• `Protected` `Readonly` **\_yargs**: `Argv`\<{}\>

#### Defined in

[cli/src/controller/yargs-router/cli-router.ts:10](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/controller/yargs-router/cli-router.ts#L10)

## Methods

### \_demandCommands

▸ **_demandCommands**(): `void`

#### Returns

`void`

#### Defined in

[cli/src/controller/yargs-router/cli-router.ts:37](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/controller/yargs-router/cli-router.ts#L37)

___

### \_gitCommands

▸ **_gitCommands**(): `void`

#### Returns

`void`

#### Defined in

[cli/src/controller/yargs-router/cli-router.ts:41](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/controller/yargs-router/cli-router.ts#L41)

___

### \_helpVersionAlias

▸ **_helpVersionAlias**(): `void`

#### Returns

`void`

#### Defined in

[cli/src/controller/yargs-router/cli-router.ts:33](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/controller/yargs-router/cli-router.ts#L33)

___

### \_initCommands

▸ **_initCommands**(): `void`

#### Returns

`void`

#### Defined in

[cli/src/controller/yargs-router/cli-router.ts:84](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/controller/yargs-router/cli-router.ts#L84)

___

### \_npmCommands

▸ **_npmCommands**(): `void`

#### Returns

`void`

#### Defined in

[cli/src/controller/yargs-router/cli-router.ts:62](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/controller/yargs-router/cli-router.ts#L62)

___

### \_setupUsage

▸ **_setupUsage**(): `void`

#### Returns

`void`

#### Defined in

[cli/src/controller/yargs-router/cli-router.ts:29](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/controller/yargs-router/cli-router.ts#L29)

___

### routeArgv

▸ **routeArgv**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[cli/src/controller/yargs-router/cli-router.ts:16](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/controller/yargs-router/cli-router.ts#L16)
