[@beecode/msh-cli](../README.md) / [controller/cli-menu/main-menu](../modules/controller_cli_menu_main_menu.md) / MainMenu

# Class: MainMenu

[controller/cli-menu/main-menu](../modules/controller_cli_menu_main_menu.md).MainMenu

## Hierarchy

- [`BaseMenu`](util_base_menu.BaseMenu.md)

  ↳ **`MainMenu`**

## Table of contents

### Constructors

- [constructor](controller_cli_menu_main_menu.MainMenu.md#constructor)

### Methods

- [\_\_execute](controller_cli_menu_main_menu.MainMenu.md#__execute)
- [\_getSelectedValue](controller_cli_menu_main_menu.MainMenu.md#_getselectedvalue)
- [run](controller_cli_menu_main_menu.MainMenu.md#run)

## Constructors

### constructor

• **new MainMenu**(): [`MainMenu`](controller_cli_menu_main_menu.MainMenu.md)

#### Returns

[`MainMenu`](controller_cli_menu_main_menu.MainMenu.md)

#### Overrides

[BaseMenu](util_base_menu.BaseMenu.md).[constructor](util_base_menu.BaseMenu.md#constructor)

#### Defined in

[cli/src/controller/cli-menu/main-menu.ts:17](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/controller/cli-menu/main-menu.ts#L17)

## Methods

### \_\_execute

▸ **__execute**(`command`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[BaseMenu](util_base_menu.BaseMenu.md).[__execute](util_base_menu.BaseMenu.md#__execute)

#### Defined in

[cli/src/controller/cli-menu/main-menu.ts:11](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/controller/cli-menu/main-menu.ts#L11)

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

#### Inherited from

[BaseMenu](util_base_menu.BaseMenu.md).[run](util_base_menu.BaseMenu.md#run)

#### Defined in

[cli/src/util/base-menu.ts:34](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/util/base-menu.ts#L34)
