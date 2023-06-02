import axios from 'axios';

const filmList = document.querySelector('.catalog-films-list');
const apiKey = '183c3cacc9c38c09c14d38798ccfe9d7';

async function getMovieArray() {
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US`;

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

async function renderMovieList() {
  try {
    const movies = await getMovieArray();
    const markup = makeMarkup(movies);
    filmList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.error('Помилка при рендерингу списку фільмів:', error);
  }
}

function makeMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title, vote_average, release_date }) => `
<li>
  <a href="" class="photo-card">
    <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>${title} </b>
      </p>
      <p class="info-item">
        <b>${vote_average}</b>
      </p>
      <p class="info-item">
        <b>${release_date}</b>
      </p>
    </div>
  </a>
</li>`
    )
    .join('');
}

renderMovieList();
