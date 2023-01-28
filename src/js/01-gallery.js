// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const itemsMarkup = createItemMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', itemsMarkup);

function createItemMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
      <div class="gallery__item">
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

galleryEl.addEventListener('click', onItemClick);

function onItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryEl.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
}
