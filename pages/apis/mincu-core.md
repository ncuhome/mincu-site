

# mincu-core

## Namespaces

- [Orientation](#Orientation)

## Enumerations

- [NetInfoCellularGeneration](#enumeration-netinfocellulargeneration)
- [NetInfoStateType](#enumeration-netinfostatetype)

## Classes

- [MincuCoreBase](#class-mincucorebase)

## Interfaces

- [AppData](#interface-appdata)
- [Base\_info](#interface-base_info)
- [Clipboard](#interface-clipboard)
- [DeviceInfo](#interface-deviceinfo)
- [EdgeInsets](#interface-edgeinsets)
- [INativeFuncs](#interface-inativefuncs)
- [NavConfig](#interface-navconfig)
- [NetInfo](#interface-netinfo)
- [RNLinking](#interface-rnlinking)
- [ShareConfig](#interface-shareconfig)
- [ToastAndroidStatic](#interface-toastandroidstatic)
- [VibrationStatic](#interface-vibrationstatic)

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

Ƭ **FuncNames**: keyof [`INativeFuncs`](#interface-inativefuncs)

___

### States

Ƭ **States**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `colorScheme` | [`ColorSchemeName`](#colorschemename) |
| `colors` | `any` |

___

### StatusBarStyle

Ƭ **StatusBarStyle**: ``"default"`` \| ``"light-content"`` \| ``"dark-content"``

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

• **call**: \<Class, Method\>(`baseClass`: `Class`, `method`: `Method`, `params`: `ParamType`\<[`INativeFuncs`](../#interface-INativeFuncs)[`Class`][`Method`]\>, `success?`: (`res?`: \{ `data`: `CallReturnType`\<[`INativeFuncs`](../#interface-INativeFuncs)[`Class`][`Method`]\>  }) => `any`, `failed?`: (...`args`: `any`[]) => `void`) => `void`

##### Type declaration

▸ \<`Class`, `Method`\>(`baseClass`, `method`, `params`, `success?`, `failed?`): `void`

主动请求并触发客户端事件

###### Type parameters

| Name | Type |
| :------ | :------ |
| `Class` | extends keyof [`INativeFuncs`](../#interface-INativeFuncs) |
| `Method` | extends `string` \| `number` \| `symbol` |

###### Parameters

| Name | Type |
| :------ | :------ |
| `baseClass` | `Class` |
| `method` | `Method` |
| `params` | `ParamType`\<[`INativeFuncs`](../#interface-INativeFuncs)[`Class`][`Method`]\> |
| `success?` | (`res?`: \{ `data`: `CallReturnType`\<[`INativeFuncs`](../#interface-INativeFuncs)[`Class`][`Method`]\>  }) => `any` |
| `failed?` | (...`args`: `any`[]) => `void` |

###### Returns

`void`

___

#### callPromise

• **callPromise**: \<Class, Method\>(`baseClass`: `Class`, `method`: `Method`, `params`: `ParamType`\<[`INativeFuncs`](../#interface-INativeFuncs)[`Class`][`Method`]\>) => `Promise`\<`CallReturnType`\<[`INativeFuncs`](../#interface-INativeFuncs)[`Class`][`Method`]\>\>

##### Type declaration

▸ \<`Class`, `Method`\>(`baseClass`, `method`, `params`): `Promise`\<`CallReturnType`\<[`INativeFuncs`](../#interface-INativeFuncs)[`Class`][`Method`]\>\>

###### Type parameters

| Name | Type |
| :------ | :------ |
| `Class` | extends keyof [`INativeFuncs`](../#interface-INativeFuncs) |
| `Method` | extends `string` \| `number` \| `symbol` |

###### Parameters

| Name | Type |
| :------ | :------ |
| `baseClass` | `Class` |
| `method` | `Method` |
| `params` | `ParamType`\<[`INativeFuncs`](../#interface-INativeFuncs)[`Class`][`Method`]\> |

###### Returns

`Promise`\<`CallReturnType`\<[`INativeFuncs`](../#interface-INativeFuncs)[`Class`][`Method`]\>\>

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

#### makeProxyFromNativeFunc

• **makeProxyFromNativeFunc**: \<Class\>(`func`: `Class`) => [`INativeFuncs`](../#interface-INativeFuncs)[`Class`]

##### Type declaration

▸ \<`Class`\>(`func`): [`INativeFuncs`](../#interface-INativeFuncs)[`Class`]

Return a proxy handle callPromise from INativeFuncs

###### Type parameters

| Name | Type |
| :------ | :------ |
| `Class` | extends keyof [`INativeFuncs`](../#interface-INativeFuncs) |

###### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Class` |

###### Returns

[`INativeFuncs`](../#interface-INativeFuncs)[`Class`]

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

• `get` **appData**(): [`AppData`](../#interface-AppData)

由 iNCU WebView 注入的来自 App 的数据

##### Returns

[`AppData`](../#interface-AppData)

___

#### isApp

• `get` **isApp**(): `boolean`

通过 userAgent 判断是否在 iNCU 环境
userAgent: iNCU.*

##### Returns

`boolean`

___

#### isReady

• `get` **isReady**(): `any`

由 App 端注入的数据段，用以判断是否注入成功

##### Returns

`any`

___

#### messageChannel

• `get` **messageChannel**(): `EventEmitter`

与 App 端通信的消息通道

##### Returns

`EventEmitter`

___

#### webview

• `get` **webview**(): `any`

App 端的 Webview JavaScriptInterface，用以向 App 端发送信息

##### Returns

`any`

# Enums



## Enumeration: NetInfoCellularGeneration

### Enumeration Members

#### 2g

• **2g** = ``"2g"``

___

#### 3g

• **3g** = ``"3g"``

___

#### 4g

• **4g** = ``"4g"``

___

#### 5g

• **5g** = ``"5g"``



## Enumeration: NetInfoStateType

### Enumeration Members

#### bluetooth

• **bluetooth** = ``"bluetooth"``

___

#### cellular

• **cellular** = ``"cellular"``

___

#### ethernet

• **ethernet** = ``"ethernet"``

___

#### none

• **none** = ``"none"``

___

#### other

• **other** = ``"other"``

___

#### unknown

• **unknown** = ``"unknown"``

___

#### vpn

• **vpn** = ``"vpn"``

___

#### wifi

• **wifi** = ``"wifi"``

___

#### wimax

• **wimax** = ``"wimax"``

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



## Interface: Base\_info

### Properties

#### csd

• **csd**: `Csd`

___

#### csrq

• **csrq**: `string`

___

#### dzyx

• **dzyx**: `string`

___

#### gb

• **gb**: `Gb`

___

#### jg

• **jg**: `Jg`

___

#### jhkh

• **jhkh**: `string`

___

#### mz

• **mz**: `Mz`

___

#### pyfs

• **pyfs**: `Pyf`

___

#### qq

• **qq**: `string`

___

#### qsh

• **qsh**: `string`

___

#### rxny

• **rxny**: `string`

___

#### sfzh

• **sfzh**: `string`

___

#### xb

• **xb**: `Xb`

___

#### xh

• **xh**: `string`

___

#### xm

• **xm**: `string`

___

#### xslb

• **xslb**: `Xslb`

___

#### xx

• **xx**: `Xx`

___

#### yddh

• **yddh**: `string`

___

#### zzmm

• **zzmm**: `Zzmm`



## Interface: Clipboard

`Clipboard` gives you an interface for setting and getting content from Clipboard on both iOS and Android

### Methods

#### addListener

▸ **addListener**(`callback`): `Object`

(iOS and Android Only)
Adds a listener to get notifications when the clipboard has changed.
If this is the first listener, turns on clipboard notifications on the native side.
It returns EmitterSubscription where you can call "remove" to remove listener
```javascript
const listener = () => console.log("changed!");
Clipboard.addListener(listener);
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `remove` | () => `void` |

___

#### getImage

▸ **getImage**(): `Promise`\<`string`\>

##### Returns

`Promise`\<`string`\>

___

#### getImageJPG

▸ **getImageJPG**(): `Promise`\<`string`\>

Get clipboard image as JPG in base64, this method returns a `Promise`, so you can use following code to get clipboard content
```javascript
async _getContent() \{
  var content = await Clipboard.getImageJPG();
}
```

##### Returns

`Promise`\<`string`\>

___

#### getImagePNG

▸ **getImagePNG**(): `Promise`\<`string`\>

Get clipboard image as PNG in base64, this method returns a `Promise`, so you can use following code to get clipboard content
```javascript
async _getContent() \{
  var content = await Clipboard.getImagePNG();
}
```

##### Returns

`Promise`\<`string`\>

___

#### getString

▸ **getString**(): `Promise`\<`string`\>

Get content of string type, this method returns a `Promise`, so you can use following code to get clipboard content
```javascript
async _getContent() \{
  var content = await Clipboard.getString();
}
```

##### Returns

`Promise`\<`string`\>

___

#### hasImage

▸ **hasImage**(): `any`

Returns whether the clipboard has an image or is empty.
This method returns a `Promise`, so you can use following code to check clipboard content
```javascript
async _hasContent() \{
  var hasContent = await Clipboard.hasImage();
}
```

##### Returns

`any`

___

#### hasNumber

▸ **hasNumber**(): `any`

(IOS 14+ Only)
Returns whether the clipboard has a Number(UIPasteboardDetectionPatternNumber) content. Can check
if there is a Number content in clipboard without triggering PasteBoard notification for iOS 14+
This method returns a `Promise`, so you can use following code to check for Number content in clipboard.
```javascript
async _hasNumber() \{
  var hasNumber = await Clipboard.hasNumber();
}
```

##### Returns

`any`

___

#### hasString

▸ **hasString**(): `any`

Returns whether the clipboard has content or is empty.
This method returns a `Promise`, so you can use following code to get clipboard content
```javascript
async _hasContent() \{
  var hasContent = await Clipboard.hasString();
}
```

##### Returns

`any`

___

#### hasURL

▸ **hasURL**(): `any`

(IOS Only)
Returns whether the clipboard has a URL content. Can check
if there is a URL content in clipboard without triggering PasteBoard notification for iOS 14+
This method returns a `Promise`, so you can use following code to check for url content in clipboard.
```javascript
async _hasURL() \{
  var hasURL = await Clipboard.hasURL();
}
```

##### Returns

`any`

___

#### hasWebURL

▸ **hasWebURL**(): `any`

(IOS 14+ Only)
Returns whether the clipboard has a WebURL(UIPasteboardDetectionPatternProbableWebURL) content. Can check
if there is a WebURL content in clipboard without triggering PasteBoard notification for iOS 14+
This method returns a `Promise`, so you can use following code to check for WebURL content in clipboard.
```javascript
async _hasWebURL() \{
  var hasWebURL = await Clipboard.hasWebURL();
}
```

##### Returns

`any`

___

#### removeAllListeners

▸ **removeAllListeners**(): `void`

(iOS and Android Only)
Removes all previously registered listeners and turns off notifications on the native side.
```javascript
Clipboard.removeAllListeners();
```

##### Returns

`void`

___

#### setImage

▸ **setImage**(`content`): `void`

Set content of base64 image type. You can use following code to set clipboard content
```javascript
_setContent() \{
  Clipboard.setImage(...);
}

iOS only
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

##### Returns

`void`

___

#### setString

▸ **setString**(`content`): `void`

Set content of string type. You can use following code to set clipboard content
```javascript
_setContent() \{
  Clipboard.setString('hello world');
}
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

##### Returns

`void`



## Interface: DeviceInfo

### Hierarchy

- `ExposedNativeMethods`

  ↳ **`DeviceInfo`**

### Properties

#### getAndroidId

• **getAndroidId**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getAndroidId

___

#### getAndroidIdSync

• **getAndroidIdSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getAndroidIdSync

___

#### getApiLevel

• **getApiLevel**: () => `Promise`\<`number`\>

##### Type declaration

▸ (): `Promise`\<`number`\>

###### Returns

`Promise`\<`number`\>

##### Inherited from

ExposedNativeMethods.getApiLevel

___

#### getApiLevelSync

• **getApiLevelSync**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

##### Inherited from

ExposedNativeMethods.getApiLevelSync

___

#### getApplicationName

• **getApplicationName**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

___

#### getAvailableLocationProviders

• **getAvailableLocationProviders**: () => `Promise`\<`LocationProviderInfo`\>

##### Type declaration

▸ (): `Promise`\<`LocationProviderInfo`\>

###### Returns

`Promise`\<`LocationProviderInfo`\>

##### Inherited from

ExposedNativeMethods.getAvailableLocationProviders

___

#### getAvailableLocationProvidersSync

• **getAvailableLocationProvidersSync**: () => `LocationProviderInfo`

##### Type declaration

▸ (): `LocationProviderInfo`

###### Returns

`LocationProviderInfo`

##### Inherited from

ExposedNativeMethods.getAvailableLocationProvidersSync

___

#### getBaseOs

• **getBaseOs**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getBaseOs

___

#### getBaseOsSync

• **getBaseOsSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getBaseOsSync

___

#### getBatteryLevel

• **getBatteryLevel**: () => `Promise`\<`number`\>

##### Type declaration

▸ (): `Promise`\<`number`\>

###### Returns

`Promise`\<`number`\>

##### Inherited from

ExposedNativeMethods.getBatteryLevel

___

#### getBatteryLevelSync

• **getBatteryLevelSync**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

##### Inherited from

ExposedNativeMethods.getBatteryLevelSync

___

#### getBootloader

• **getBootloader**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getBootloader

___

#### getBootloaderSync

• **getBootloaderSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getBootloaderSync

___

#### getBrand

• **getBrand**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

___

#### getBrightness

• **getBrightness**: () => `Promise`\<`number`\>

##### Type declaration

▸ (): `Promise`\<`number`\>

###### Returns

`Promise`\<`number`\>

##### Inherited from

ExposedNativeMethods.getBrightness

___

#### getBrightnessSync

• **getBrightnessSync**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

##### Inherited from

ExposedNativeMethods.getBrightnessSync

___

#### getBuildId

• **getBuildId**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getBuildId

___

#### getBuildIdSync

• **getBuildIdSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getBuildIdSync

___

#### getBuildNumber

• **getBuildNumber**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

___

#### getBundleId

• **getBundleId**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

___

#### getCarrier

• **getCarrier**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getCarrier

___

#### getCarrierSync

• **getCarrierSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getCarrierSync

___

#### getCodename

• **getCodename**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getCodename

___

#### getCodenameSync

• **getCodenameSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getCodenameSync

___

#### getDevice

• **getDevice**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getDevice

___

#### getDeviceId

• **getDeviceId**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

___

#### getDeviceName

• **getDeviceName**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getDeviceName

___

#### getDeviceNameSync

• **getDeviceNameSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getDeviceNameSync

___

#### getDeviceSync

• **getDeviceSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getDeviceSync

___

#### getDeviceToken

• **getDeviceToken**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getDeviceToken

___

#### getDeviceType

• **getDeviceType**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

___

#### getDisplay

• **getDisplay**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getDisplay

___

#### getDisplaySync

• **getDisplaySync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getDisplaySync

___

#### getFingerprint

• **getFingerprint**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getFingerprint

___

#### getFingerprintSync

• **getFingerprintSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getFingerprintSync

___

#### getFirstInstallTime

• **getFirstInstallTime**: () => `Promise`\<`number`\>

##### Type declaration

▸ (): `Promise`\<`number`\>

###### Returns

`Promise`\<`number`\>

##### Inherited from

ExposedNativeMethods.getFirstInstallTime

___

#### getFirstInstallTimeSync

• **getFirstInstallTimeSync**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

##### Inherited from

ExposedNativeMethods.getFirstInstallTimeSync

___

#### getFontScale

• **getFontScale**: () => `Promise`\<`number`\>

##### Type declaration

▸ (): `Promise`\<`number`\>

###### Returns

`Promise`\<`number`\>

##### Inherited from

ExposedNativeMethods.getFontScale

___

#### getFontScaleSync

• **getFontScaleSync**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

##### Inherited from

ExposedNativeMethods.getFontScaleSync

___

#### getFreeDiskStorage

• **getFreeDiskStorage**: () => `Promise`\<`number`\>

##### Type declaration

▸ (): `Promise`\<`number`\>

###### Returns

`Promise`\<`number`\>

##### Inherited from

ExposedNativeMethods.getFreeDiskStorage

___

#### getFreeDiskStorageOld

• **getFreeDiskStorageOld**: () => `Promise`\<`number`\>

##### Type declaration

▸ (): `Promise`\<`number`\>

###### Returns

`Promise`\<`number`\>

##### Inherited from

ExposedNativeMethods.getFreeDiskStorageOld

___

#### getFreeDiskStorageOldSync

• **getFreeDiskStorageOldSync**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

##### Inherited from

ExposedNativeMethods.getFreeDiskStorageOldSync

___

#### getFreeDiskStorageSync

• **getFreeDiskStorageSync**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

##### Inherited from

ExposedNativeMethods.getFreeDiskStorageSync

___

#### getHardware

• **getHardware**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getHardware

___

#### getHardwareSync

• **getHardwareSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getHardwareSync

___

#### getHost

• **getHost**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getHost

___

#### getHostSync

• **getHostSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getHostSync

___

#### getIncremental

• **getIncremental**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getIncremental

___

#### getIncrementalSync

• **getIncrementalSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getIncrementalSync

___

#### getInstallReferrer

• **getInstallReferrer**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getInstallReferrer

___

#### getInstallReferrerSync

• **getInstallReferrerSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getInstallReferrerSync

___

#### getInstallerPackageName

• **getInstallerPackageName**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getInstallerPackageName

___

#### getInstallerPackageNameSync

• **getInstallerPackageNameSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getInstallerPackageNameSync

___

#### getInstanceId

• **getInstanceId**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getInstanceId

___

#### getInstanceIdSync

• **getInstanceIdSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getInstanceIdSync

___

#### getIpAddress

• **getIpAddress**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getIpAddress

___

#### getIpAddressSync

• **getIpAddressSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getIpAddressSync

___

#### getLastUpdateTime

• **getLastUpdateTime**: () => `Promise`\<`number`\>

##### Type declaration

▸ (): `Promise`\<`number`\>

###### Returns

`Promise`\<`number`\>

##### Inherited from

ExposedNativeMethods.getLastUpdateTime

___

#### getLastUpdateTimeSync

• **getLastUpdateTimeSync**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

##### Inherited from

ExposedNativeMethods.getLastUpdateTimeSync

___

#### getMacAddress

• **getMacAddress**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getMacAddress

___

#### getMacAddressSync

• **getMacAddressSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getMacAddressSync

___

#### getManufacturer

• **getManufacturer**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

___

#### getManufacturerSync

• **getManufacturerSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

___

#### getMaxMemory

• **getMaxMemory**: () => `Promise`\<`number`\>

##### Type declaration

▸ (): `Promise`\<`number`\>

###### Returns

`Promise`\<`number`\>

##### Inherited from

ExposedNativeMethods.getMaxMemory

___

#### getMaxMemorySync

• **getMaxMemorySync**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

##### Inherited from

ExposedNativeMethods.getMaxMemorySync

___

#### getModel

• **getModel**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

___

#### getPhoneNumber

• **getPhoneNumber**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getPhoneNumber

___

#### getPhoneNumberSync

• **getPhoneNumberSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getPhoneNumberSync

___

#### getPowerState

• **getPowerState**: () => `Promise`\<`Partial`\<`PowerState`\>\>

##### Type declaration

▸ (): `Promise`\<`Partial`\<`PowerState`\>\>

###### Returns

`Promise`\<`Partial`\<`PowerState`\>\>

___

#### getPowerStateSync

• **getPowerStateSync**: () => `Partial`\<`PowerState`\>

##### Type declaration

▸ (): `Partial`\<`PowerState`\>

###### Returns

`Partial`\<`PowerState`\>

___

#### getPreviewSdkInt

• **getPreviewSdkInt**: () => `Promise`\<`number`\>

##### Type declaration

▸ (): `Promise`\<`number`\>

###### Returns

`Promise`\<`number`\>

##### Inherited from

ExposedNativeMethods.getPreviewSdkInt

___

#### getPreviewSdkIntSync

• **getPreviewSdkIntSync**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

##### Inherited from

ExposedNativeMethods.getPreviewSdkIntSync

___

#### getProduct

• **getProduct**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getProduct

___

#### getProductSync

• **getProductSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getProductSync

___

#### getReadableVersion

• **getReadableVersion**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

___

#### getSecurityPatch

• **getSecurityPatch**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getSecurityPatch

___

#### getSecurityPatchSync

• **getSecurityPatchSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getSecurityPatchSync

___

#### getSerialNumber

• **getSerialNumber**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getSerialNumber

___

#### getSerialNumberSync

• **getSerialNumberSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getSerialNumberSync

___

#### getSystemAvailableFeatures

• **getSystemAvailableFeatures**: () => `Promise`\<`string`[]\>

##### Type declaration

▸ (): `Promise`\<`string`[]\>

###### Returns

`Promise`\<`string`[]\>

##### Inherited from

ExposedNativeMethods.getSystemAvailableFeatures

___

#### getSystemAvailableFeaturesSync

• **getSystemAvailableFeaturesSync**: () => `string`[]

##### Type declaration

▸ (): `string`[]

###### Returns

`string`[]

##### Inherited from

ExposedNativeMethods.getSystemAvailableFeaturesSync

___

#### getSystemName

• **getSystemName**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

___

#### getSystemVersion

• **getSystemVersion**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

___

#### getTags

• **getTags**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getTags

___

#### getTagsSync

• **getTagsSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getTagsSync

___

#### getTotalDiskCapacity

• **getTotalDiskCapacity**: () => `Promise`\<`number`\>

##### Type declaration

▸ (): `Promise`\<`number`\>

###### Returns

`Promise`\<`number`\>

##### Inherited from

ExposedNativeMethods.getTotalDiskCapacity

___

#### getTotalDiskCapacityOld

• **getTotalDiskCapacityOld**: () => `Promise`\<`number`\>

##### Type declaration

▸ (): `Promise`\<`number`\>

###### Returns

`Promise`\<`number`\>

##### Inherited from

ExposedNativeMethods.getTotalDiskCapacityOld

___

#### getTotalDiskCapacityOldSync

• **getTotalDiskCapacityOldSync**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

##### Inherited from

ExposedNativeMethods.getTotalDiskCapacityOldSync

___

#### getTotalDiskCapacitySync

• **getTotalDiskCapacitySync**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

##### Inherited from

ExposedNativeMethods.getTotalDiskCapacitySync

___

#### getTotalMemory

• **getTotalMemory**: () => `Promise`\<`number`\>

##### Type declaration

▸ (): `Promise`\<`number`\>

###### Returns

`Promise`\<`number`\>

##### Inherited from

ExposedNativeMethods.getTotalMemory

___

#### getTotalMemorySync

• **getTotalMemorySync**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

##### Inherited from

ExposedNativeMethods.getTotalMemorySync

___

#### getType

• **getType**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getType

___

#### getTypeSync

• **getTypeSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getTypeSync

___

#### getUniqueId

• **getUniqueId**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Overrides

ExposedNativeMethods.getUniqueId

___

#### getUniqueIdSync

• **getUniqueIdSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Overrides

ExposedNativeMethods.getUniqueIdSync

___

#### getUsedMemory

• **getUsedMemory**: () => `Promise`\<`number`\>

##### Type declaration

▸ (): `Promise`\<`number`\>

###### Returns

`Promise`\<`number`\>

##### Inherited from

ExposedNativeMethods.getUsedMemory

___

#### getUsedMemorySync

• **getUsedMemorySync**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

##### Inherited from

ExposedNativeMethods.getUsedMemorySync

___

#### getUserAgent

• **getUserAgent**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.getUserAgent

___

#### getUserAgentSync

• **getUserAgentSync**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

##### Inherited from

ExposedNativeMethods.getUserAgentSync

___

#### getVersion

• **getVersion**: () => `string`

##### Type declaration

▸ (): `string`

###### Returns

`string`

___

#### hasGms

• **hasGms**: () => `Promise`\<`boolean`\>

##### Type declaration

▸ (): `Promise`\<`boolean`\>

###### Returns

`Promise`\<`boolean`\>

##### Inherited from

ExposedNativeMethods.hasGms

___

#### hasGmsSync

• **hasGmsSync**: () => `boolean`

##### Type declaration

▸ (): `boolean`

###### Returns

`boolean`

##### Inherited from

ExposedNativeMethods.hasGmsSync

___

#### hasHms

• **hasHms**: () => `Promise`\<`boolean`\>

##### Type declaration

▸ (): `Promise`\<`boolean`\>

###### Returns

`Promise`\<`boolean`\>

##### Inherited from

ExposedNativeMethods.hasHms

___

#### hasHmsSync

• **hasHmsSync**: () => `boolean`

##### Type declaration

▸ (): `boolean`

###### Returns

`boolean`

##### Inherited from

ExposedNativeMethods.hasHmsSync

___

#### hasNotch

• **hasNotch**: () => `boolean`

##### Type declaration

▸ (): `boolean`

###### Returns

`boolean`

___

#### hasSystemFeature

• **hasSystemFeature**: (`feature`: `string`) => `Promise`\<`boolean`\>

##### Type declaration

▸ (`feature`): `Promise`\<`boolean`\>

###### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `string` |

###### Returns

`Promise`\<`boolean`\>

##### Overrides

ExposedNativeMethods.hasSystemFeature

___

#### hasSystemFeatureSync

• **hasSystemFeatureSync**: (`feature`: `string`) => `boolean`

##### Type declaration

▸ (`feature`): `boolean`

###### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `string` |

###### Returns

`boolean`

##### Overrides

ExposedNativeMethods.hasSystemFeatureSync

___

#### isAirplaneMode

• **isAirplaneMode**: () => `Promise`\<`boolean`\>

##### Type declaration

▸ (): `Promise`\<`boolean`\>

###### Returns

`Promise`\<`boolean`\>

##### Inherited from

ExposedNativeMethods.isAirplaneMode

___

#### isAirplaneModeSync

• **isAirplaneModeSync**: () => `boolean`

##### Type declaration

▸ (): `boolean`

###### Returns

`boolean`

##### Inherited from

ExposedNativeMethods.isAirplaneModeSync

___

#### isBatteryCharging

• **isBatteryCharging**: () => `Promise`\<`boolean`\>

##### Type declaration

▸ (): `Promise`\<`boolean`\>

###### Returns

`Promise`\<`boolean`\>

##### Inherited from

ExposedNativeMethods.isBatteryCharging

___

#### isBatteryChargingSync

• **isBatteryChargingSync**: () => `boolean`

##### Type declaration

▸ (): `boolean`

###### Returns

`boolean`

##### Inherited from

ExposedNativeMethods.isBatteryChargingSync

___

#### isCameraPresent

• **isCameraPresent**: () => `Promise`\<`boolean`\>

##### Type declaration

▸ (): `Promise`\<`boolean`\>

###### Returns

`Promise`\<`boolean`\>

##### Inherited from

ExposedNativeMethods.isCameraPresent

___

#### isCameraPresentSync

• **isCameraPresentSync**: () => `boolean`

##### Type declaration

▸ (): `boolean`

###### Returns

`boolean`

##### Inherited from

ExposedNativeMethods.isCameraPresentSync

___

#### isEmulator

• **isEmulator**: () => `Promise`\<`boolean`\>

##### Type declaration

▸ (): `Promise`\<`boolean`\>

###### Returns

`Promise`\<`boolean`\>

##### Inherited from

ExposedNativeMethods.isEmulator

___

#### isEmulatorSync

• **isEmulatorSync**: () => `boolean`

##### Type declaration

▸ (): `boolean`

###### Returns

`boolean`

##### Inherited from

ExposedNativeMethods.isEmulatorSync

___

#### isHeadphonesConnected

• **isHeadphonesConnected**: () => `Promise`\<`boolean`\>

##### Type declaration

▸ (): `Promise`\<`boolean`\>

###### Returns

`Promise`\<`boolean`\>

##### Inherited from

ExposedNativeMethods.isHeadphonesConnected

___

#### isHeadphonesConnectedSync

• **isHeadphonesConnectedSync**: () => `boolean`

##### Type declaration

▸ (): `boolean`

###### Returns

`boolean`

##### Inherited from

ExposedNativeMethods.isHeadphonesConnectedSync

___

#### isKeyboardConnected

• **isKeyboardConnected**: () => `Promise`\<`boolean`\>

##### Type declaration

▸ (): `Promise`\<`boolean`\>

###### Returns

`Promise`\<`boolean`\>

##### Inherited from

ExposedNativeMethods.isKeyboardConnected

___

#### isKeyboardConnectedSync

• **isKeyboardConnectedSync**: () => `boolean`

##### Type declaration

▸ (): `boolean`

###### Returns

`boolean`

##### Inherited from

ExposedNativeMethods.isKeyboardConnectedSync

___

#### isLandscape

• **isLandscape**: () => `Promise`\<`boolean`\>

##### Type declaration

▸ (): `Promise`\<`boolean`\>

###### Returns

`Promise`\<`boolean`\>

___

#### isLandscapeSync

• **isLandscapeSync**: () => `boolean`

##### Type declaration

▸ (): `boolean`

###### Returns

`boolean`

___

#### isLocationEnabled

• **isLocationEnabled**: () => `Promise`\<`boolean`\>

##### Type declaration

▸ (): `Promise`\<`boolean`\>

###### Returns

`Promise`\<`boolean`\>

##### Inherited from

ExposedNativeMethods.isLocationEnabled

___

#### isLocationEnabledSync

• **isLocationEnabledSync**: () => `boolean`

##### Type declaration

▸ (): `boolean`

###### Returns

`boolean`

##### Inherited from

ExposedNativeMethods.isLocationEnabledSync

___

#### isMouseConnected

• **isMouseConnected**: () => `Promise`\<`boolean`\>

##### Type declaration

▸ (): `Promise`\<`boolean`\>

###### Returns

`Promise`\<`boolean`\>

##### Inherited from

ExposedNativeMethods.isMouseConnected

___

#### isMouseConnectedSync

• **isMouseConnectedSync**: () => `boolean`

##### Type declaration

▸ (): `boolean`

###### Returns

`boolean`

##### Inherited from

ExposedNativeMethods.isMouseConnectedSync

___

#### isPinOrFingerprintSet

• **isPinOrFingerprintSet**: () => `Promise`\<`boolean`\>

##### Type declaration

▸ (): `Promise`\<`boolean`\>

###### Returns

`Promise`\<`boolean`\>

##### Inherited from

ExposedNativeMethods.isPinOrFingerprintSet

___

#### isPinOrFingerprintSetSync

• **isPinOrFingerprintSetSync**: () => `boolean`

##### Type declaration

▸ (): `boolean`

###### Returns

`boolean`

##### Inherited from

ExposedNativeMethods.isPinOrFingerprintSetSync

___

#### isTablet

• **isTablet**: () => `boolean`

##### Type declaration

▸ (): `boolean`

###### Returns

`boolean`

___

#### isTabletMode

• **isTabletMode**: () => `Promise`\<`boolean`\>

##### Type declaration

▸ (): `Promise`\<`boolean`\>

###### Returns

`Promise`\<`boolean`\>

##### Inherited from

ExposedNativeMethods.isTabletMode

___

#### supported32BitAbis

• **supported32BitAbis**: () => `Promise`\<`string`[]\>

##### Type declaration

▸ (): `Promise`\<`string`[]\>

###### Returns

`Promise`\<`string`[]\>

___

#### supported32BitAbisSync

• **supported32BitAbisSync**: () => `string`[]

##### Type declaration

▸ (): `string`[]

###### Returns

`string`[]

___

#### supported64BitAbis

• **supported64BitAbis**: () => `Promise`\<`string`[]\>

##### Type declaration

▸ (): `Promise`\<`string`[]\>

###### Returns

`Promise`\<`string`[]\>

___

#### supported64BitAbisSync

• **supported64BitAbisSync**: () => `string`[]

##### Type declaration

▸ (): `string`[]

###### Returns

`string`[]

___

#### supportedAbis

• **supportedAbis**: () => `Promise`\<`string`[]\>

##### Type declaration

▸ (): `Promise`\<`string`[]\>

###### Returns

`Promise`\<`string`[]\>

___

#### supportedAbisSync

• **supportedAbisSync**: () => `string`[]

##### Type declaration

▸ (): `string`[]

###### Returns

`string`[]

___

#### syncUniqueId

• **syncUniqueId**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

##### Inherited from

ExposedNativeMethods.syncUniqueId

___

#### useBatteryLevel

• **useBatteryLevel**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

___

#### useBatteryLevelIsLow

• **useBatteryLevelIsLow**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

___

#### useBrightness

• **useBrightness**: () => `number`

##### Type declaration

▸ (): `number`

###### Returns

`number`

___

#### useDeviceName

• **useDeviceName**: () => `AsyncHookResult`\<`string`\>

##### Type declaration

▸ (): `AsyncHookResult`\<`string`\>

###### Returns

`AsyncHookResult`\<`string`\>

___

#### useFirstInstallTime

• **useFirstInstallTime**: () => `AsyncHookResult`\<`number`\>

##### Type declaration

▸ (): `AsyncHookResult`\<`number`\>

###### Returns

`AsyncHookResult`\<`number`\>

___

#### useHasSystemFeature

• **useHasSystemFeature**: (`feature`: `string`) => `AsyncHookResult`\<`boolean`\>

##### Type declaration

▸ (`feature`): `AsyncHookResult`\<`boolean`\>

###### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `string` |

###### Returns

`AsyncHookResult`\<`boolean`\>

___

#### useIsEmulator

• **useIsEmulator**: () => `AsyncHookResult`\<`boolean`\>

##### Type declaration

▸ (): `AsyncHookResult`\<`boolean`\>

###### Returns

`AsyncHookResult`\<`boolean`\>

___

#### useIsHeadphonesConnected

• **useIsHeadphonesConnected**: () => `AsyncHookResult`\<`boolean`\>

##### Type declaration

▸ (): `AsyncHookResult`\<`boolean`\>

###### Returns

`AsyncHookResult`\<`boolean`\>

___

#### useManufacturer

• **useManufacturer**: () => `AsyncHookResult`\<`string`\>

##### Type declaration

▸ (): `AsyncHookResult`\<`string`\>

###### Returns

`AsyncHookResult`\<`string`\>

___

#### usePowerState

• **usePowerState**: () => `Partial`\<`PowerState`\>

##### Type declaration

▸ (): `Partial`\<`PowerState`\>

###### Returns

`Partial`\<`PowerState`\>



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

• **Clipboard**: [`Clipboard`](Clipboard)

___

#### DeviceInfo

• **DeviceInfo**: [`DeviceInfo`](DeviceInfo)

___

#### Linking

• **Linking**: [`RNLinking`](RNLinking)

___

#### NetInfo

• **NetInfo**: [`NetInfo`](NetInfo)

___

#### Orientation

• **Orientation**: typeof [`Orientation`](../#Orientation)

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
| `setBarStyle` | (`style`: [`StatusBarStyle`](#statusbarstyle), `animated?`: `boolean`) => `void` |

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

• **ToastAndroid**: [`ToastAndroidStatic`](ToastAndroidStatic)

___

#### Vibration

• **Vibration**: [`VibrationStatic`](VibrationStatic)

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



## Interface: NetInfo

### Properties

#### addEventListener

• **addEventListener**: (`listener`: `NetInfoChangeHandler`) => `NetInfoSubscription`

##### Type declaration

▸ (`listener`): `NetInfoSubscription`

###### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `NetInfoChangeHandler` |

###### Returns

`NetInfoSubscription`

___

#### configure

• **configure**: (`configuration`: `Partial`\<`NetInfoConfiguration`\>) => `void`

##### Type declaration

▸ (`configuration`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | `Partial`\<`NetInfoConfiguration`\> |

###### Returns

`void`

___

#### fetch

• **fetch**: (`requestedInterface?`: `string`) => `Promise`\<`NetInfoState`\>

##### Type declaration

▸ (`requestedInterface?`): `Promise`\<`NetInfoState`\>

###### Parameters

| Name | Type |
| :------ | :------ |
| `requestedInterface?` | `string` |

###### Returns

`Promise`\<`NetInfoState`\>

___

#### refresh

• **refresh**: () => `Promise`\<`NetInfoState`\>

##### Type declaration

▸ (): `Promise`\<`NetInfoState`\>

###### Returns

`Promise`\<`NetInfoState`\>

___

#### useNetInfo

• **useNetInfo**: (`configuration?`: `Partial`\<`NetInfoConfiguration`\>) => `NetInfoState`

##### Type declaration

▸ (`configuration?`): `NetInfoState`

###### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | `Partial`\<`NetInfoConfiguration`\> |

###### Returns

`NetInfoState`



## Interface: RNLinking

### Properties

#### canOpenURL

• **canOpenURL**: (`url`: `string`) => `Promise`\<`boolean`\>

##### Type declaration

▸ (`url`): `Promise`\<`boolean`\>

Determine whether or not an installed app can handle a given URL.
NOTE: For web URLs, the protocol ("http://", "https://") must be set accordingly!
NOTE: As of iOS 9, your app needs to provide the LSApplicationQueriesSchemes key inside Info.plist.

###### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

###### Returns

`Promise`\<`boolean`\>

___

#### getInitialURL

• **getInitialURL**: () => `Promise`\<`string`\>

##### Type declaration

▸ (): `Promise`\<`string`\>

If the app launch was triggered by an app link with, it will give the link url, otherwise it will give null
NOTE: To support deep linking on Android, refer http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents

###### Returns

`Promise`\<`string`\>

___

#### openSettings

• **openSettings**: () => `Promise`\<`void`\>

##### Type declaration

▸ (): `Promise`\<`void`\>

Open the Settings app and displays the app’s custom settings, if it has any.

###### Returns

`Promise`\<`void`\>

___

#### openURL

• **openURL**: (`url`: `string`) => `Promise`\<`any`\>

##### Type declaration

▸ (`url`): `Promise`\<`any`\>

Try to open the given url with any of the installed apps.
You can use other URLs, like a location (e.g. "geo:37.484847,-122.148386"), a contact, or any other URL that can be opened with the installed apps.
NOTE: This method will fail if the system doesn't know how to open the specified URL. If you're passing in a non-http(s) URL, it's best to check \{@code canOpenURL} first.
NOTE: For web URLs, the protocol ("http://", "https://") must be set accordingly!

###### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

###### Returns

`Promise`\<`any`\>

### Methods

#### sendIntent

▸ **sendIntent**(`action`, `extras?`): `Promise`\<`void`\>

Sends an Android Intent - a broad surface to express Android functions.  Useful for deep-linking to settings pages,
opening an SMS app with a message draft in place, and more.  See https://developer.android.com/reference/kotlin/android/content/Intent?hl=en

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `extras?` | \{ `key`: `string` ; `value`: `string` \| `number` \| `boolean`  }[] |

##### Returns

`Promise`\<`void`\>



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



## Interface: ToastAndroidStatic

This exposes the native ToastAndroid module as a JS module. This has a function 'show'
which takes the following parameters:

1. String message: A string with the text to toast
2. int duration: The duration of the toast. May be ToastAndroid.SHORT or ToastAndroid.LONG

There is also a function `showWithGravity` to specify the layout gravity. May be
ToastAndroid.TOP, ToastAndroid.BOTTOM, ToastAndroid.CENTER

### Properties

#### BOTTOM

• **BOTTOM**: `number`

___

#### CENTER

• **CENTER**: `number`

___

#### LONG

• **LONG**: `number`

___

#### SHORT

• **SHORT**: `number`

___

#### TOP

• **TOP**: `number`

___

#### show

• **show**: (`message`: `string`, `duration`: `number`) => `void`

##### Type declaration

▸ (`message`, `duration`): `void`

String message: A string with the text to toast
int duration: The duration of the toast.
May be ToastAndroid.SHORT or ToastAndroid.LONG

###### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `duration` | `number` |

###### Returns

`void`

___

#### showWithGravity

• **showWithGravity**: (`message`: `string`, `duration`: `number`, `gravity`: `number`) => `void`

##### Type declaration

▸ (`message`, `duration`, `gravity`): `void`

`gravity` may be ToastAndroid.TOP, ToastAndroid.BOTTOM, ToastAndroid.CENTER

###### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `duration` | `number` |
| `gravity` | `number` |

###### Returns

`void`

___

#### showWithGravityAndOffset

• **showWithGravityAndOffset**: (`message`: `string`, `duration`: `number`, `gravity`: `number`, `xOffset`: `number`, `yOffset`: `number`) => `void`

##### Type declaration

▸ (`message`, `duration`, `gravity`, `xOffset`, `yOffset`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `duration` | `number` |
| `gravity` | `number` |
| `xOffset` | `number` |
| `yOffset` | `number` |

###### Returns

`void`



## Interface: VibrationStatic

### Methods

#### cancel

▸ **cancel**(): `void`

Stop vibration

##### Returns

`void`

___

#### vibrate

▸ **vibrate**(`pattern?`, `repeat?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pattern?` | `number` \| `number`[] |
| `repeat?` | `boolean` |

##### Returns

`void`

# Modules



## Namespace: Orientation

### Functions

#### addOrientationListener

▸ **addOrientationListener**(`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`orientation`: `orientation`) => `void` |

##### Returns

`void`

___

#### addSpecificOrientationListener

▸ **addSpecificOrientationListener**(`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`specificOrientation`: `specificOrientation`) => `void` |

##### Returns

`void`

___

#### getInitialOrientation

▸ **getInitialOrientation**(): `orientation`

##### Returns

`orientation`

___

#### getOrientation

▸ **getOrientation**(`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`err`: `Error`, `orientation`: `orientation`) => `void` |

##### Returns

`void`

___

#### getSpecificOrientation

▸ **getSpecificOrientation**(`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`err`: `Error`, `orientation`: `specificOrientation`) => `void` |

##### Returns

`void`

___

#### lockToLandscape

▸ **lockToLandscape**(): `void`

##### Returns

`void`

___

#### lockToLandscapeLeft

▸ **lockToLandscapeLeft**(): `void`

##### Returns

`void`

___

#### lockToLandscapeRight

▸ **lockToLandscapeRight**(): `void`

##### Returns

`void`

___

#### lockToPortrait

▸ **lockToPortrait**(): `void`

##### Returns

`void`

___

#### removeOrientationListener

▸ **removeOrientationListener**(`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`orientation`: `orientation`) => `void` |

##### Returns

`void`

___

#### removeSpecificOrientationListener

▸ **removeSpecificOrientationListener**(`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`specificOrientation`: `specificOrientation`) => `void` |

##### Returns

`void`

___

#### unlockAllOrientations

▸ **unlockAllOrientations**(): `void`

##### Returns

`void`
