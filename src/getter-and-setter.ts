export {};

//  * owner
//      * 所有者
//      * 初期化時に設定できる
//      * 途中で変更できない
//      * 参照できる

//  * secretNumber
//      * 個人番号
//      * 初期化時に設定できる
//      * 途中で変更できる
//      * 参照できない

class MyNumberCard{
    private _owner: string;
    private _secretNumber: number;
    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    /**
     * getter
     */
    get owner(){
        return this._owner;
    }

    /**
     * setter
     * @param secretNumber
     */
    set secretNumber(secretNumber: number){
        this._secretNumber = secretNumber;
    }

    /**
     * setter確認用メソッド
     */
    debugPrint(){
        return `secretNumber: ${this._secretNumber}`;
    }
}

let card = new MyNumberCard('bearrabi', 12345);
console.log(card.owner);
// card.owner = 'newBearrabi';
card.secretNumber = 23456;
// console.log(card.debugPrint());