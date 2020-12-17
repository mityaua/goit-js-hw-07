// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
const dataLength = document.querySelector('input[data-length]');

inputRef.addEventListener('focus', () => {
  inputRef.addEventListener('change', event => {
    if (event.target.value.length <= dataLength.dataset.length) {
      return inputRef.classList.add('valid');
    }
  });
});

inputRef.addEventListener('blur', () => {
  inputRef.addEventListener('change', event => {
    if (event.target.value.length > dataLength.dataset.length) {
      return inputRef.classList.replace('valid', 'invalid');
    }
  });
});
