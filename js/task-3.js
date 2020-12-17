// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Третий вариант, согласно ТЗ
const galleryRef = document.querySelector('#gallery');
galleryRef.classList.add('js-gallery');

const createGallery = images.map(
  image =>
    (image = `<li class="js-gallery__link"><img src="${image.url}" alt="${image.alt}" class="js-gallery__img"></li>`),
);

gallery.insertAdjacentHTML('afterbegin', createGallery.join(''));

// Первый вариант, согласно ТЗ
// const galleryRef = document.querySelector('#gallery');
// galleryRef.classList.add('js-gallery');

// const createGallery = images.map(image => {
//   galleryRef.insertAdjacentHTML(
//     'afterbegin',
//     `<li class="js-gallery__link">
// <img class="js-gallery__img" src="${image.url}" alt="${image.alt}">
// </li>`,
//   );
// });

// Второй вариант, без insertAdjacentHTML
// // Функция для создания галлерии, которая принимает один слайд, с телом, которое создает элемент списка, добавляем ему класс, создает картинку, добавляет ей два атрибута и один класс. Тег с картинкой добавлет внутри элемента списка. Возвращает элемент списка.
// const createGallery = slide => {
//   const item = document.createElement('li');
//   item.classList.add('js-gallery__link');
//   const image = document.createElement('img');
//   image.setAttribute('src', slide.url);
//   image.setAttribute('alt', slide.alt);
//   image.classList.add('js-gallery__img');
//   item.append(image);
//   return item;
// };

// // Переменная для перебора массива обьектов images, которая возвращает вызов функции создания галлереи для каждого слайда.
// const imagesList = images.map(slide => createGallery(slide));

// // Переменная, которая находит нужный ID в DOM, а также добавляет класс.
// const galleryRef = document.querySelector('#gallery');
// galleryRef.classList.add('js-gallery');

// // Добавление в DOM каждого слайда через распыление из переменной imagesList
// galleryRef.append(...imagesList);
