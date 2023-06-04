import axios from 'axios';
import { makeMarkup } from '../reuseble/card-markup';
import { initPagination } from './pagination';


const filmList = document.querySelector('.weelky-trends-list');
const apiKey = '183c3cacc9c38c09c14d38798ccfe9d7';

async function getMovieArray(page) {
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US&page=${page}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    const movies = data.results;

    return movies;
  } catch (error) {
    console.error('Помилка отримання масиву фільмів:', error);
    return [];
  }
}

export async function renderMovieList(page) {
  try {
    const movies = await getMovieArray(page);
    const markup = makeMarkup(movies);
    filmList.innerHTML = markup;
  } catch (error) {
    console.error('Помилка при рендерингу списку фільмів:', error);
  }
}

initPagination();