[**@beecode/msh-cli**](../../../README.md)

***

[@beecode/msh-cli](../../../README.md) / [dal/shell-dal](../README.md) / shellDal

# Variable: shellDal

> `const` **shellDal**: `object`

Defined in: [dal/shell-dal.ts:11](https://github.com/beecode-rs/msh-cli/blob/7b9689686fee8dbd72757c8f3c16ba4ee70b94ff/src/dal/shell-dal.ts#L11)

## Type Declaration

### cd

> **cd**: (`dir`) => `void`

#### Parameters

##### dir

`string`

#### Returns

`void`

### exec

> **exec**: (`cmd`) => `Promise`\<[`ExecResult`](../type-aliases/ExecResult.md)\>

#### Parameters

##### cmd

`string`

#### Returns

`Promise`\<[`ExecResult`](../type-aliases/ExecResult.md)\>

### print

> **print**: (`message`) => `void`

#### Parameters

##### message

`string`

#### Returns

`void`

### pwd

> **pwd**: () => `string`

#### Returns

`string`
