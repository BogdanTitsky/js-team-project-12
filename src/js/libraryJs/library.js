
// const libraryCard = document.querySelector('.library-card');
const libraryCard = document.querySelector('.libr-list');
const librList = document.querySelector('.libr-list');
const librCatch = document.querySelector('.libr-catch');
const key = 'upcomingFilms';
import { makeStarRating } from '../reuseble/star-rating';
import getGenresMap from '../reuseble/genres';


if (localStorage.length) {
  const storageLoc = localStorage.getItem(key);

  const parsed = JSON.parse(storageLoc);
  console.log(parsed);
  createUpcomingMarkup(parsed);
  
  if (parsed.length >= 1) {
    librCatch.classList.add('display');
  } 
} 

 

async function createUpcomingMarkup(parsed) {
  
    const genresMap = await getGenresMap()
    const markup = parsed
      .map(
        ({ poster_path, title, vote_average, release_date, genre_ids }) =>
          `
  <li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy" />
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
</li>`
      )
      .join('');
    librList.innerHTML = markup;
  }

//load more 
const loadmorebtn = document.querySelector('.loadmorebtn');

 loadmorebtn.addEventListener('click', loadPosts);

function loadPosts() {
   console.log(15)
   const posts = localStorage.getItem(key);
   const parsed = JSON.parse(posts);
   
   for (let i = 0; i < posts.length; i++) {
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
            )} | <span class="info-release-date"> ${release_date.substr(
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

    librList.insertAdjacentHTML =('beforeend',markup) ;
    }
   
 }
