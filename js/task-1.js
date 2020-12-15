const categoryRef = document.querySelectorAll('.item');
console.log(`В списке ${categoryRef.length} категории.`);

categoryRef.forEach(item => {
  const categoryNameRef = item.querySelector('h2');
  const categoryElementsRef = item.querySelectorAll('li');
  return console.log(
    `Категория: ${categoryNameRef.textContent}\r\nКоличество элементов: ${categoryElementsRef.length}`,
  );
});

// 1. Находим все DOM узлы по селектору класса item. В результате получаем Node массив;
// 2. Выводим шаблонную строку с длинной данного массива;

// 1. Используем метод forEach, где перебираем получаенный массив. На каждой иттерации получаем каждый элемент списка categories отдельно;
// 2. Находим в каждом элементе тег h2 и записываем в переменную;
// 3. Находим в каждом элементе тег li и записываем в переменную;
// 4. Возвращаем в консоль шаблонную строку, где для заголовка выводим имя, и для списка выводим длинну, что и будет количеством.
