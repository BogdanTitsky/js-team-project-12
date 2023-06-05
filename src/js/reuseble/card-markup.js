import { makeStarRating } from './star-rating';
import getGenresMap from './genres';

async function makeMarkup(arr) {
  const genresMap = await getGenresMap();
  return arr
    .map(({ poster_path, title, genre_ids, release_date, vote_average }) => {
      const imagePath = poster_path
        ? `https://image.tmdb.org/t/p/w300${poster_path}`
        : '../../img/comingSoon.jpg';

      return `
<li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="${imagePath}" alt="${title}" loading="lazy" />
    <div class="info">
      <div>
        <p class="info-title">
          ${title}
        </p>
        <p class="info-genre">
          ${genre_ids
            .map(id => genresMap[id])
            .join(
              ', '
            )} | <span class="info-release-date"> ${release_date}</span>
        </p>
      </div>
      <div class="rating">
        ${makeStarRating(vote_average)}
      </div>
    </div>
  </a>
</li>`;
    })
    .join('');
}

export { makeMarkup };