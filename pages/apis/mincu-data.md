

# mincu-data

## Classes

- [DataModule](#class-datamodule)

# Classes



## Class: DataModule

### Constructors

#### constructor

• **new DataModule**()

### Properties

#### storage

• **storage**: `MincuStorage`

### Accessors

#### appData

• `get` **appData**(): `AppData`

##### Returns

`AppData`

___

#### colorScheme

• `get` **colorScheme**(): `ColorSchemeName`

##### Returns

`ColorSchemeName`

___

#### colors

• `get` **colors**(): `any`

##### Returns

`any`

___

#### inset

• `get` **inset**(): `EdgeInsets`

##### Returns

`EdgeInsets`

___

#### isApp

• `get` **isApp**(): `boolean`

##### Returns

`boolean`

___

#### isDark

• `get` **isDark**(): `boolean`

##### Returns

`boolean`

___

#### userInfo

• `get` **userInfo**(): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `colorScheme` | `ColorSchemeName` |
| `colors` | `any` |
| `inset` | `EdgeInsets` |
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

### Methods

#### getVersion

▸ **getVersion**(): `Promise`\<`string`\>

##### Returns

`Promise`\<`string`\>

___

#### Instance

▸ `Static` **Instance**(): [`DataModule`](DataModule)

##### Returns

[`DataModule`](DataModule)
