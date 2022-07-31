// <!-- Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто
// елементів li.item. Для кожного элемента li.item у спику ul#categories,
//     знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
//     і кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5 -->

// Варіант 1)
const listAll = document.querySelector('ul#categories');
// console.log(listAll);
// console.log(listAll.children);
// const listOfChildren = listAll.children;
// console.log(`Number of categories: ${listOfChildren.length}`);

// Ваірант 2)
// const itemsOfList = listAll.querySelectorAll('li.item');
const itemsOfList = document.querySelectorAll('ul#categories li.item');
// console.log(itemsOfList);
console.log(`Number of categories: ${itemsOfList.length}`);

// console.log(listAll);

const title = document.querySelectorAll('ul#categories li.item h2');
// console.log(title);
const item = document.querySelectorAll('ul#categories li.item ul');
// console.log(item);

// console.log(title[0].innerHTML);
// console.log(item[0].children.length);

console.log(`Category: ${title[0].innerHTML} 
Elements: ${item[0].children.length}`);

console.log(`Category: ${title[1].innerHTML} 
Elements: ${item[1].children.length}`);

console.log(`Category: ${title[2].innerHTML} 
Elements: ${item[2].children.length}`);

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });
