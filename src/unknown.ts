export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// console.log(typeof numberUnknown);

// 型指定のエラーを回避するためにこのような書き方もある
// でも、型指定を回避するのは極力やめた方が良いが、どうしても仕方ない時はこのように書ける。
if(typeof numberUnknown === 'number'){
    let sumUnknown = numberUnknown + 10; 
}
// ここはnumberUnknownがunknownで型指定してるのでアンコメントするとコンパイルエラーになる
//let sumUnknown = numberUnknown + 10;