export {};

type Mojiretsu = string;

const fooString: string = 'Hello';

const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'bearrabi',
  age: 35  
};

type Profile = {
  name: string,
  age: number  
};

const example2: Profile = {
    name: 'Bearrabi',
    age: 43
};

// こうしておくと、example1の要素が変更された時に自動的にProfile2の要素も変更される
// 要素が変更になった場合、追従してくれると変更箇所が少なく、修正間違いも少なくなるのが嬉しい
type Profile2 = typeof example1;
