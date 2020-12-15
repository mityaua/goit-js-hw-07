const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createList = arr => {
  arr.map(element => {
    const listItemRef = document.createElement('li');
    listItemRef.textContent = element;
    const ingredientsRef = document.querySelector('#ingredients');
    ingredientsRef.appendChild(listItemRef);
    return ingredientsRef;
  });
};

createList(ingredients);

// 1. Методом map перебираем массив инградиентов;
// 2. Создаем в переменной элемент списка;
// 3. Добавляем для каждого элемента текст - как еденицу перебора массива;
// 4. Записываем в переменную результат поиска нужного ID;
// 5. Возвращаем в DOM создаваеммый элемент списка (с привязкой к нужному ID).
