

# mincu-ui

## Classes

- [UIModule](classes/UIModule)

# Classes



## Class: UIModule

### Constructors

#### constructor

• **new UIModule**()

### Properties

#### backPress

• **backPress**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `bind` | (`cb`: () => `void`, `onResulst?`: (`success`: `boolean`) => `void`) => () => `void` |
| `unbind` | (`cb`: () => `void`) => `void` |

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

### Methods

#### exit

▸ **exit**(): `void`

##### Returns

`void`

___

#### handleShowHeader

▸ **handleShowHeader**(`value`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

##### Returns

`Promise`\<`boolean`\>

___

#### setBarStyle

▸ **setBarStyle**(`style`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `StatusBarStyle` |

##### Returns

`void`

___

#### toScreen

▸ **toScreen**(`config`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `NavConfig` |

##### Returns

`void`

___

#### Instance

▸ `Static` **Instance**(): [`UIModule`](UIModule)

##### Returns

[`UIModule`](UIModule)
