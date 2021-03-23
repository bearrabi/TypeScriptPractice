export {};

type DetailedProfile = {
    name: string;
    height: number;
    weight: number;
};

// ない要素は指定できない
// type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight' | 'height' | 'handSize'>;


// この２つの変数の持つ要素は同じになる
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type SmallProfile = Omit<DetailedProfile, 'height'>;

