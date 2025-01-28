import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const seachFormEl = document.querySelector('.js-seach-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader-container');

iziToast.settings({
  position: 'topRight',
  theme: 'dark',
  backgroundColor: '#ef4040',
  timeout: 2000,
});

const lightbox = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 400,
});

const onSeachFormSubmit = evt => {
  evt.preventDefault();

  const searchQuary = evt.currentTarget.elements.user_query.value.trim();

  if (searchQuary === '') {
    loaderSwitcher(false);
    setTimeout(() => {
      iziToast.error({
        message: 'Please feel this field!',
      });
    }, 500);
    seachFormEl.reset();
    loaderSwitcher(true);
    return;
  }

  galleryVisibly(true);
  loaderSwitcher(false);

  fetchPhotosByQuery(searchQuary)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        galleryEl.innerHTML = '';
        seachFormEl.reset();
        return;
      }
      const galleryTemplate = data.hits
        .map(imgs => createGalleryCardTemplate(imgs))
        .join('');
      galleryEl.innerHTML = galleryTemplate;
      lightbox.refresh();
      galleryVisibly(true);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      seachFormEl.reset();
      loaderSwitcher(true);
    });
  galleryVisibly(false);
};

seachFormEl.addEventListener('submit', onSeachFormSubmit);

function loaderSwitcher(boolean) {
  if (boolean) {
    setTimeout(() => {
      loaderEl.classList.add('is-hidden');
    }, 500);
  } else {
    loaderEl.classList.remove('is-hidden');
  }
}

function galleryVisibly(boolean) {
  if (boolean) {
    galleryEl.classList.remove('is-visibly');
  } else {
    galleryEl.classList.add('is-visibly');
  }
}
