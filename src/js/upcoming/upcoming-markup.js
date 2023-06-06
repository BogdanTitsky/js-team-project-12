const containerUpcoming = document.querySelector('.js-upcoming');

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

export function createUpcomingMarkup(
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
  const imagePath = backdrop_path
    ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
    : '../../img/no-image.jpg';

  const description = overview ? overview : 'Sorry! No description';

  return `
  <h2 class="upcoming-name">Upcoming this month</h2>
  <div class="upcoming-content">
  <div class="upcoming-gradient">
      <img
        class="upcoming__img"
        src=${imagePath}
        alt="${title}"/>
        </div>

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
        <p class="upcoming-content__text">${description}
        </p>
       
        
  </div>`;
}

export function renderMarkup(markup) {
  containerUpcoming.innerHTML = markup;
}
