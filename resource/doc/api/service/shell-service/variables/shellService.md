[**@beecode/msh-cli**](../../../README.md)

***

[@beecode/msh-cli](../../../README.md) / [service/shell-service](../README.md) / shellService

# Variable: shellService

> `const` **shellService**: `object`

Defined in: [service/shell-service.ts:8](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/service/shell-service.ts#L8)

## Type Declaration

### \_joinResults

> **\_joinResults**: (`results`) => [`PrintStdMessage`](../type-aliases/PrintStdMessage.md)

#### Parameters

##### results

[`PrintStdMessage`](../type-aliases/PrintStdMessage.md)[]

#### Returns

[`PrintStdMessage`](../type-aliases/PrintStdMessage.md)

### cd

> **cd**: (`dir`) => `void` = `shellDal.cd`

#### Parameters

##### dir

`string`

#### Returns

`void`

### exec

> **exec**: (`cmd`) => `Promise`\<[`ExecResult`](../../../dal/shell-dal/type-aliases/ExecResult.md)\> = `shellDal.exec`

#### Parameters

##### cmd

`string`

#### Returns

`Promise`\<[`ExecResult`](../../../dal/shell-dal/type-aliases/ExecResult.md)\>

### print

> **print**: (`message`) => `void` = `shellDal.print`

#### Parameters

##### message

`string`

#### Returns

`void`

### printError

> **printError**: (`message`) => `void`

#### Parameters

##### message

`string`

#### Returns

`void`

### printStdMessage

> **printStdMessage**: (...`messageArgs`) => `void`

#### Parameters

##### messageArgs

...[`PrintStdMessage`](../type-aliases/PrintStdMessage.md)[]

#### Returns

`void`

### printSuccess

> **printSuccess**: (`message`) => `void`

#### Parameters

##### message

`string`

#### Returns

`void`
