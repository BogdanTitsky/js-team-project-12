function makeMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title, vote_average, release_date }) => `
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
    .join('');
}

export { makeMarkup };
