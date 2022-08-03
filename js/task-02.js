const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulRef = document.querySelector('#ingredients');

const ingredientsList = ingredients.forEach(ingredient => {

  const list = document.createElement('li');
  list.classList.add('item');
  ulRef.append(list);
  list.textContent = ingredient;



})
console.log(ulRef)