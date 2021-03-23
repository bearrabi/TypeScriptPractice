import axios from "axios";

export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function(response){
    
    // 全てのレスポンスを表示
    // console.log(response);
    
    // データのみを表示
    // anyは型が曖昧なのであまり望ましくない
    // let data: any = response.data;
   
    // 受け取ったデータの型を決めてやる
    interface Article {
        id: number;
        title: string;
        description: string;
    }
    
    // 自分で決めた型で受け取るように型を指定
    let data: Article[];
    data = response.data;
    console.log(data);
});