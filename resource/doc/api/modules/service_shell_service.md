[@beecode/msh-cli](../README.md) / service/shell-service

# Module: service/shell-service

## Table of contents

### Type Aliases

- [PrintStdMessage](service_shell_service.md#printstdmessage)

### Variables

- [shellService](service_shell_service.md#shellservice)

## Type Aliases

### PrintStdMessage

Ƭ **PrintStdMessage**: `Record`\<`string`, [`ExecResult`](dal_shell_dal.md#execresult)\>

#### Defined in

[cli/src/service/shell-service.ts:5](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/service/shell-service.ts#L5)

## Variables

### shellService

• `Const` **shellService**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_joinResults` | (`results`: [`PrintStdMessage`](service_shell_service.md#printstdmessage)[]) => [`PrintStdMessage`](service_shell_service.md#printstdmessage) |
| `cd` | (`dir`: `string`) => `void` |
| `exec` | (`cmd`: `string`) => `Promise`\<[`ExecResult`](dal_shell_dal.md#execresult)\> |
| `print` | (`message`: `string`) => `void` |
| `printError` | (`message`: `string`) => `void` |
| `printStdMessage` | (...`messageArgs`: [`PrintStdMessage`](service_shell_service.md#printstdmessage)[]) => `void` |
| `printSuccess` | (`message`: `string`) => `void` |

#### Defined in

[cli/src/service/shell-service.ts:8](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/service/shell-service.ts#L8)
