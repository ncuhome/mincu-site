

# mincu-core

## Classes

- [MincuCoreBase](classes/MincuCoreBase)

## Interfaces

- [AppData](interfaces/AppData)
- [EdgeInsets](interfaces/EdgeInsets)
- [INativeFuncs](interfaces/INativeFuncs)
- [NavConfig](interfaces/NavConfig)
- [ShareConfig](interfaces/ShareConfig)

## Type Aliases

### ColorSchemeName

Ƭ **ColorSchemeName**: ``"light"`` \| ``"dark"`` \| ``null`` \| `undefined`

___

### EventMap

Ƭ **EventMap**: `Object`

#### Index signature

▪ [key: `number`]: \{ `failed`: `any` ; `success`: `any`  }

___

### FuncNames

Ƭ **FuncNames**: keyof [`INativeFuncs`](interfaces/INativeFuncs)

___

### States

Ƭ **States**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `colorScheme` | [`ColorSchemeName`](#colorschemename) |
| `colors` | `any` |

## Functions

### channelGenerator

▸ **channelGenerator**(`eventMap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventMap` | [`EventMap`](#eventmap) |

#### Returns

`void`

# Classes



## Class: MincuCoreBase

目前支持 web 和 native 的双向通信

### Constructors

#### constructor

• **new MincuCoreBase**(`eventKey?`, `eventMap?`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `eventKey?` | `number` |
| `eventMap?` | [`EventMap`](#eventmap) |

### Properties

#### call

• **call**: \<Class, Method\>(`baseClass`: `Class`, `method`: `Method`, `params`: `Parameters`\<[`INativeFuncs`](../interfaces/INativeFuncs)[`Class`][`Method`]\>, `success?`: (`res?`: \{ `data`: `ReturnType`\<[`INativeFuncs`](../interfaces/INativeFuncs)[`Class`][`Method`]\>  }) => `any`, `failed?`: () => `void`) => `void`

##### Type declaration

▸ \<`Class`, `Method`\>(`baseClass`, `method`, `params`, `success?`, `failed?`): `void`

主动请求并触发客户端事件

###### Type parameters

| Name | Type |
| :------ | :------ |
| `Class` | extends keyof [`INativeFuncs`](../interfaces/INativeFuncs) |
| `Method` | extends `string` \| `number` \| `symbol` |

###### Parameters

| Name | Type |
| :------ | :------ |
| `baseClass` | `Class` |
| `method` | `Method` |
| `params` | `Parameters`\<[`INativeFuncs`](../interfaces/INativeFuncs)[`Class`][`Method`]\> |
| `success?` | (`res?`: \{ `data`: `ReturnType`\<[`INativeFuncs`](../interfaces/INativeFuncs)[`Class`][`Method`]\>  }) => `any` |
| `failed?` | () => `void` |

###### Returns

`void`

___

#### callPromise

• **callPromise**: \<Class, Method\>(`baseClass`: `Class`, `method`: `Method`, `params`: `Parameters`\<[`INativeFuncs`](../interfaces/INativeFuncs)[`Class`][`Method`]\>) => `Promise`\<`ReturnType`\<[`INativeFuncs`](../interfaces/INativeFuncs)[`Class`][`Method`]\>\>

##### Type declaration

▸ \<`Class`, `Method`\>(`baseClass`, `method`, `params`): `Promise`\<`ReturnType`\<[`INativeFuncs`](../interfaces/INativeFuncs)[`Class`][`Method`]\>\>

###### Type parameters

| Name | Type |
| :------ | :------ |
| `Class` | extends keyof [`INativeFuncs`](../interfaces/INativeFuncs) |
| `Method` | extends `string` \| `number` \| `symbol` |

###### Parameters

| Name | Type |
| :------ | :------ |
| `baseClass` | `Class` |
| `method` | `Method` |
| `params` | `Parameters`\<[`INativeFuncs`](../interfaces/INativeFuncs)[`Class`][`Method`]\> |

###### Returns

`Promise`\<`ReturnType`\<[`INativeFuncs`](../interfaces/INativeFuncs)[`Class`][`Method`]\>\>

___

#### eventKey

• `Private` **eventKey**: `any`

___

#### eventMap

• `Private` **eventMap**: `any`

___

#### initial

• **initial**: (`resolve`: (`value?`: `unknown`) => `any`, `reject?`: (`value?`: `unknown`) => `any`) => `void`

##### Type declaration

▸ (`resolve`, `reject?`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `resolve` | (`value?`: `unknown`) => `any` |
| `reject?` | (`value?`: `unknown`) => `any` |

###### Returns

`void`

___

#### listener

• **listener**: (`eventName`: `string`, `fn`: (`data`: `any`) => `any`) => `EventEmitter`

##### Type declaration

▸ (`eventName`, `fn`): `EventEmitter`

添加一个原生事件监听器

###### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `fn` | (`data`: `any`) => `any` |

###### Returns

`EventEmitter`

___

#### once

• **once**: (`eventName`: `string`, `fn`: (`data`: `any`) => `any`) => `EventEmitter`

##### Type declaration

▸ (`eventName`, `fn`): `EventEmitter`

添加一个原生事件监听器 (监听一次后立即销毁)

###### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `fn` | (`data`: `any`) => `any` |

###### Returns

`EventEmitter`

___

#### remove

• **remove**: (`eventName`: `string`, `fn`: (`data`: `any`) => `any`) => `void`

##### Type declaration

▸ (`eventName`, `fn`): `void`

移除某个原生事件监听器

###### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `fn` | (`data`: `any`) => `any` |

###### Returns

`void`

### Accessors

#### appData

• `get` **appData**(): [`AppData`](../interfaces/AppData)

##### Returns

[`AppData`](../interfaces/AppData)

___

#### isApp

• `get` **isApp**(): `boolean`

##### Returns

`boolean`

___

#### isReady

• `get` **isReady**(): `any`

##### Returns

`any`

___

#### messageChannel

• `get` **messageChannel**(): `EventEmitter`

##### Returns

`EventEmitter`

___

#### webview

• `get` **webview**(): `any`

##### Returns

`any`

# Interfaces



## Interface: AppData

### Properties

#### user

• **user**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `colorScheme` | [`ColorSchemeName`](#colorschemename) |
| `colors` | `any` |
| `inset` | [`EdgeInsets`](EdgeInsets) |
| `profile` | \{ `basicProfile`: \{ `app_avatar_url`: `string` ; `department`: `string` ; `department_id`: `string` ; `head_pic_url`: `string` ; `max_role_level`: `number` ; `message`: `string` ; `name`: `string` ; `status`: `number`  } ; `entireProfile`: `IEntireProfileResponse`  } |
| `profile.basicProfile` | \{ `app_avatar_url`: `string` ; `department`: `string` ; `department_id`: `string` ; `head_pic_url`: `string` ; `max_role_level`: `number` ; `message`: `string` ; `name`: `string` ; `status`: `number`  } |
| `profile.basicProfile.app_avatar_url` | `string` |
| `profile.basicProfile.department` | `string` |
| `profile.basicProfile.department_id` | `string` |
| `profile.basicProfile.head_pic_url` | `string` |
| `profile.basicProfile.max_role_level` | `number` |
| `profile.basicProfile.message` | `string` |
| `profile.basicProfile.name` | `string` |
| `profile.basicProfile.status` | `number` |
| `profile.entireProfile` | `IEntireProfileResponse` |
| `token` | `string` |



## Interface: EdgeInsets

### Properties

#### bottom

• **bottom**: `number`

___

#### left

• **left**: `number`

___

#### right

• **right**: `number`

___

#### top

• **top**: `number`



## Interface: INativeFuncs

### Properties

#### Auth

• **Auth**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `login` | (`data`: \{ `password`: `string` ; `username`: `string`  }) => `number` |
| `refreshToken` | () => \{ `token`: `string`  } |

___

#### Clipboard

• **Clipboard**: `any`

___

#### DeviceInfo

• **DeviceInfo**: `any`

___

#### Linking

• **Linking**: `LinkingStatic`

___

#### NetInfo

• **NetInfo**: `any`

___

#### Portal

• **Portal**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `remove` | (`id`: `number`) => `void` |

___

#### Share

• **Share**: `any`

___

#### StatusBar

• **StatusBar**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `setBarStyle` | (`style`: `StatusBarStyle`, `animated?`: `boolean`) => `void` |

___

#### Storage

• **Storage**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `getItem` | (`key`: `string`) => `any` |
| `remove` | (`key`: `string`) => `void` |
| `reset` | () => `void` |
| `setItem` | (`key`: `string`, `value`: `any`) => `void` |

___

#### Toast

• **Toast**: `Object`

##### Index signature

▪ [key: `string`]: (`title`: `string`, `during`: `number`) => `number`

___

#### ToastAndroid

• **ToastAndroid**: `ToastAndroidStatic`

___

#### Vibration

• **Vibration**: `any`

___

#### Webview

• **Webview**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `bindBackPress` | (`value`: `boolean`) => `void` |
| `disableAutoSetTitle` | () => `void` |
| `exitWebView` | () => `void` |
| `handleShowHeader` | (`value?`: `boolean`) => `boolean` |
| `toScreen` | (`e`: [`NavConfig`](NavConfig)) => `void` |



## Interface: NavConfig

### Properties

#### params

• `Optional` **params**: `object`

___

#### screen

• **screen**: `string`



## Interface: ShareConfig

### Properties

#### imageUrl

• `Optional` **imageUrl**: `string`

___

#### title

• `Optional` **title**: `string`

___

#### url

• `Optional` **url**: `string`
