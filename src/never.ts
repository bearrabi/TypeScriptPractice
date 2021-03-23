export {};

// エラー処理用のメソッドなので、呼び出し元まで戻ってこない
// そういった場合、neverで型指定する
function error(message: string): never{
    throw new Error(message);
}

try{
    let result = error('test')
    
    // ここの処理が実行されないことを確認するために記述してます。
    // errorメソッドがneverで指定しているため、ここの処理が実行されるのはおかしい。
    console.log({result});
    
}catch(error){
    console.log({error});
}