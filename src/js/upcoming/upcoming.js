import axios from 'axios';
import { getGenres } from '../reuseble/tmdb-api';

const containerUpcoming = document.querySelector('.js-upcoming');
// console.log(containerUpcoming);
const upcomingBtnRef = document.querySelector('#upcoming-btn');

async function getUpcoming() {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7`;

  try {
    const { data } = await axios.get(url);
    // console.log(data.results);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getGenresById(arr) {
  try {
    const allGenres = await getGenres();
    const movieGenres = allGenres
      .filter(g => arr.includes(g.id))
      .map(g => g.name)
      .join(', ');
    // console.log(movieGenres);
    return movieGenres;
  } catch (error) {
    console.log(error);
  }
}

getUpcoming().then(async ({ results }) => {
  const currentDate = new Date();
  // console.log(currentDate);
  const filmUpcoming = results.filter(
    film => currentDate < Date.parse(film.release_date)
  );
  if (filmUpcoming.length === 0) {
    console.log('No');
    // renderMarkupError();
    return;
  }
  const random = Math.floor(Math.random() * filmUpcoming.length);
  const currentGenres = filmUpcoming[random].genre_ids;
  const genresName = await getGenresById(currentGenres);

  const render = createUpcomingMarkup(filmUpcoming[random], genresName);
  // console.log(currentGenres);

  renderMarkup(render);

  console.log(filmUpcoming[random]);

  const key = 'key';
  upcomingBtnRef.addEventListener('click', e => {
    e.preventDefault();
    localStorage.setItem(key, JSON.stringify(filmUpcoming[random]));
    const storage = localStorage.getItem(key);
    console.log(storage);
  });
});

function toFormatDate(str) {
  const date = new Date(str);
  const formatDate = date.toLocaleString('uk', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
  // console.log(formatDate);
  return formatDate;
}

function createUpcomingMarkup(
  {
    backdrop_path,
    overview,
    popularity,
    release_date,
    title,
    vote_average,
    vote_count,
  },
  genre
) {
  return `
  <h2 class="upcoming-name">Upcoming this month</h2>
  <div class="upcoming-content">
      <img
        class="upcoming__img"
        src="https://image.tmdb.org/t/p/original/${backdrop_path}"
        alt="${title}"/>

      <div class="upcoming__wrapper">
        <h3 class="upcoming__title">${title}</h3>
        <div class="upcoming-thumb">
          <ul class="upcoming-list left">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Release date</p>
              <p class="upcoming-list__date">${toFormatDate(release_date)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Vote / Votes</p>
              <p class="upcoming-list__vote">
                <span class="vote"> ${vote_average.toFixed(
                  1
                )}</span> / <span class="vote">${vote_count}</span>
              </p>
            </li>
          </ul>

          <ul class="upcoming-list right">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Popularity</p>
              <p class="upcoming-list__popularity">${popularity.toFixed(1)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Genre</p>
              <p class="upcoming-list__genre">${genre}</p>
            </li>
          </ul>
        </div>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${overview}
        </p>
       
        
  </div>`;
}

function renderMarkup(markup) {
  containerUpcoming.innerHTML = markup;
}
