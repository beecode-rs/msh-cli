[**@beecode/msh-cli**](../../../README.md)

***

[@beecode/msh-cli](../../../README.md) / [dal/shell-dal](../README.md) / shellDal

# Variable: shellDal

> `const` **shellDal**: `object`

Defined in: [dal/shell-dal.ts:11](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/dal/shell-dal.ts#L11)

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
