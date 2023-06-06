import { makeStarRating } from './star-rating';
import getGenresMap from './genres';
import commingSoon from '../../img/comingSoon.jpg';

async function makeMarkup(arr, mobileCount = 100) {
  const genresMap = await getGenresMap();
  return arr
    .map(({ poster_path, title, genre_ids, release_date, vote_average }, i) => {
      const imagePath = poster_path
        ? `https://image.tmdb.org/t/p/w300${poster_path}`
        : commingSoon;
      console.log(i);
      const hideMobile = i >= mobileCount ? 'hide-mobile' : '';

      return `
<li class="film-card ${hideMobile}">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="${imagePath}" alt="${title}" loading="lazy" />
    <div class="darkening"></div>
    <div class="info">
        <p class="info-title">
          ${title}
        </p>
      <div class="genre-rating">
        <p class="info-genre">
          ${genre_ids
            .slice(0, 2)
            .map(id => genresMap[id])
            .join(
              ', '
            )} | <span class="info-release-date"> ${release_date.substr(
        0,
        4
      )}</span>
        </p>

        <div class="rating">
          ${makeStarRating(vote_average)}
        </div>
      </div>
    </div>
  </a>
</li>`;
    })
    .join('');
}

export { makeMarkup };
