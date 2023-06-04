import { makeStarRating } from './star-rating';
import getGenresMap from './genres';

async function makeMarkup(arr) {
  const genresMap = await getGenresMap()
  return arr
    .map(
      ({ poster_path, title, genre_ids, release_date, vote_average }) => {
        return `
<li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy" />
    <div class="info">
      <p class="info-title">
        ${title}
      </p>
      <p class="info-genre">
        ${genre_ids.map((id) => genresMap[id]).join(', ')} | <span class="info-release-date"> ${release_date}</span>
      </p>
      <div class="rating">
        ${makeStarRating(vote_average)}
      </div>
    </div>
  </a>
</li>`;
      },
    )
    .join('');
}

export { makeMarkup };
