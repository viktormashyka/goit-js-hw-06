// Напиши скрипт, який реагує на зміну значення input#font - size - control
//     (подія input) і змінює інлайн - стиль span#text, оновлюючи
//     властивість font - size.В результаті, перетягуючи повзунок, буде
//     змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const fontSizeEl = document.querySelector('input#font-size-control');
const fontTextEl = document.querySelector('#text');
// console.log(fontSizeEl);
// console.log(fontSizeEl.value);
// console.log(fontTextEl);

fontSizeEl.addEventListener('change', setOuput);

function setOuput() {
  const fontSizeValue = fontSizeEl.value;
  console.log(`Встановлено розмір шрифту -> ${fontSizeValue}px!`);
  fontTextEl.style.fontSize = `${fontSizeValue}px`;
}
