export {};

namespace Japanese {
    export namespace Tokyo {
        // 外部の名前空間から参照するにはexportが必要
        export class Person {
            constructor(public name: string) {
            }
        }
    }
    export namespace Osaka {
        // 外部の名前空間から参照するにはexportが必要
        export class Person {
            constructor(public name: string) {
            }
        }
    }
}
namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) {
        }
    }
}


const me = new Japanese.Tokyo.Person('bearrabi');
console.log(me.name);

const you = new Japanese.Osaka.Person('rabbit');
console.log(you.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);