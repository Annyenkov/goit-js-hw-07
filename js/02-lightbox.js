import { galleryItems } from './gallery-items.js';
// Change code below this line
const cardContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
cardContainer.insertAdjacentHTML('beforeend', cardsMarkup);
cardContainer.addEventListener('click', onCardContainerClick, {once : true});

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}" onclick="return false">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
  })
    .join('');
}

function onCardContainerClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  };
   console.dir(evt.target.alt)
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,

  });
};
console.log(galleryItems);
