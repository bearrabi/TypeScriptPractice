export {};

// tsconfig.jsonでもnullableを許容できるが、全ての変数に対して許容してしまう。
// なので、以下のように特定の変数だけnullableにしたい場合はユニオン型で定義してやる
let profile: { name: string; age: number | null } = {
    name: 'bearrabi',
    age: null
};

// profile = null;