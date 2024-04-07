[@beecode/msh-cli](../README.md) / [app/tui-app](../modules/app_tui_app.md) / TuiApp

# Class: TuiApp

[app/tui-app](../modules/app_tui_app.md).TuiApp

## Hierarchy

- `AppFlow`

  ↳ **`TuiApp`**

## Table of contents

### Constructors

- [constructor](app_tui_app.TuiApp.md#constructor)

### Properties

- [\_flowList](app_tui_app.TuiApp.md#_flowlist)

### Methods

- [\_topLevelReversedFlowList](app_tui_app.TuiApp.md#_toplevelreversedflowlist)
- [create](app_tui_app.TuiApp.md#create)
- [destroy](app_tui_app.TuiApp.md#destroy)
- [DeepExecFlowList](app_tui_app.TuiApp.md#deepexecflowlist)
- [ExecSyncFlowList](app_tui_app.TuiApp.md#execsyncflowlist)

## Constructors

### constructor

• **new TuiApp**(): [`TuiApp`](app_tui_app.TuiApp.md)

#### Returns

[`TuiApp`](app_tui_app.TuiApp.md)

#### Overrides

AppFlow.constructor

#### Defined in

[cli/src/app/tui-app.ts:4](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/app/tui-app.ts#L4)

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
