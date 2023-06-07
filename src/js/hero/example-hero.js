import axios from 'axios';
import { fillRatings, makeStarRating } from '../reuseble/star-rating';
import openTrailerModal from '../hero/get-trailer';

const keyApi = `183c3cacc9c38c09c14d38798ccfe9d7`;
const contentBlock = document.querySelector('.hero-content');

async function getRandomFilm() {
  try {
    const info = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${keyApi}&language=en-US`
    );
    const informationMovie = info.data;
    const movieArray = informationMovie.results;
    return movieArray;
  } catch (error) {
    console.log('Помилка при рендерингу списку фільмів:', error);
  }
}

function loadHeroMarkup(movieArray) {
  const movie = movieArray[Math.floor(Math.random() * movieArray.length)];

  const heroMarkup = `
  <div>
           <h1 class="hero-title">${movie.title}</h1>
          <div class="rating">
          ${makeStarRating(movie.vote_average)}
          </div>
           <p class="hero-text">${movie.overview}</p>
           <button type="button" class="button watch-trailer" data-id=${
             movie.id
           }>Watch trailer</button>
           <button type="button" class="button-more-details">More details</button>
           </div>
           `;
  contentBlock.innerHTML = ``;
  contentBlock.insertAdjacentHTML(`beforeend`, heroMarkup);
  fillRatings(contentBlock);
  openTrailerModal();
}

// functions workflow

async function fetchAndRender() {
  const movieArray = await getRandomFilm();
  console.log(movieArray[0]);
  loadHeroMarkup(movieArray);
}
fetchAndRender();
