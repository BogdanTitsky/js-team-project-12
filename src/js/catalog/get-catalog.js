import { createMovieCardsMarkup } from '../reuseble/markups.js';
import { initPagination } from './pagination';
import { fillRatings } from '../reuseble/star-rating';
import { assignMovieDetailsModalListener } from '../modal/modal.js';
import { getTrendsMovie } from '../reuseble/tmdb-api.js';

const filmList = document.querySelector('.weelky-trends-list');

export async function renderMovieList(page) {
  try {
    const movies = await getTrendsMovie('week', 20, page);
    const markup = await createMovieCardsMarkup(movies);

    filmList.innerHTML = markup;
    fillRatings(filmList);
    assignMovieDetailsModalListener(filmList);
  } catch (error) {
    console.error('Помилка при рендерингу списку фільмів:', error);
  }
}

initPagination();
