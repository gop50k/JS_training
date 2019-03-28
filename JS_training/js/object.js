'use strict';

{
// 配列
const scores = [80, 90, 40]
console.log(scores[1]);
scores[1] = 100
console.log(scores[1]);
console.log(scores.length);

// オブジェクト
const player = {
    name: "tanaka",
    score: 32,
};

console.log(player);

// オブジェクトのプロパティの表示
console.log(player.name);

// オブジェクトの書き換え
player.score = 100;
console.log(player.score);

// オブジェクトの追加
player.email = "tanaka@gmail.com";
console.log(player);

// オブジェクトの削除
delete player.email;
console.log(player);

    // クラス
    class Player{
        constructor(name, score){
            this.name = name;
            this.score = score;
    }

    // オブジェクトの情報を閲覧するメソッド 
    showInfo(){
        console.log(`name: ${this.name} score: ${this.score}`);
    }

    // static インスタンス化不要で使える。
    static showVersion(){
        console.log("Player class ver 1.0");
    }
}

    // 継承
    class SoccerPlayer extends Player {
        constructor(name, score, number){
            super(name, score);
            this.number = number;
        }
        kick(){
            console.log("GOOOAAAAL!!");
        }
    }

/*
// クラス　テスト表示
const yamada = new Player("yamada", 22);
const takada = new Player("takada", 90);

console.log(yamada.name);

yamada.showInfo();
takada.showInfo();

Player.showVersion();
*/

/*
// 継承　テスト表示
const tsubasa = new SoccerPlayer("tsubasa", 99, 10);
tsubasa.kick();
console.log(tsubasa.number);
tsubasa.showInfo();
*/


/*
// 配列の操作
const a = [1, 10, 100];

// add
// 配列の先頭に追加
a.unshift(2);
// 配列の末尾に追加
a.push(3, 5);
console.log(a);

// remove
// 配列の先頭を削除
a.shift(2);
// 配列の末尾を削除
a.pop(3, 5);
console.log(a);

// 配列の中の要素を操作
const removed = a.splice(3, 1, 1000);
console.log(a);
console.log(removed);
*/

/* 
JSにおける便利メソッド
// forEach
const a = [1, 5, 10, 100];

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

a.forEach((element, index) => {
    console.log(`${index}: ${element}`);
});

// map　配列の各要素に関数を呼び出し、その結果で新たな配列を作成
const b = a.map(element => {
    return element * 2;
});

console.log(b);

// filter 配列の中から条件に合う物だけ抽出
const c = a.filter(element => {
    return element % 2 === 0;
})

console.log(c);
*/

/*
// オブジェクトの操作
const o = {
    a: 1,
    b: 2,
};

console.log(Object.keys(o));
console.log(Object.values(o));
console.log(Object.entries(o));

Object.keys(o).forEach( key => {
    console.log(`${key}: ${o[key]}`);
});
*/

/*
// スプレッド演算子
const a = [10, 20];

const b = [1, 2, ...a];
console.log(b);

const sum = (a, b) => a + b;
console.log(sum(...a));

const o1 = {
    a: 1,
    c: 3,
    z: 99,
};

const o2 = {
    ...o1,
    b: 2,
};

console.log(o2);
*/

/*
// 分割代入
const numbers = [1, 2, 3, 8];
const [a, b,...rest] = numbers;
console.log(a);
console.log(b);
console.log(rest);

const gameplayer = {
    name: "oda",
    score: 22,
    hp: 90,
    mp: 10,
};

const {name, score, ...points} = gameplayer;
console.log(name);
console.log(score);
console.log(points);
*/

/*
// 文字列の操作
const str = "hello";

console.log(str.length);
console.log(str.substring(2, 4));
console.log(str[1]);
*/

/*
// Mathオブジェクト
console.log(Math.PI);
console.log(Math.floor(Math.random() * 6 + 1));
*/

/*
// Dateオブジェクト
const d = new Date();
console.log(d);

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d. getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

console.log(d.getTime());

const day = new Date(2018, 11);
day.setHours(10, 20, 30);
day.setDate(39);
console.log(day);
*/

/*
// ウインドウオブジェクト
window.alert("hello");
alert("hello");

const answer =  confirm("Are you sure?");
console.log(answer);
*/

/*
// setInterval
let i = 0;
const showTime = () => {
    console.log(new Date());
    i++;
    if (i > 2) {
        console.log("BOMMMMMB~");
        clearInterval(timerID);
    }
};

let timerID = setInterval(showTime, 1000);
console.log(setInterval);
*/

/*
// setTimeout
const showTime = () => {
    console.log(new Date());
};

setTimeout(showTime, 1000);
*/

// エラーハンドリング
// const a = "hello";
const a = 1;

try {
console.log(a.toUpperCase());
} catch (e) {
    console.log(e.message);
}
console.log("Finish!");

}
