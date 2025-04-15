/* 1. Выбор элементов на странице */
/* 1.1 Выбор по id */
const h1 = document.getElementById("title");
console.log(h1);
/* 1.2 Выбор одного элемента по селектору */
const menu = document.querySelector(".menu li:last-child")
console.log(menu);
/* 1.3 выбор нескольких элементов по селектору */
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);