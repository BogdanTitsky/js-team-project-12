import axios from 'axios';
import { fillRatings, makeStarRating } from '../reuseble/star-rating';
import openTrailerModal from '../hero/get-trailer';

const keyApi = `183c3cacc9c38c09c14d38798ccfe9d7`;
const contentBlock = document.querySelector('.hero');

async function getRandomFilm() {
  try {
    const info = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${keyApi}&language=en-US`
    );
    const informationMovie = info.data;
    return informationMovie.results;
  } catch (error) {
    console.log('Помилка при запиту списку фільмів:', error);
  }
}

function loadHeroMarkup(movieArray) {
    const movie = movieArray[Math.floor(Math.random() * movieArray.length)];
  const heroMarkup = `
  <div class="container hero-container uplifted" style = "background: linear-gradient(86.77deg,#111111 30.38%,rgba(17, 17, 17, 0) 65.61%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path});">
    <div class ="hero-content"> 
      <h1 class="hero-title">${movie.title}</h1>
        <div class="rating">
          ${makeStarRating(movie.vote_average)}
        </div>
          <p class="hero-text">${movie.overview}</p>
          <div class="buttons">
          <button type="button" class="button watch-trailer" data-id=${movie.id}>Watch trailer</button>
          <button type="button" class="button more-details">More details</button>
          </div>
    </div>
  <div>
           `;
 try {
  contentBlock.innerHTML = ``;
  contentBlock.insertAdjacentHTML(`beforeend`, heroMarkup);
  fillRatings(contentBlock);
  openTrailerModal();      
} catch (error) {
  console.log('Помилка при рендерингу секції:', error);
  }
}

// functions workflow

async function fetchAndRender(){
  try {
  const movieArray = await getRandomFilm();
 loadHeroMarkup(movieArray);
  } catch (error) {
    console.log('Помилка при завантаженні секції:', error);
  }
 
}
fetchAndRender();
