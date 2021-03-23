export {};

// こちらは自分で定義した型
type ObjectType = { 
    name: string; 
    age: number; 
}

// こちらはinterface
interface ObjectInterface {
    name: string;
    age: number;
}

// interfaceで型指定
let object: ObjectInterface = {
    name: 'bearrabi',
    age: 35
};