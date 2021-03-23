export {};

class Person{
    /**
     * 
     * @param name
     * @param age
     */
    constructor(
        public name: string, 
        protected age: number
    ) {}
}

const me = new Person('bearrabi', 35);
console.log(me);