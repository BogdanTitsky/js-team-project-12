import { getUpcoming } from './get-upcoming';
import { getGenresById } from './get-genres-by-id';
import { createUpcomingMarkup, renderMarkup } from './upcoming-markup';
import { isMovieStored, toggleStoredMovie } from '../reuseble/local-storage.js';

// console.log(containerUpcoming);
const upcomingBtnRef = document.querySelector('#upcoming-btn');

getUpcoming().then(async films => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const filmUpcoming = films.filter(film => {
    const releaseDate = new Date(film.release_date);
    const filmMonth = releaseDate.getMonth() + 1;
    return releaseDate > currentDate && filmMonth === currentMonth;
  });

  if (filmUpcoming.length === 0) {
    console.log('No upcoming films this month.');
    return;
  }

  const random = Math.floor(Math.random() * filmUpcoming.length);
  const currentGenres = filmUpcoming[random].genre_ids;
  const genresName = await getGenresById(currentGenres);

  const render = createUpcomingMarkup(filmUpcoming[random], genresName);
  renderMarkup(render);
  upcomingBtnRef.style.display = 'block';

  // console.log(filmUpcoming);

  // console.log(filmUpcoming[random]);

  function changeBtnName() {
    const exists = isMovieStored(filmUpcoming[random]);

    if (!exists) {
      upcomingBtnRef.classList.remove('remove-btn');
      upcomingBtnRef.textContent = 'Add to my library';
    } else {
      upcomingBtnRef.classList.add('remove-btn');
      upcomingBtnRef.textContent = 'Remove from my library';
    }
  }

  upcomingBtnRef.addEventListener('click', e => {
    e.preventDefault();
    toggleStoredMovie(filmUpcoming[random]);
    changeBtnName();
  });

  changeBtnName();
});
