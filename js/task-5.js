// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  if (event.target.value === '') {
    return (spanRef.textContent = 'незнакомец');
  }
  return (spanRef.textContent = event.target.value);
});

// 1. Находим в DOM поле ввода по ID
// 2. Находим в DOM по ID текст, который будем менять
// 3. Добавляем слушатель события на поле ввода, с событием input, параметром event и записываем значение события в textContent span.
