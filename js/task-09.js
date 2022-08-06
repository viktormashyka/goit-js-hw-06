// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
// по кліку на button.change - color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const resultGetRandomHexColor = getRandomHexColor();

const bodyEl = document.querySelector('body');
const changeColorBtnEl = document.querySelector('button.change-color');
// console.log(changeColorBtnEl);
const spanColorEl = document.querySelector('span.color');
// console.log(spanColorEl);

changeColorBtnEl.addEventListener('click', setOutput);

function setOutput() {
  spanColorEl.textContent = `${getRandomHexColor()}`;
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;

  console.log(`Background color -> ${getRandomHexColor()}`);
}
