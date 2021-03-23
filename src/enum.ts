export {};

enum Months {
    January = 1,
    Feburary,
    March,
    April,
    May,
    Jun,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log(Months.January);
console.log(Months.Feburary);
console.log(Months.December);


enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEEN = '#008000',
    BLUE = '#0000FF',
    BLACK = '#000000'
}

let green = COLORS.GREEEN;
console.log({green});

// ここで新たに要素を追加することもできる
enum COLORS{
    YELLOW= '#FFFF00'
}
let yellow = COLORS.YELLOW;
console.log({yellow});