[@beecode/msh-cli](../README.md) / [util/base-menu](../modules/util_base_menu.md) / BaseMenu

# Class: BaseMenu

[util/base-menu](../modules/util_base_menu.md).BaseMenu

## Hierarchy

- **`BaseMenu`**

  ↳ [`SubMenu`](util_sub_menu.SubMenu.md)

  ↳ [`MainMenu`](controller_cli_menu_main_menu.MainMenu.md)

## Table of contents

### Constructors

- [constructor](util_base_menu.BaseMenu.md#constructor)

### Properties

- [\_\_menu](util_base_menu.BaseMenu.md#__menu)
- [\_\_message](util_base_menu.BaseMenu.md#__message)
- [\_\_name](util_base_menu.BaseMenu.md#__name)
- [\_\_type](util_base_menu.BaseMenu.md#__type)

### Methods

- [\_\_execute](util_base_menu.BaseMenu.md#__execute)
- [\_getSelectedValue](util_base_menu.BaseMenu.md#_getselectedvalue)
- [run](util_base_menu.BaseMenu.md#run)

## Constructors

### constructor

• **new BaseMenu**(`message`, `choices`, `exitChoices?`): [`BaseMenu`](util_base_menu.BaseMenu.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `choices` | `ChoiceCollection` |
| `exitChoices?` | `ChoiceCollection` |

#### Returns

[`BaseMenu`](util_base_menu.BaseMenu.md)

#### Defined in

[cli/src/util/base-menu.ts:16](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/util/base-menu.ts#L16)

## Properties

### \_\_menu

• `Private` **\_\_menu**: `QuestionCollection`

#### Defined in

[cli/src/util/base-menu.ts:7](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/util/base-menu.ts#L7)

___

### \_\_message

• `Private` **\_\_message**: `string` = `''`

#### Defined in

[cli/src/util/base-menu.ts:6](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/util/base-menu.ts#L6)

___

### \_\_name

• `Private` **\_\_name**: `string` = `'__menu'`

#### Defined in

[cli/src/util/base-menu.ts:4](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/util/base-menu.ts#L4)

___

### \_\_type

• `Private` **\_\_type**: `string` = `'list'`

#### Defined in

[cli/src/util/base-menu.ts:5](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/util/base-menu.ts#L5)

## Methods

### \_\_execute

▸ **__execute**(`command`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[cli/src/util/base-menu.ts:9](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/util/base-menu.ts#L9)

___

### \_getSelectedValue

▸ **_getSelectedValue**(`perSelected?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `perSelected?` | `string` |

#### Returns

`Promise`\<`string`\>

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

#### Defined in

[cli/src/util/base-menu.ts:34](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/util/base-menu.ts#L34)
