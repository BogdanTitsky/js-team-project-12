import axios from 'axios';

const filmList = document.querySelector('.catalog-films-list');
const filmMarkup = createGalleryMarkup(filmList);

const KEY = '183c3cacc9c38c09c14d38798ccfe9d7';

function makeMarkup(arr) {
  return arr
    .map(
      ({ webformatURL, tags, likes, views, comments, downloads }) => `
      <a href="${webformatURL}" class="photo-card">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes: ${likes}</b>
          </p>
          <p class="info-item">
            <b>Views: ${views}</b>
          </p>
          <p class="info-item">
            <b>Comments: ${comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads: ${downloads}</b>
          </p>
        </div>
      </a>`
    )
    .join('');
}
