const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const li = document.querySelector('#ingredients');
const Elements = ingredients.map(Option => {
  const item = document.createElement('li');
  item.textContent = Option;
  item.classList.add = 'item';
  return item;
});

li.append(...Elements);
