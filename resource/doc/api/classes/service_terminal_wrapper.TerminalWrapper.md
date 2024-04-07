[@beecode/msh-cli](../README.md) / [service/terminal-wrapper](../modules/service_terminal_wrapper.md) / TerminalWrapper

# Class: TerminalWrapper

[service/terminal-wrapper](../modules/service_terminal_wrapper.md).TerminalWrapper

## Table of contents

### Constructors

- [constructor](service_terminal_wrapper.TerminalWrapper.md#constructor)

### Properties

- [\_command](service_terminal_wrapper.TerminalWrapper.md#_command)

### Methods

- [execute](service_terminal_wrapper.TerminalWrapper.md#execute)

## Constructors

### constructor

• **new TerminalWrapper**(`params`): [`TerminalWrapper`](service_terminal_wrapper.TerminalWrapper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.command` | [`Executable`](../interfaces/model_command_interfaces.Executable.md) |

#### Returns

[`TerminalWrapper`](service_terminal_wrapper.TerminalWrapper.md)

#### Defined in

[cli/src/service/terminal-wrapper.ts:6](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/service/terminal-wrapper.ts#L6)

## Properties

### \_command

• `Protected` `Readonly` **\_command**: [`Executable`](../interfaces/model_command_interfaces.Executable.md)

#### Defined in

[cli/src/service/terminal-wrapper.ts:5](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/service/terminal-wrapper.ts#L5)

## Methods

### execute

▸ **execute**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[cli/src/service/terminal-wrapper.ts:11](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/service/terminal-wrapper.ts#L11)
