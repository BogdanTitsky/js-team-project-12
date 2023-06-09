const storageKey = 'moviesLibrary';

export function getStoredMovies() {
  const storedMovies = localStorage.getItem(storageKey);
  if (storedMovies == null) {
    return [];
  }

  return JSON.parse(storedMovies)
}

export function toggleStoredMovie(toggledMovie) {
  let storedMovies = JSON.parse(localStorage.getItem(storageKey)) || [];

  const indexLocal = storedMovies.findIndex(
    storedMovie => storedMovie.id === toggledMovie.id,
  );
  if (indexLocal === -1) {
    storedMovies.push(toggledMovie);
    // console.log('Добавляет в localStorage');
  } else {
    storedMovies.splice(indexLocal, 1);
    // console.log('Удаляет из localStorage');
  }

  localStorage.setItem(storageKey, JSON.stringify(storedMovies));
}

export function isMovieStored(movieId) {
  let storedMovies = getStoredMovies();

  const indexLocal = storedMovies.findIndex(
    film => film.id === movieId,
  );

  return indexLocal !== -1;
}