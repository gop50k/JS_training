'use strict';

{
/*
document.body.textContent = "Hello!";
document.title = "Changed!";
*/

/*
// 要素の指定方法
document.getElementById("target").textContent = "Changed!";
document.querySelector("h1").textContent = "H1!";
document.querySelectorAll("li:nth-child(odd)").forEach(li => {
    li.textContent = "li!";
});


const ul = document.querySelector("ul");
console.log(ul.parentNode);
console.log(ul.children);
console.log(ul.children[0]);

for (let i = 0; i < ul.children.length; i++) {
    console.log(ul.children[i].textContent);
}


const h1 = document.querySelector("h1");
console.log(h1.title);
h1.title = "Changed!";

h1.style.color = "red";
h1.style.backgroundColor = "yellow";
*/

/*
// カスタムデータ属性
const h1 = document.querySelector("h1");
console.log(h1.dataset.appId);
h1.dataset.message = "this is custom message!";
*/

/*
// クラス属性の操作
const div = document.querySelector("div"); 

div.className = "box border-pink";
div.classList.add("border-pink");
div.classList.remove("box");
*/

/*
if (div.classList.contains("border-pink")) {
    div.classList.remove("border-pink");
} else {
    div.classList.add("border-pink");
}


// div.classList.toggle("border-pink");
*/

/*
// 要素の生成、コピー、削除
const h1 = document.createElement("h1");
h1.textContent = "Title";
document.body.appendChild(h1);

const p = document.createElement("p");
p.textContent = "Hello this is appendElement!";
document.body.appendChild(p);

const h2 = document.createElement("h2");
h2.textContent = "Sub Title";
document.body.insertBefore(h2, p);


const copy = p.cloneNode(true);
document.body.insertBefore(copy, h2);

document.body.removeChild(h2);
*/

/*
// テキスト入力部品の操作
const text = document.querySelector('input[type="text"]');
const textarea = document.querySelector('textarea');

console.log(text.value);
console.log(textarea.value);
text.focus();
text.select();
text.disabled = true;
*/

/*
//フォーム部品の操作
console.log(document.querySelectorAll('input[type="checkbox"]')[0].checked);
console.log(document.querySelectorAll('input[type="checkbox"]')[1].checked);
document.querySelectorAll('input[type="checkbox"]')[0].checked = true;

console.log(document.querySelectorAll('input[type="radio"]')[0].checked);
console.log(document.querySelectorAll('input[type="radio"]')[1].checked);
document.querySelectorAll('input[type="radio"]')[0].checked = true;

console.log(document.querySelectorAll('select > option')[0].selected);
console.log(document.querySelectorAll('select > option')[1].selected);
console.log(document.querySelectorAll('select > option')[2].selected);
document.querySelectorAll('select > option')[0].selected = true;
*/

/*
// イベントリスナー
const button = document.querySelector("button");
button.addEventListener("dblclick", () => {
    console.log("Clicked!");
});

const div = document.querySelector("div");
document.addEventListener("mousemove", e => {
    div.textContent = `${e.clientX}:${e.clientY}`
});
*/

const a = document.querySelector("a");
const span = document.querySelector("span");

a.addEventListener("click", e => {
    e.preventDefault();
    a.classList.add("hidden");
    span.classList.remove("hidden");
});














}