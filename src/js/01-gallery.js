// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

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
            alt="${description}"
          />
        </a>
      </div>`
    )
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
