[@beecode/msh-cli](../README.md) / [util/sub-menu](../modules/util_sub_menu.md) / SubMenu

# Class: SubMenu

[util/sub-menu](../modules/util_sub_menu.md).SubMenu

## Hierarchy

- [`BaseMenu`](util_base_menu.BaseMenu.md)

  ↳ **`SubMenu`**

## Table of contents

### Constructors

- [constructor](util_sub_menu.SubMenu.md#constructor)

### Methods

- [\_\_mainMenu](util_sub_menu.SubMenu.md#__mainmenu)
- [\_getSelectedValue](util_sub_menu.SubMenu.md#_getselectedvalue)
- [run](util_sub_menu.SubMenu.md#run)

## Constructors

### constructor

• **new SubMenu**(`message`, `choices`): [`SubMenu`](util_sub_menu.SubMenu.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `choices` | `ChoiceCollection` |

#### Returns

[`SubMenu`](util_sub_menu.SubMenu.md)

#### Overrides

[BaseMenu](util_base_menu.BaseMenu.md).[constructor](util_base_menu.BaseMenu.md#constructor)

#### Defined in

[cli/src/util/sub-menu.ts:14](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/util/sub-menu.ts#L14)

## Methods

### \_\_mainMenu

▸ **__mainMenu**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[cli/src/util/sub-menu.ts:10](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/util/sub-menu.ts#L10)

___

### \_getSelectedValue

▸ **_getSelectedValue**(`perSelected?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `perSelected?` | `string` |

#### Returns

`Promise`\<`string`\>

#### Inherited from

[BaseMenu](util_base_menu.BaseMenu.md).[_getSelectedValue](util_base_menu.BaseMenu.md#_getselectedvalue)

#### Defined in

[cli/src/util/base-menu.ts:45](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/util/base-menu.ts#L45)

___

### run

▸ **run**(`preSelected?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `preSelected?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[BaseMenu](util_base_menu.BaseMenu.md).[run](util_base_menu.BaseMenu.md#run)

#### Defined in

[cli/src/util/sub-menu.ts:18](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/util/sub-menu.ts#L18)
