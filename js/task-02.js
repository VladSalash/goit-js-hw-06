const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulRef = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient => {
  const list = document.createElement('li');
    list.classList.add('item');
    list.textContent = ingredient;

  return list;
})

console.log(ulRef)
ulRef.append(...ingredientsList);