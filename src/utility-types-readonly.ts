export {};

type Profile = {
    name: string;
    age: number;
};

const me: Profile = {
    name: 'bearrabi',
    age: 35
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
    name: 'Shigeru',
    age: 35
};

// readonlyなので、プロパティの変更はできない
// friend.age++;

type YomitoriSenyo<T> = {
    readonly [P in keyof T]: T[P];
};
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;