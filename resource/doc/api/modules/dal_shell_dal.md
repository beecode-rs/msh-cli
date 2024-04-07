[@beecode/msh-cli](../README.md) / dal/shell-dal

# Module: dal/shell-dal

## Table of contents

### Type Aliases

- [ExecResult](dal_shell_dal.md#execresult)

### Variables

- [shellDal](dal_shell_dal.md#shelldal)

## Type Aliases

### ExecResult

Ƭ **ExecResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errorOccurred` | `boolean` |
| `stderr` | `string` |
| `stdout` | `string` |

#### Defined in

[cli/src/dal/shell-dal.ts:5](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/dal/shell-dal.ts#L5)

## Variables

### shellDal

• `Const` **shellDal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cd` | (`dir`: `string`) => `void` |
| `exec` | (`cmd`: `string`) => `Promise`\<[`ExecResult`](dal_shell_dal.md#execresult)\> |
| `print` | (`message`: `string`) => `void` |
| `pwd` | () => `string` |

#### Defined in

[cli/src/dal/shell-dal.ts:11](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/dal/shell-dal.ts#L11)
