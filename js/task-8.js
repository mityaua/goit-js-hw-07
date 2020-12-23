// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// Находим элементы в DOM
const formRef = document.querySelector('#controls');
const inputRef = formRef.querySelector('input');
const renderBtnRef = formRef.querySelector('button[data-action="render"]');
const destroyBtnRef = formRef.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

// Добавляем слушателей событий
renderBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

// Функция, которая в цикле создаёт дивы с привязкой к значению из инпута (которое приведено в число)
function createBoxes(amount) {
  let divSize = 30;
  amount = inputRef.valueAsNumber;

  for (let i = 0; i < amount; i += 1) { // Другой перебирающий метод?
    divSize += 10;
    const divItem = document.createElement('div');
    divItem.style.width = `${divSize - 10}px`; // Бить по рукам за такое
    divItem.style.height = `${divSize - 10}px`; // Бить по рукам за такое
    divItem.style.backgroundColor = randomColor();
    boxesRef.append(divItem);
  }
}

// Функция для удаления всего содержания блока
function destroyBoxes() {
  const childBoxes = boxesRef.querySelectorAll('div');
  childBoxes.forEach(element => {
    element.outerHTML = null;
  });
}

// Функция-генератор случайного цвета
function randomColor() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return (
    'rgba(' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    r().toFixed(1) +
    ')'
  );
}
