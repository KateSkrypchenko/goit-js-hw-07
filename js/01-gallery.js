import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.gallery'),
};

let instance;

const galleryList = onCreateGalleryCardItems(galleryItems);
refs.gallery.innerHTML = galleryList;

refs.gallery.addEventListener('click', onOpenModalCard);

function onCreateGalleryCardItems(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`
    )
    .join('');
}

function onOpenModalCard(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
  instance.show();
  document.addEventListener('keydown', onCloseModalCard);
}

function onCloseModalCard(event) {
  if (event.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', onCloseModalCard);
  }
}
