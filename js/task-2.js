const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.map(element => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = element;
  const ingredientsRef = document.querySelector('#ingredients');
  return ingredientsRef.appendChild(listItemRef);
});
