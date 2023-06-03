import axios from 'axios';

const containerUpcoming = document.querySelector('.js-upcoming');
// console.log(containerUpcoming);

async function getUpcoming() {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7`;
  return await axios
    .get(url)
    .then(({ data }) => {
      //   console.log(data.results);
      return data;
    })
    .catch(error => console.error(error));
}

getUpcoming().then(({ results }) => {
  const currentDate = new Date();
  // console.log(currentDate);
  const filmUpcoming = results.filter(
    film => currentDate < Date.parse(film.release_date)
  );
  if (filmUpcoming.length === 0) {
    console.log('Error');
    return;
  }
  const random = Math.floor(Math.random() * filmUpcoming.length);
  const render = createUpcomingMarkup(filmUpcoming[random]);
  renderMarkup(render);
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

function createUpcomingMarkup({
  backdrop_path,
  genre_ids,
  overview,
  popularity,
  release_date,
  title,
  vote_average,
  vote_count,
}) {
  return `
  <h2>Upcoming</h2>
      <img
        class="upcoming__img"
        src="https://image.tmdb.org/t/p/original/${backdrop_path}"
        alt="${title}"/>

      <div class="upcoming__wrapper">
        <h3 class="upcoming__title">${title}</h3>

          <ul class="upcoming-list">
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
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Popularity</p>
              <p class="upcoming-list__pop">${popularity.toFixed(1)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Genre</p>
              <p class="upcoming-list__genre">${genre_ids}</p>
            </li>
          </ul>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${overview}
        </p>
  <button type="button" class="upcoming__btn">
  Add to my library
</button>`;
}

function renderMarkup(markup) {
  containerUpcoming.innerHTML = markup;
}
