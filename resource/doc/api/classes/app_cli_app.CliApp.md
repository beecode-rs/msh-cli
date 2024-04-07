[@beecode/msh-cli](../README.md) / [app/cli-app](../modules/app_cli_app.md) / CliApp

# Class: CliApp

[app/cli-app](../modules/app_cli_app.md).CliApp

## Hierarchy

- `AppFlow`

  ↳ **`CliApp`**

## Table of contents

### Constructors

- [constructor](app_cli_app.CliApp.md#constructor)

### Properties

- [\_flowList](app_cli_app.CliApp.md#_flowlist)

### Methods

- [\_topLevelReversedFlowList](app_cli_app.CliApp.md#_toplevelreversedflowlist)
- [create](app_cli_app.CliApp.md#create)
- [destroy](app_cli_app.CliApp.md#destroy)
- [DeepExecFlowList](app_cli_app.CliApp.md#deepexecflowlist)
- [ExecSyncFlowList](app_cli_app.CliApp.md#execsyncflowlist)

## Constructors

### constructor

• **new CliApp**(): [`CliApp`](app_cli_app.CliApp.md)

#### Returns

[`CliApp`](app_cli_app.CliApp.md)

#### Overrides

AppFlow.constructor

#### Defined in

[cli/src/app/cli-app.ts:6](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/app/cli-app.ts#L6)

## Properties

### \_flowList

• `Protected` `Readonly` **\_flowList**: `FlowList`

#### Inherited from

AppFlow.\_flowList

#### Defined in

[app-boot/src/app-flow.ts:12](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/app-flow.ts#L12)

## Methods

### \_topLevelReversedFlowList

▸ **_topLevelReversedFlowList**(): `FlowList`

#### Returns

`FlowList`

#### Inherited from

AppFlow.\_topLevelReversedFlowList

#### Defined in

[app-boot/src/app-flow.ts:26](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/app-flow.ts#L26)

___

### create

▸ **create**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

AppFlow.create

#### Defined in

[app-boot/src/app-flow.ts:18](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/app-flow.ts#L18)

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

AppFlow.destroy

#### Defined in

[app-boot/src/app-flow.ts:22](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/app-flow.ts#L22)

___

### DeepExecFlowList

▸ **DeepExecFlowList**(`params`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.direction` | `FlowDirectionMapper` |
| `params.flowList` | `FlowList` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

AppFlow.DeepExecFlowList

#### Defined in

[app-boot/src/app-flow.ts:30](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/app-flow.ts#L30)

___

### ExecSyncFlowList

▸ **ExecSyncFlowList**(`lifeCycleList`, `createOrDestroy`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lifeCycleList` | `LifeCycle`\<`any`\>[] |
| `createOrDestroy` | `FlowDirectionMapper` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

AppFlow.ExecSyncFlowList

#### Defined in

[app-boot/src/app-flow.ts:49](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/app-flow.ts#L49)
