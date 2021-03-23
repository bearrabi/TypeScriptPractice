export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'bear';
    static lastName: string = 'rabi';
    
    static work(){
        return `Hey, student! I am ${this.firstName} ${this.lastName}`;
    }
}

// 動的メンバーであればこれでアクセスできる
//let me = new Me();
//console.log(me.isProgrammer);

// 静的メンバーであればこれでアクセスできる
console.log(Me.isProgrammer);
console.log(Me.work());