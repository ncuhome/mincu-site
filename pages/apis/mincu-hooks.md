

# mincu-hooks

## Functions

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

▸ **useNativeState**\<`T`\>(`key`): `States`[`T`]

返回 app 的状态

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `States` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `T` |

#### Returns

`States`[`T`]

___

### useSafeArea

▸ **useSafeArea**(): `EdgeInsets`

#### Returns

`EdgeInsets`
