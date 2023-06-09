import { makeStarRating } from './star-rating';
import getGenresMap from './genres';
import commingSoon from '../../img/comingSoon.jpg';

function wrapPosterPath(poster_path) {
  return poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : commingSoon;
}

function extractGenresNames(genre_ids, genres, genresMap) {
  if (genres === undefined) {
    return genre_ids.slice(0, 2).map(id => genresMap[id]);
  } else {
    return genres.slice(0, 2).map(({ name }) => name);
  }
}

export async function createMovieCardsMarkup(moviesList, mobileCount = 100) {
  const genresMap = await getGenresMap();
  return moviesList
    .map(
      (
        {
          id,
          poster_path,
          title,
          genre_ids,
          genres,
          release_date,
          vote_average,
        },
        i
      ) => {
        const hideMobile = i >= mobileCount ? 'hide-mobile' : '';
        const genresString = extractGenresNames(
          genre_ids,
          genres,
          genresMap
        ).join(', ');
        const year = release_date.substring(0, 4);

        return `
<li class="film-card ${hideMobile}">
  <a href="#" class="film-card-link" data-id="${id}">
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

export function createMoveiDetailsMarkup({
  title,
  poster_path,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
}) {
  return `
  <div class="modal-wrap">

      <button class="modal__close" type="button">&#10005
      </button>
      <div class="modal-display">
      <img src="${wrapPosterPath(
        poster_path
      )}" alt="${title}" class="modal__img" />
      </div>
      <div class="modal__wrap">
        <h2 class="modal__title">${title}</h2>
        <ul class="modal-list">
          <li class="modal-list__item">
            <p class="modal-list__text">Vote / Votes</p>
            <div class="modal-list__wrap">
              <span class="modal-list__vote">${vote_average.toFixed(1)}</span> /
              <span class="modal-list__vote">${vote_count}</span>
            </div>
          </li>
          <li class="modal-list__item">
            <span class="modal-list__text">Popularity</span>
            <span class="modal-list__popularity">${popularity.toFixed(1)}</span>
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
        <button type="button" class="modal-btn remove-btn">
    Add to my library
  </button>
      </div>
    </div>`;
}

export function createHeroMarkup(movie) {
  return `
  <div class="hero-section-preview" style = "background: linear-gradient(86.47deg,#111111 41.63%,rgba(17,17,17,0) 86.86%), url(https://image.tmdb.org/t/p/original${
    movie.backdrop_path
  });">
  <div class="container hero-container uplifted">
    <div class ="hero-content">
      <h1 class="hero-title">${movie.title}</h1>
        <div class="rating">
          ${makeStarRating(movie.vote_average)}
        </div>
          <p class="hero-text">${movie.overview}</p>
          <div class="buttons">
          <button type="button" class="button watch-trailer" data-id=${
            movie.id
          }>Watch trailer</button>
          <button type="button" class="button more-details film-card-link" data-id=${
            movie.id
          }>More details</button>
          </div>
    </div>
  <div>
  </div>
           `;
}
