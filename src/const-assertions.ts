export {};

let name = 'bearrabi';

// こいつはconstで縛ってないから変数の値を変更することはできる
name = 'bear';

let nickname = 'rabi' as const;

// constで縛っているから書き換え不可
// nickname = 'bearrabi';

// オブジェクトの最後にconstをつけることで書き換え不可にできる
let profile = {
    name: 'bearrabi',
    height: 175
} as const;

// constはreadonlyなので、読み取りはできる
console.log(profile.name);
console.log(profile.height);

// constはreadonlyなので、書き換えはできない
// profile.name = 'name';