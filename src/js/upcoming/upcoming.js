import { getUpcoming } from './get-upcoming';
import { getGenresById } from './get-genres-by-id';
import { createUpcomingMarkup, renderMarkup } from './upcoming-markup';

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
    const key = 'upcomingFilms';
    let upcomingFilms = JSON.parse(localStorage.getItem(key)) || [];

    const indexLocal = upcomingFilms.findIndex(
      film => film.id === filmUpcoming[random].id
    );

    if (indexLocal === -1) {
      upcomingBtnRef.classList.remove('remove-btn');
      upcomingBtnRef.textContent = 'Add to my library';
    } else {
      upcomingBtnRef.classList.add('remove-btn');
      upcomingBtnRef.textContent = 'Remove from my library';
    }
  }

  const key = 'upcomingFilms';
  upcomingBtnRef.addEventListener('click', e => {
    e.preventDefault();
    let upcomingFilms = JSON.parse(localStorage.getItem(key)) || [];

    const indexLocal = upcomingFilms.findIndex(
      film => film.id === filmUpcoming[random].id
    );
    if (indexLocal === -1) {
      upcomingFilms.push(filmUpcoming[random]);
      // console.log('Добавляет в localStorage');
    } else {
      upcomingFilms.splice(indexLocal, 1);
      // console.log('Удаляет из localStorage');
    }

    localStorage.setItem(key, JSON.stringify(upcomingFilms));

    changeBtnName();
  });

  changeBtnName();
});
