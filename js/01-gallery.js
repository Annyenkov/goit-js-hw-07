import { galleryItems } from './gallery-items.js';
// Change code below this line
const cardContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
cardContainer.insertAdjacentHTML('beforeend', cardsMarkup)

cardContainer.addEventListener('click', onCardContainerClick)

function onCardContainerClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  console.log(evt.target.dataset.source);
}

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" onclick="return false"  href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
      </a>
    </div>
    `;
  })
    .join('');
}
console.log(galleryItems);
