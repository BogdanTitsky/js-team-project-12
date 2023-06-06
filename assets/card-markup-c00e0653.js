import{g,m as d}from"./footer-8e53d27a.js";const p="/js-team-project-12/assets/comingSoon-22be8f72.jpg";async function $(e,n=100){const o=await g();return e.map(({poster_path:a,title:s,genre_ids:l,release_date:c,vote_average:r},i)=>{const t=a?`https://image.tmdb.org/t/p/w300${a}`:p;return console.log(i),`
<li class="film-card ${i>=n?"hide-mobile":""}">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="${t}" alt="${s}" loading="lazy" />
    <div class="darkening"></div>
    <div class="info">
        <p class="info-title">
          ${s}
        </p>
      <div class="genre-rating">
        <p class="info-genre">
          ${l.slice(0,2).map(m=>o[m]).join(", ")} | <span class="info-release-date"> ${c.substr(0,4)}</span>
        </p>

        <div class="rating">
          ${d(r)}
        </div>
      </div>
    </div>
  </a>
</li>`}).join("")}export{$ as m};
