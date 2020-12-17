// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterRef = document.querySelector('#counter');
const counterValueRef = counterRef.querySelector('#value');
const decrementbtnRef = counterRef.querySelector('[data-action="decrement"]');
const incrementbtnRef = counterRef.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementbtnRef.addEventListener('click', decrement);
incrementbtnRef.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}

// 1. Находим в DOM счётчик по ID
// 2. Находим ID значения счётчика
// 3. Находим кнопку + 1
// 4. Находим кнопку - 1
// 5. Создаем переменную, которая содержит текущее значение счётчика
// 6. Добавляем на обе кнопки слушателя событий (при клике) и коллбек функцию
// 7. Создаем две функции, которые изменяют значение переменной на 1 и записывают переменную в textContent значения счётчика.
