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

export { makeMarkup };
