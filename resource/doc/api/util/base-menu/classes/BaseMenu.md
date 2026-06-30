[**@beecode/msh-cli**](../../../README.md)

***

[@beecode/msh-cli](../../../README.md) / [util/base-menu](../README.md) / BaseMenu

# Abstract Class: BaseMenu

Defined in: [util/base-menu.ts:3](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/util/base-menu.ts#L3)

## Extended by

- [`SubMenu`](../../sub-menu/classes/SubMenu.md)
- [`MainMenu`](../../../controller/cli-menu/main-menu/classes/MainMenu.md)

## Constructors

### Constructor

> `protected` **new BaseMenu**(`message`, `choices`, `exitChoices?`): `BaseMenu`

Defined in: [util/base-menu.ts:17](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/util/base-menu.ts#L17)

#### Parameters

##### message

`string`

##### choices

`any`[]

##### exitChoices?

`any`[]

#### Returns

`BaseMenu`

## Methods

### \_getSelectedValue()

> `protected` **\_getSelectedValue**(`perSelected?`): `Promise`\<`string`\>

Defined in: [util/base-menu.ts:46](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/util/base-menu.ts#L46)

#### Parameters

##### perSelected?

`string`

#### Returns

`Promise`\<`string`\>

***

### run()

> **run**(`preSelected?`): `Promise`\<`void`\>

Defined in: [util/base-menu.ts:35](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/util/base-menu.ts#L35)

#### Parameters

##### preSelected?

`string`

#### Returns

`Promise`\<`void`\>
