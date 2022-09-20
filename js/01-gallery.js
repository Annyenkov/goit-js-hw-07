import { galleryItems } from './gallery-items.js';
// Change code below this line

const cardContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
cardContainer.insertAdjacentHTML('beforeend', cardsMarkup);

const onCardContainerClick = (evt) => {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`, {
    onShow: (instance) => {
      document.addEventListener('keydown', closeModal);
      function closeModal(evt) {
        if (evt.key === "Escape") {
          instance.close();
          document.removeEventListener('keydown', closeModal);
	        }
      }
    }
    });
  instance.show();
};

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

cardContainer.addEventListener('click', onCardContainerClick);
document.addEventListener('keydown', onCardContainerClick);
