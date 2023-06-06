import{g as m,m as d}from"./footer-8e53d27a.js";async function v(n,e=100){const l=await m();return n.map(({poster_path:a,title:i,genre_ids:o,release_date:r,vote_average:c},s)=>{const t=a?`https://image.tmdb.org/t/p/w300${a}`:"../../img/comingSoon.jpg";return console.log(s),`
<li class="film-card ${s>=e?"hide-mobile":""}">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="${t}" alt="${i}" loading="lazy" />
    <div class="darkening"></div>
    <div class="info">
        <p class="info-title">
          ${i}
        </p>
      <div class="genre-rating">
        <p class="info-genre">
          ${o.slice(0,2).map(g=>l[g]).join(", ")} | <span class="info-release-date"> ${r.substr(0,4)}</span>
        </p>

        <div class="rating">
          ${d(c)}
        </div>
      </div>
    </div>
  </a>
</li>`}).join("")}export{v as m};
