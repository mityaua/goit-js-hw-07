const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Функция для создания списка, которая принимает один инградиент, с телом, которое создает элемент списка, записывает в этот элемент имя инградиента, и возвращает элемент.
const createList = ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  return listItem;
};

// Переменна (список), в которой для массива инградиентов проводится иттерация и вызывается для каждого элемента массива функция для создания списка
const listItems = ingredients.map(ingredient => createList(ingredient));

// Переменная, которая находит в DOM нужный ID
const ingredientsRef = document.querySelector('#ingredients');

// Добавляет в DOM каждый элемент массива (с распылением)
ingredientsRef.append(...listItems);
