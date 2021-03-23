export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

// 互換性のある型なので代入できる
fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// 互換性のない型では代入できない
// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';

// fooStringLiteralが文字列なので、これも互換性があると判定される
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
    age: number;
    name: string
}

class Person{
    constructor(public age: number, public name: string){}
}

let me: Animal;

// オブジェクトが生成できるかどうかは、互換性で判定しない
// 持っているプロパティやメソッドで判定する
me = new Person(43, 'bearrabi');