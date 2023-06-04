function m(i){return i.map(({poster_path:s,title:a,vote_average:l,release_date:c})=>`
<li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${s}" alt="${a}" loading="lazy" />
    <div class="info">
      <p class="info-title">
        ${a}
      </p>
      <p class="info-item">
        ${l}
      </p>
      <p class="info-item">
        ${c}
      </p>
    </div>
  </a>
</li>`).join("")}export{m};
