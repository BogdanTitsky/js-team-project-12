import { getStoredMovies } from '../reuseble/local-storage.js';
import { fillRatings, makeStarRating } from '../reuseble/star-rating';
import { createMovieCardsMarkup } from '../reuseble/markups.js';
import { assignMovieDetailsModalListener } from '../modal/modal.js';
import getGenresMap from '../reuseble/genres.js';

const libraryContainer = document.querySelector('.libr-list');
const librCatch = document.querySelector('.libr-catch');

async function renderLibrary() {
  const movies = getStoredMovies()
  libraryContainer.insertAdjacentHTML('beforeend', await createMovieCardsMarkup(movies, 9));
  fillRatings(libraryContainer);
  assignMovieDetailsModalListener(libraryContainer);

  if (movies.length >= 1) {
    librCatch.classList.add('display');
  }
}

renderLibrary();

//load more
const loadmorebtn = document.querySelector('.loadmorebtn');

loadmorebtn.addEventListener('click', loadPosts);

function loadPosts() {
  console.log(15)
  const parsed = getStoredMovies();

  for (let i = 0; i < parsed.length; i++) {
    const genresMap = getGenresMap()
    const markup = parsed
      .map(
        ({ poster_path, title, vote_average, release_date, genre_ids }) =>
          `
  <li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy" />
    <div class="info">
    <div>
      <p class="info-title">
        ${title}
      </p>
      <p class="info-genre">
          ${genre_ids
            .slice(0, 2)
            .map(id => genresMap[id])
            .join(
              ', '
            )} | <span class="info-release-date"> ${release_date.substring(
            0,
            4
          )}</span>
        </p>
        </div>
      <div class="rating">
        ${makeStarRating(vote_average)}
      </div>

    </div>
  </a>
</li>`
      )
      .join('');

    libraryContainer.insertAdjacentHTML('beforeend', markup) ;
  }

}
