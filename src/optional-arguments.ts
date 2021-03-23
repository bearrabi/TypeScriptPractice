export {};

let bmi: (height: number, weight: number, printable?: boolean) => number =
    (
        height: number,
        weight: number,
        printable?: boolean
    ): number => {

        const bmi: number = weight / (height * height);
        if (printable) {
            console.log({bmi});
        }
        return bmi;
    }

bmi(1.75, 94, true);
// bmi(身長, 体重, console.logで出力するかどうか)
// 第三引数はtrueの時のみログ出力する、デフォルトはfalseとする