

const librList = document.querySelector('.libr-list');
const librCatch = document.querySelector('.libr-catch');
const key = 'upcomingFilms';
import { makeStarRating } from '../reuseble/star-rating';


if (localStorage.length ) {
  const storageLoc = localStorage.getItem(key);

  const parsed = JSON.parse(storageLoc);
  console.log(parsed);
createUpcomingMarkup(parsed);

  librCatch.style.display = 'none';
}



function createUpcomingMarkup(parsed) {
  const markup = parsed.map(
    ({ poster_path, title, vote_average, release_date }) =>
      `
  <li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy" />
    <div class="info">
      <p class="info-title">
        ${title}
      </p>
      <p class="info-item">
        ${release_date}
      </p>
      <p class="info-item">
        ${makeStarRating(vote_average)}
      </p>
     
    </div>
  </a>
</li>`
  )
  .join('');
  librList.innerHTML = markup;
}

