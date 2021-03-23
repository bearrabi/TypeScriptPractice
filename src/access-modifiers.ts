export {};

class Person {
    public name: string;
    protected age: number;
    protected nationality: string;

    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    public profile(): string {
        return `name: ${this.name}, age: ${this.age}`;
    }
}

class Android extends Person {
    constructor(name: string, age: number, nationality: string){
        super(name, age, nationality);
    }
    
    profile(): string{
        return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`; 
    }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.name);
// console.log(taro.age);

console.log(taro.profile());