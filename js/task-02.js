// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.Обов'язково використовуй метод
// document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listAllEl = document.querySelector('ul#ingredients');
console.log(listAllEl);

const itemEl = document.createElement('li');
const item = itemEl.classList.add('item');

const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');

// const markup = ingredients
//   .map(ingredient => {
//     const itemEl = document.createElement('li');
//     const item = itemEl.classList.add('item');
//     `<li class="item">${ingredient}</li>`;
//   })
//   .join('');

console.log(markup);
listAllEl.innerHTML = markup;
