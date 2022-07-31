// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати
// і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення
// лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй
// значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = document.querySelector('#value');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

// console.log(counterValue);
// console.log(buttonDecrement);
// console.log(buttonIncrement);

const counter = {
  counterValue: 0,
  increment() {
    console.log('increment => this', this);
    this.counterValue += 1;
  },

  decrement() {
    console.log('decrement => this', this);
    this.counterValue -= 1;
  },
};

buttonDecrement.addEventListener('click', onButtonDecrementClick);

function onButtonDecrementClick() {
  counter.decrement();
  counterValue.textContent = counter.counterValue;
}

buttonIncrement.addEventListener('click', onButtomIncremetnClick);

function onButtomIncremetnClick() {
  counter.increment();
  counterValue.textContent = counter.counterValue;
}
