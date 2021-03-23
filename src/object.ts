export {};

// これだけだと誓約が甘い
let profile1: object = { name: 'Bearrabi'};

// ここで勝手に新しい要素を変更できてしまう
profile1 = { birtYear: 1985 };

console.log(profile1);

// これでobjectに含める要素を指定する方が良い
let profile2: {
    name: string
} = {name: 'Bearrabi'};

// 指定した要素と異なるのでここは値を代入しようとした時にエラーが分かる
//profile2 = { birthYear: 1985};