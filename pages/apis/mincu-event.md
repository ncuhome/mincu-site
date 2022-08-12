

# mincu-event

## Classes

- [EventModule](#class-eventmodule)

# Classes



## Class: EventModule

### Constructors

#### constructor

• **new EventModule**()

### Methods

#### login

▸ **login**(`username`, `password`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `password` | `string` |

##### Returns

`void`

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

___

#### setShareConfig

▸ **setShareConfig**(`config`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ShareConfig` |

##### Returns

`void`

___

#### showShare

▸ **showShare**(): `void`

##### Returns

`void`

___

#### Instance

▸ `Static` **Instance**(): [`EventModule`](EventModule)

##### Returns

[`EventModule`](EventModule)
