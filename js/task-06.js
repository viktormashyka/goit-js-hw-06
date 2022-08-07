// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
//     Яка кількість смиволів повинна бути в інпуті, зазначається в його
// атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає
// зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які
// ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

inputEl.addEventListener('change', setOutput);

function setOutput() {
  const inputValue = inputEl.value;
  const lengthEl = inputEl.dataset.length;
  console.log(`Необхідна кількість символів -> ${lengthEl}`);
  console.log(`Введені символи -> ${inputValue}`);
  console.log(`Кількість введених символів -> ${inputValue.length}`);

  inputEl.classList.add('valid');

  if (Number(inputValue.length) !== Number(lengthEl)) {
    // inputEl.style.backgroundColor = 'red';
    console.log(`Кількість введених символів не дорівнює ${lengthEl}!
    Введіть ${lengthEl} симолів`);
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');

    return;
  } else {
    // inputEl.style.backgroundColor = 'green';
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
    console.log(`Вітаю! Ви ввели необхідну кількість симовлів`);
    return;
  }

  inputEl.value = '';
}
