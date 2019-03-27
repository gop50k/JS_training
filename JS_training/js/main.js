'use strict';

// 数値、文字列
console.log("Hello World! from main.js");
console.log('it\'s me!');
console.log("hell\no worl\td!");
console.log("hello" + " world!");

console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(12 / 3);
console.log(10 % 3);
console.log(10 ** 3);

console.log(10 + 2 * 3);
console.log((10 + 2) * 3);

// 定数、変数
// const price = 150;
let price = 150;

console.log(price * 140);
console.log(price * 160);

price = 200;

console.log(price * 140);
console.log(price * 160);

price = price + 100;
console.log(price);

price += 100;
console.log(price);

price ++;
console.log(price);

// typeof は値の型を調べる。
console.log(typeof "hello");
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); //object

// JSはコーテーションで囲んだ数値のような文字列も計算できてしまう。(+は例外)
console.log("5" - 3);
console.log('5' * 3);
console.log("5" + 3);
// parseIntで文字列の5を10進数に変換する
console.log(parseInt('5', 10) + 3);
console.log(parseInt('hello', 10) + 3);// Nan

// 条件分岐
const score = 70;

if (score >= 80) {
    console.log("Great!");
} else if (score >= 60) {
    console.log("Good!");
} else {
    console.log("OK!");
}

// 条件分岐の短縮表現
// score >= 80　? console.log("Great!") : console.log("OK!")

// 論理演算子
const name = "tanaka";
if (score >= 70 && name === "tanaka") {
    console.log("Great tanaka!");
}

// Switch文で信号機を表現
const signal = 'blue';
switch (signal) {
    case 'red':
    console.log("stop!");
    break;

    case 'yellow':
    console.log("caution!");
    break;

    case 'blue':
    case 'green':
    console.log("go!");
    break;

    default:
    console.log("wrong signal!");
    break;
}

// ループ処理
// for
for (let i = 1; i <= 10; i++) {
    //console.log(i + "hello")
    // テンプレートリテラル
    console.log(`${i} hello`)
}

// while
let hp = 200;

while (hp > 0) {
    console.log(`${hp} HP left!`);
    hp -= 15;
}

// continue,break
for (let i = 1; i <= 10; i++){
    if (i === 3){
    // continue;
    break;
    }
    console.log(i);
}

// 関数
function showAd(massage = "AD") {
    console.log("-------");
    console.log(`-- ${massage} --`);
    console.log("-------");
}

showAd("Header AD");
console.log("Tom is Great!");
console.log("Bob is Great!");
showAd("AD");
console.log("Steav is Great!");
showAd("Footer AD");
console.log("Apple is Great!");

// retrun
const sum = function (a, b, c) {
    return a + b + c;
}

const total = sum(1,2,3) + sum(4,5,6);
console.log(total);

// アロー関数
const double = a => a * 2;

console.log(double(100));
