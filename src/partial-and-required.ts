export {};

type Profile = {
    name: string;
    age: number;
    zipCode: number;
};

// 元のタイプを引き継ぎながら、全ての変数をオプショナルにする
type PartialType = Partial<Profile>;


type Profile2 = {
    name: string;
    age?: number;
    zipCode: number;
}

// 元のタイプを引き継ぎながら、全ての変数を必須にする
type RequiredType = Required<Profile2>