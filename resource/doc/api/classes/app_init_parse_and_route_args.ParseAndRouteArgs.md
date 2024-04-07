[@beecode/msh-cli](../README.md) / [app/init/parse-and-route-args](../modules/app_init_parse_and_route_args.md) / ParseAndRouteArgs

# Class: ParseAndRouteArgs

[app/init/parse-and-route-args](../modules/app_init_parse_and_route_args.md).ParseAndRouteArgs

## Hierarchy

- `LifeCycle`

  ↳ **`ParseAndRouteArgs`**

## Table of contents

### Constructors

- [constructor](app_init_parse_and_route_args.ParseAndRouteArgs.md#constructor)

### Properties

- [\_argv](app_init_parse_and_route_args.ParseAndRouteArgs.md#_argv)
- [name](app_init_parse_and_route_args.ParseAndRouteArgs.md#name)

### Methods

- [\_createFn](app_init_parse_and_route_args.ParseAndRouteArgs.md#_createfn)
- [\_destroyFn](app_init_parse_and_route_args.ParseAndRouteArgs.md#_destroyfn)
- [create](app_init_parse_and_route_args.ParseAndRouteArgs.md#create)
- [destroy](app_init_parse_and_route_args.ParseAndRouteArgs.md#destroy)

## Constructors

### constructor

• **new ParseAndRouteArgs**(): [`ParseAndRouteArgs`](app_init_parse_and_route_args.ParseAndRouteArgs.md)

#### Returns

[`ParseAndRouteArgs`](app_init_parse_and_route_args.ParseAndRouteArgs.md)

#### Overrides

LifeCycle.constructor

#### Defined in

[cli/src/app/init/parse-and-route-args.ts:8](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/app/init/parse-and-route-args.ts#L8)

## Properties

### \_argv

• `Protected` `Readonly` **\_argv**: `string`[]

#### Defined in

[cli/src/app/init/parse-and-route-args.ts:6](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/app/init/parse-and-route-args.ts#L6)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

LifeCycle.name

#### Defined in

[app-boot/src/life-cycle.ts:7](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/life-cycle.ts#L7)

## Methods

### \_createFn

▸ **_createFn**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

LifeCycle.\_createFn

#### Defined in

[cli/src/app/init/parse-and-route-args.ts:13](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/app/init/parse-and-route-args.ts#L13)

___

### \_destroyFn

▸ **_destroyFn**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

LifeCycle.\_destroyFn

#### Defined in

[cli/src/app/init/parse-and-route-args.ts:17](https://github.com/beecode-rs/msh-cli/blob/816f38b/src/app/init/parse-and-route-args.ts#L17)

___

### create

▸ **create**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Inherited from

LifeCycle.create

#### Defined in

[app-boot/src/life-cycle.ts:14](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/life-cycle.ts#L14)

___

### destroy

▸ **destroy**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Inherited from

LifeCycle.destroy

#### Defined in

[app-boot/src/life-cycle.ts:22](https://github.com/beecode-rs/msh-app-boot/blob/ff89a8e/src/life-cycle.ts#L22)
