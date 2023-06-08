import { makeStarRating } from './star-rating';
import getGenresMap from './genres';
import commingSoon from '../../img/comingSoon.jpg';

function wrapPosterPath(poster_path) {
  return poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : commingSoon;
}

export async function makeMarkup(moviesList, mobileCount = 100) {
  const genresMap = await getGenresMap();
  return moviesList
    .map(
      (
        { id, poster_path, title, genre_ids, release_date, vote_average },
        i
      ) => {
        const hideMobile = i >= mobileCount ? 'hide-mobile' : '';
        const genresString = genre_ids
          .slice(0, 2)
          .map(id => genresMap[id])
          .join(', ');
        const year = release_date.substr(0, 4);

        return `
<li class="film-card ${hideMobile}">
  <a href="#" class="film-card-link" movie_id="${id}">
    <img class="film-card-img" src="${wrapPosterPath(
      poster_path
    )}" alt="${title}" loading="lazy" />
    <div class="darkening"></div>
    <div class="info">
        <p class="info-title">
          ${title}
        </p>
      <div class="genre-rating">
        <p class="info-genre">
          ${genresString !== '' ? genresString : 'Unknown'} |
          <span class="info-release-date"> ${
            year !== '' ? year : 'Unknown'
          }</span>
        </p>

        <div class="rating">
          ${makeStarRating(vote_average)}
        </div>
      </div>
    </div>
  </a>
</li>`;
      }
    )
    .join('');
}

export function createModalMarkup({
  title,
  poster_path,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
}) {
  return `<div class="modal-wrap">
      <button class="modal__close" type="button">
        <svg class="modal__svg" width="24" height="24">
          <use href=""></use>
        </svg>
      </button>
      <img src="${wrapPosterPath(
        poster_path
      )}" alt="${title}" class="modal__img" />
      <div class="modal__wrap">
        <h2 class="modal__title">${title}</h2>
        <ul class="modal-list">
          <li class="modal-list__item">
            <p class="modal-list__text">Vote / Votes</p>
            <div class="modal-list__wrap">
              <span class="modal-list__vote">${vote_average}</span>/
              <span class="modal-list__vote">${vote_count}</span>
            </div>
          </li>
          <li class="modal-list__item">
            <span class="modal-list__text">Popularity</span>
            <span class="modal-list__popularity">${popularity}</span>
          </li>
          <li class="modal-list__item">
            <span class="modal-list__text">Genre</span>
            <span class="modal-list__genres">${genres
              .map(({ name }) => name)
              .join(', ')}</span>
          </li>
        </ul>
        <p class="modal__about">About</p>
        <p class="modal__text">
          ${overview}
        </p>
        <button type="button" class="modal-btn">
          Add to my library
        </button>
      </div>
    </div>`;
}
