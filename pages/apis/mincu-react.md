

# mincu-react

## Interfaces

- [AppData](#interface-appdata)
- [EdgeInsets](#interface-edgeinsets)
- [INativeFuncs](#interface-inativefuncs)
- [Mincu](#interface-mincu)
- [NavConfig](#interface-navconfig)
- [ShareConfig](#interface-shareconfig)

## Type Aliases

### ColorSchemeName

Ƭ **ColorSchemeName**: ``"light"`` \| ``"dark"`` \| ``null`` \| `undefined`

___

### States

Ƭ **States**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `colorScheme` | [`ColorSchemeName`](#colorschemename) |
| `colors` | `any` |

## Variables

### dataModule

• `Const` **dataModule**: `DataModule`

___

### eventModule

• `Const` **eventModule**: `EventModule`

___

### mincu

• `Const` **mincu**: [`Mincu`](#interface-mincu)

___

### mincuCore

• `Const` **mincuCore**: `MincuCoreBase`

___

### networkModule

• `Const` **networkModule**: `NetWorkModule`

___

### uiModule

• `Const` **uiModule**: `UIModule`

## Functions

### Ready

▸ **Ready**(`props`, `context?`): `ReactElement`\<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Props` |
| `context?` | `any` |

#### Returns

`ReactElement`\<`any`, `any`\>

___

### ReadySSR

▸ **ReadySSR**(`props`, `context?`): `ReactElement`\<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Props` |
| `context?` | `any` |

#### Returns

`ReactElement`\<`any`, `any`\>

___

### useAppReady

▸ **useAppReady**(`reject?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reject?` | () => `void` |

#### Returns

`boolean`

___

### useNativeState

▸ **useNativeState**\<`T`\>(`key`): [`States`](#states)[`T`]

返回 app 的状态

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`States`](#states) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `T` |

#### Returns

[`States`](#states)[`T`]

___

### useSafeArea

▸ **useSafeArea**(): [`EdgeInsets`](#interface-edgeinsets)

#### Returns

[`EdgeInsets`](#interface-edgeinsets)

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

• **Clipboard**: `Clipboard`

___

#### DeviceInfo

• **DeviceInfo**: `DeviceInfo`

___

#### Linking

• **Linking**: `RNLinking`

___

#### NetInfo

• **NetInfo**: `NetInfo`

___

#### Orientation

• **Orientation**: typeof `Orientation`

**`Since`**

iNCU 5.9.7+

___

#### Portal

• **Portal**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `remove` | (`id`: `number`) => `void` |

___

#### Share

• **Share**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `openShareMenu` | () => `void` |
| `setShareConfig` | (`config`: [`ShareConfig`](ShareConfig)) => `void` |

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

• **Vibration**: `VibrationStatic`

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



## Interface: Mincu

### Hierarchy

- `MincuCoreBase`

- `DataModule`

- `EventModule`

- `NetWorkModule`

- `UIModule`

  ↳ **`Mincu`**

### Properties

#### axiosInterceptors

• **axiosInterceptors**: () => \{ `error`: (`error`: `any`) => `Promise`\<`any`\> ; `request`: (`config`: `AxiosRequestConfig`\<`any`\>) => `AxiosRequestConfig`\<`any`\> ; `response`: (`response`: `AxiosResponse`\<`any`, `any`\>) => `AxiosResponse`\<`any`, `any`\>  }

##### Type declaration

▸ (): `Object`

###### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | (`error`: `any`) => `Promise`\<`any`\> |
| `request` | (`config`: `AxiosRequestConfig`\<`any`\>) => `AxiosRequestConfig`\<`any`\> |
| `response` | (`response`: `AxiosResponse`\<`any`, `any`\>) => `AxiosResponse`\<`any`, `any`\> |

##### Inherited from

NetWorkModule.axiosInterceptors

___

#### backPress

• **backPress**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `bind` | (`cb`: () => `void`, `onResulst?`: (`success`: `boolean`) => `void`) => () => `void` |
| `unbind` | (`cb`: () => `void`) => `void` |

##### Inherited from

UIModule.backPress

___

#### call

• **call**: \<Class, Method\>(`baseClass`: `Class`, `method`: `Method`, `params`: `ParamType`\<[`INativeFuncs`](INativeFuncs)[`Class`][`Method`]\>, `success?`: (`res?`: \{ `data`: `CallReturnType`\<[`INativeFuncs`](INativeFuncs)[`Class`][`Method`]\>  }) => `any`, `failed?`: (...`args`: `any`[]) => `void`) => `void`

##### Type declaration

▸ \<`Class`, `Method`\>(`baseClass`, `method`, `params`, `success?`, `failed?`): `void`

主动请求并触发客户端事件

###### Type parameters

| Name | Type |
| :------ | :------ |
| `Class` | extends keyof [`INativeFuncs`](INativeFuncs) |
| `Method` | extends `string` \| `number` \| `symbol` |

###### Parameters

| Name | Type |
| :------ | :------ |
| `baseClass` | `Class` |
| `method` | `Method` |
| `params` | `ParamType`\<[`INativeFuncs`](INativeFuncs)[`Class`][`Method`]\> |
| `success?` | (`res?`: \{ `data`: `CallReturnType`\<[`INativeFuncs`](INativeFuncs)[`Class`][`Method`]\>  }) => `any` |
| `failed?` | (...`args`: `any`[]) => `void` |

###### Returns

`void`

##### Inherited from

MincuCoreBase.call

___

#### callPromise

• **callPromise**: \<Class, Method\>(`baseClass`: `Class`, `method`: `Method`, `params`: `ParamType`\<[`INativeFuncs`](INativeFuncs)[`Class`][`Method`]\>) => `Promise`\<`CallReturnType`\<[`INativeFuncs`](INativeFuncs)[`Class`][`Method`]\>\>

##### Type declaration

▸ \<`Class`, `Method`\>(`baseClass`, `method`, `params`): `Promise`\<`CallReturnType`\<[`INativeFuncs`](INativeFuncs)[`Class`][`Method`]\>\>

###### Type parameters

| Name | Type |
| :------ | :------ |
| `Class` | extends keyof [`INativeFuncs`](INativeFuncs) |
| `Method` | extends `string` \| `number` \| `symbol` |

###### Parameters

| Name | Type |
| :------ | :------ |
| `baseClass` | `Class` |
| `method` | `Method` |
| `params` | `ParamType`\<[`INativeFuncs`](INativeFuncs)[`Class`][`Method`]\> |

###### Returns

`Promise`\<`CallReturnType`\<[`INativeFuncs`](INativeFuncs)[`Class`][`Method`]\>\>

##### Inherited from

MincuCoreBase.callPromise

___

#### fetch

• **fetch**: `any`

**`Deprecated`**

networkModule.useAxiosInterceptors is for your need

##### Inherited from

NetWorkModule.fetch

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

##### Inherited from

MincuCoreBase.initial

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

##### Inherited from

MincuCoreBase.listener

___

#### makeProxyFromNativeFunc

• **makeProxyFromNativeFunc**: \<Class\>(`func`: `Class`) => [`INativeFuncs`](INativeFuncs)[`Class`]

##### Type declaration

▸ \<`Class`\>(`func`): [`INativeFuncs`](INativeFuncs)[`Class`]

Return a proxy handle callPromise from INativeFuncs

###### Type parameters

| Name | Type |
| :------ | :------ |
| `Class` | extends keyof [`INativeFuncs`](INativeFuncs) |

###### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Class` |

###### Returns

[`INativeFuncs`](INativeFuncs)[`Class`]

##### Inherited from

MincuCoreBase.makeProxyFromNativeFunc

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

##### Inherited from

MincuCoreBase.once

___

#### orientation

• **orientation**: typeof `Orientation`

**`Since`**

iNCU 5.9.7+

##### Inherited from

UIModule.orientation

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

##### Inherited from

MincuCoreBase.remove

___

#### storage

• **storage**: `MincuStorage`

##### Inherited from

DataModule.storage

___

#### toast

• **toast**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `fail` | (`title`: `string`, `during?`: `number`) => `Promise`\<`number`\> |
| `info` | (`title`: `string`, `during?`: `number`) => `Promise`\<`number`\> |
| `loading` | (`title`: `string`, `during?`: `number`) => `Promise`\<() => `void`\> |
| `remove` | (`key`: `number`) => `Promise`\<`void`\> |
| `success` | (`title`: `string`, `during?`: `number`) => `Promise`\<`number`\> |

##### Inherited from

UIModule.toast

___

#### token

• **token**: `string`

##### Inherited from

NetWorkModule.token

### Accessors

#### appData

• `get` **appData**(): [`AppData`](AppData)

由 iNCU WebView 注入的来自 App 的数据

##### Returns

[`AppData`](AppData)

##### Inherited from

MincuCoreBase.appData

___

#### colorScheme

• `get` **colorScheme**(): [`ColorSchemeName`](#colorschemename)

##### Returns

[`ColorSchemeName`](#colorschemename)

##### Inherited from

DataModule.colorScheme

___

#### colors

• `get` **colors**(): `any`

##### Returns

`any`

##### Inherited from

DataModule.colors

___

#### inset

• `get` **inset**(): [`EdgeInsets`](EdgeInsets)

##### Returns

[`EdgeInsets`](EdgeInsets)

##### Inherited from

DataModule.inset

___

#### isApp

• `get` **isApp**(): `boolean`

通过 userAgent 判断是否在 iNCU 环境
userAgent: iNCU.*

##### Returns

`boolean`

##### Inherited from

MincuCoreBase.isApp

___

#### isDark

• `get` **isDark**(): `boolean`

##### Returns

`boolean`

##### Inherited from

DataModule.isDark

___

#### isReady

• `get` **isReady**(): `any`

由 App 端注入的数据段，用以判断是否注入成功

##### Returns

`any`

##### Inherited from

MincuCoreBase.isReady

___

#### messageChannel

• `get` **messageChannel**(): `EventEmitter`

与 App 端通信的消息通道

##### Returns

`EventEmitter`

##### Inherited from

MincuCoreBase.messageChannel

___

#### userInfo

• `get` **userInfo**(): `Object`

##### Returns

`Object`

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

##### Inherited from

DataModule.userInfo

___

#### webview

• `get` **webview**(): `any`

App 端的 Webview JavaScriptInterface，用以向 App 端发送信息

##### Returns

`any`

##### Inherited from

MincuCoreBase.webview

### Methods

#### exit

▸ **exit**(): `void`

##### Returns

`void`

##### Inherited from

UIModule.exit

___

#### getStoredToken

▸ **getStoredToken**(): `string`

从浏览器缓存中拿取 token

一般放在该组件挂载 (渲染) 阶段结束后执行

##### Returns

`string`

取出缓存中的 token

##### Inherited from

NetWorkModule.getStoredToken

___

#### getVersion

▸ **getVersion**(): `Promise`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

DataModule.getVersion

___

#### handleShowHeader

▸ **handleShowHeader**(`value`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

##### Returns

`Promise`\<`boolean`\>

##### Inherited from

UIModule.handleShowHeader

___

#### login

▸ **login**(`username`, `password`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `password` | `string` |

##### Returns

`void`

##### Inherited from

EventModule.login

___

#### openUrl

▸ **openUrl**(`url`): `void`

通过系统默认浏览器打开 Web 页面

主要适配一些端内转端外场景和 deeplink

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 要跳转的链接 |

##### Returns

`void`

##### Inherited from

EventModule.openUrl

___

#### refreshToken

▸ **refreshToken**(): `Promise`\<`string`\>

刷新 token 函数

##### Returns

`Promise`\<`string`\>

返回一个新 token 的 Promise 对象

##### Inherited from

NetWorkModule.refreshToken

___

#### setBarStyle

▸ **setBarStyle**(`style`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `StatusBarStyle` |

##### Returns

`void`

##### Inherited from

UIModule.setBarStyle

___

#### setShareConfig

▸ **setShareConfig**(`config`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ShareConfig`](ShareConfig) |

##### Returns

`void`

##### Inherited from

EventModule.setShareConfig

___

#### showShare

▸ **showShare**(): `void`

##### Returns

`void`

##### Inherited from

EventModule.showShare

___

#### toScreen

▸ **toScreen**(`config`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`NavConfig`](NavConfig) |

##### Returns

`void`

##### Inherited from

UIModule.toScreen

___

#### useAxiosInterceptors

▸ **useAxiosInterceptors**(`axiosInstance`): `void`

**`Exmaple`**

const fetcher = axios.create()
networkModule.useAxiosInterceptors(fetcher)

##### Parameters

| Name | Type |
| :------ | :------ |
| `axiosInstance` | `AxiosInstance` |

##### Returns

`void`

##### Inherited from

NetWorkModule.useAxiosInterceptors



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
