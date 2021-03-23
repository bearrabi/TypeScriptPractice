export {};

let name: any = 'Bearrabi';

/** 様々なタイプアサーション*/
// let length = (name as string).length;
// let length = (<string>name).length;  // こいつはreactのjsxとバッティングするので非推奨。
// let length: number = name.length;
let length = name.length as number;

console.log(length);