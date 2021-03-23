export {};

let bmi: (height: number, weight: number) => number = (
    height:number, 
    weight:number
): number => {
    // １行なら{}とreturnをとっても良い
    return weight / (height * height);
};

console.log(bmi(1.78, 86));