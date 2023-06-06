import{g as t,m as g}from"./footer-8e53d27a.js";async function d(s){const n=await t();return s.map(({poster_path:a,title:i,genre_ids:e,release_date:r,vote_average:l})=>`
<li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="${a?`https://image.tmdb.org/t/p/w300${a}`:"../../img/comingSoon.jpg"}" alt="${i}" loading="lazy" />
    <div class="darkening"></div>
    <div class="info">
        <p class="info-title">
          ${i}
        </p>
      <div class="genre-rating">
        <p class="info-genre">
          ${e.slice(0,2).map(c=>n[c]).join(", ")} | <span class="info-release-date"> ${r.substr(0,4)}</span>
        </p>

        <div class="rating">
          ${g(l)}
        </div>
      </div>
    </div>
  </a>
</li>`).join("")}export{d as m};
