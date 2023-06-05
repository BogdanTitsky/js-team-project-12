import{g as t,m as c}from"./footer-143e7997.js";async function p(s){const n=await t();return s.map(({poster_path:a,title:i,genre_ids:e,release_date:r,vote_average:l})=>`
<li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="${a?`https://image.tmdb.org/t/p/w300${a}`:"../../img/comingSoon.jpg"}" alt="${i}" loading="lazy" />
    <div class="info">
      <div>
        <p class="info-title">
          ${i}
        </p>
        <p class="info-genre">
          ${e.slice(0,2).map(m=>n[m]).join(", ")} | <span class="info-release-date"> ${r.substr(0,4)}</span>
        </p>
      </div>
      <div class="rating">
        ${c(l)}
      </div>
    </div>
  </a>
</li>`).join("")}export{p as m};
