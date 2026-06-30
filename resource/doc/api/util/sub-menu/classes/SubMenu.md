[**@beecode/msh-cli**](../../../README.md)

***

[@beecode/msh-cli](../../../README.md) / [util/sub-menu](../README.md) / SubMenu

# Abstract Class: SubMenu

Defined in: [util/sub-menu.ts:8](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/util/sub-menu.ts#L8)

## Extends

- [`BaseMenu`](../../base-menu/classes/BaseMenu.md)

## Constructors

### Constructor

> `protected` **new SubMenu**(`message`, `choices`): `SubMenu`

Defined in: [util/sub-menu.ts:15](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/util/sub-menu.ts#L15)

#### Parameters

##### message

`string`

##### choices

`ChoiceCollection`

#### Returns

`SubMenu`

#### Overrides

[`BaseMenu`](../../base-menu/classes/BaseMenu.md).[`constructor`](../../base-menu/classes/BaseMenu.md#constructor)

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

[`BaseMenu`](../../base-menu/classes/BaseMenu.md).[`_getSelectedValue`](../../base-menu/classes/BaseMenu.md#_getselectedvalue)

***

### run()

> **run**(`preSelected?`): `Promise`\<`void`\>

Defined in: [util/sub-menu.ts:20](https://github.com/beecode-rs/msh-cli/blob/3e1c9b3633c8ffbf12a445c50b75a2af580c79b9/src/util/sub-menu.ts#L20)

#### Parameters

##### preSelected?

`string`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`BaseMenu`](../../base-menu/classes/BaseMenu.md).[`run`](../../base-menu/classes/BaseMenu.md#run)
