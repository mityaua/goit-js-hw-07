// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');

const changeFontSize = () => {
  spanTextRef.style.fontSize = `${Number(inputRef.value)}px`;
};

inputRef.addEventListener('input', changeFontSize);

// 1. Находим в DOM input по ID
// 2. Находим в DOM нужный span по ID
// 3. Создаем функцию, которая будет присваивать для текста в span размер в пикселях, который зависит от текущего значенения input
// 4. Добавляем слушателя событий на input, с коллбек функцией
