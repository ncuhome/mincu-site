

# mincu-vanilla

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

• `Const` **mincu**: `Mincu`

___

### mincuCore

• `Const` **mincuCore**: `MincuCoreBase`

___

### networkModule

• `Const` **networkModule**: `NetWorkModule`

___

### uiModule

• `Const` **uiModule**: `UIModule`

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
