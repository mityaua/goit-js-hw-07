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

const createGallery = obj =>
  obj.map(picture => {
    const item = document.createElement('li');
    item.classList.add('js-gallery__link');
    const image = document.createElement('img');
    image.setAttribute('src', picture.url);
    image.setAttribute('alt', picture.alt);
    image.classList.add('js-gallery__img');
    item.append(image);
    const galleryRef = document.querySelector('#gallery');
    galleryRef.appendChild(item);
    galleryRef.classList.add('js-gallery');
    return galleryRef;
  });

createGallery(images);
