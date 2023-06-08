import { fillRatings } from '../reuseble/star-rating';
import openTrailerModal from '../hero/get-trailer';
import { getTrendsMovie } from '../reuseble/tmdb-api.js';
import { assignMovieDetailsModalListener } from '../modal/modal.js';
import { createHeroMarkup } from '../reuseble/markups.js';

const contentBlock = document.querySelector('.hero');

async function renderHero() {
  try {
    const movies = await getTrendsMovie("day", 20);
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    contentBlock.innerHTML = createHeroMarkup(randomMovie);
    fillRatings(contentBlock);
    openTrailerModal();
    assignMovieDetailsModalListener(contentBlock)
  } catch (error) {
    console.log('Помилка при завантаженні секції:', error);
  }
}

renderHero();
