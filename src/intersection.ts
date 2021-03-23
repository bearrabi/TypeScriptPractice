export {};

type Pitcher1 = {
  throwingSpeed: number;  
};

type Batter1 = {
  battingAverage: number;  
};

const DaimajinSasaki: Pitcher1 = {
    throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
    battingAverage: 0.367
};

// Pitcher1とBatter1両方の要素を持つ型を作成する
// でもこれだと、要素の名前を間違えたり、行数が長くなったりする問題があるので普段はこの形は使わない
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

// これでPitcher1とBatter1の両方の要素を持つ型を作成できる
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.286
};