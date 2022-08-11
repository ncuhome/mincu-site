

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

返回当前所监听的客户端状态
如果要在其他项目中使用，建议直接复制

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
