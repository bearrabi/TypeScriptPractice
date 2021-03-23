export {};

// これでも不定の値を指定できるが、全部の変数に対して?をつけるのは現実的ではない
// let profile: { name?: string, age?: number } = {};

// index signatureで不定の値を指定する
// let profile: {[index: string]: string | number} = {};

interface Profile {
    name: string
    underTwenty: boolean;
    [index: string]: string | number | boolean;
}

let profile: Profile = {name: 'bearrabi', underTwenty: false};

profile.name = 'bearrabi';
profile.age = 35;
profile.nationality = 'Japan';