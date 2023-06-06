import{g as d,m as g}from"./footer-21574cfd.js";const p="/js-team-project-12/assets/comingSoon-22be8f72.jpg";async function $(s,e=100){const n=await d();return s.map(({poster_path:a,title:i,genre_ids:o,release_date:c,vote_average:l},r)=>{const t=a?`https://image.tmdb.org/t/p/w300${a}`:p;return`
<li class="film-card ${r>=e?"hide-mobile":""}">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="${t}" alt="${i}" loading="lazy" />
    <div class="darkening"></div>
    <div class="info">
        <p class="info-title">
          ${i}
        </p>
      <div class="genre-rating">
        <p class="info-genre">
          ${o.slice(0,2).map(m=>n[m]).join(", ")} | <span class="info-release-date"> ${c.substr(0,4)}</span>
        </p>

        <div class="rating">
          ${g(l)}
        </div>
      </div>
    </div>
  </a>
</li>`}).join("")}export{$ as m};
