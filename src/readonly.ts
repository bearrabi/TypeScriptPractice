export {};

class VisaCard{
    constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('bearrabi');
console.log(myVisaCard.owner);

// readonlyプロパティなので変更できない（OK）
// myVisaCard.owner = 'newBearrabi';