// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.Обов'язково використовуй метод
// document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listAllEl = document.querySelector('ul#ingredients');
console.log(listAllEl);

//**Варіант 1)**//
// const itemEl = document.createElement('li');
// const item = itemEl.classList.add('item');

// const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');

//**Варіант 2)**//
const createElements = element => {
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  return itemEl;
};

const markup = ingredients.map(ingredient => createElements(ingredient));

console.log(markup);
listAllEl.append(...markup);
