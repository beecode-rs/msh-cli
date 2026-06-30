[**@beecode/msh-cli**](../../../../README.md)

***

[@beecode/msh-cli](../../../../README.md) / [controller/cli-menu/main-menu](../README.md) / MainMenu

# Class: MainMenu

Defined in: [controller/cli-menu/main-menu.ts:6](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/controller/cli-menu/main-menu.ts#L6)

## Extends

- [`BaseMenu`](../../../../util/base-menu/classes/BaseMenu.md)

## Constructors

### Constructor

> **new MainMenu**(): `MainMenu`

Defined in: [controller/cli-menu/main-menu.ts:15](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/controller/cli-menu/main-menu.ts#L15)

#### Returns

`MainMenu`

#### Overrides

[`BaseMenu`](../../../../util/base-menu/classes/BaseMenu.md).[`constructor`](../../../../util/base-menu/classes/BaseMenu.md#constructor)

## Methods

### \_getSelectedValue()

> `protected` **\_getSelectedValue**(`perSelected?`): `Promise`\<`string`\>

Defined in: [util/base-menu.ts:46](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/util/base-menu.ts#L46)

#### Parameters

##### perSelected?

`string`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`BaseMenu`](../../../../util/base-menu/classes/BaseMenu.md).[`_getSelectedValue`](../../../../util/base-menu/classes/BaseMenu.md#_getselectedvalue)

***

### run()

> **run**(`preSelected?`): `Promise`\<`void`\>

Defined in: [util/base-menu.ts:35](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/util/base-menu.ts#L35)

#### Parameters

##### preSelected?

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseMenu`](../../../../util/base-menu/classes/BaseMenu.md).[`run`](../../../../util/base-menu/classes/BaseMenu.md#run)
