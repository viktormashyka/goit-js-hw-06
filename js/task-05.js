// Напиши скрипт, який під час набору тексту в інпуті input#name - input
//     (подія input), підставляє його поточне значення в span#name -
//     output.Якщо інпут порожній, у спані повинен відображатися
//         рядок "Anonymous".

// < input type = "text" id = "name-input" placeholder = "Please enter your name"/>
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const formInputName = document.querySelector('#name-input');
// console.log(formInputName);
const formOutputName = document.querySelector('#name-output');
// console.log(formOutputName);

formInputName.addEventListener('input', event => {
  if (formInputName.value !== '') {
    formOutputName.textContent = event.currentTarget.value;
    return;
  }

  formOutputName.textContent = 'Anonymous';
  return;
});
