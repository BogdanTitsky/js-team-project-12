
const libraryCard = document.querySelector('.library-card');
const librList = document.querySelector('.libr-list');
const librCatch = document.querySelector('.libr-catch');
const key = 'upcomingFilms';


if (localStorage.length ) {
  const storageLoc = localStorage.getItem(key);

  const parsed = JSON.parse(storageLoc);
  console.log(parsed);
createUpcomingMarkup(parsed);

  librCatch.style.display = 'none';
}



function createUpcomingMarkup(parsed) {
  const markup = parsed.map(({
  backdrop_path,
  poster_path,
  title,
  vote_average,
  release_date,
}) =>
   `
  <li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy" />
    <div class="info">
      <p class="info-title">
        ${title}
      </p>
      <p class="info-item">
        ${vote_average}
      </p>
      <p class="info-item">
        ${release_date}
      </p>
    </div>
  </a>
</li>`
  )
  librList.innerHTML = markup;
}

