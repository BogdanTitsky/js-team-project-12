import{g as f,m as v}from"./footer-21574cfd.js";const $="/js-team-project-12/assets/comingSoon-22be8f72.jpg";async function b(e,o=100){const r=await f();return e.map(({poster_path:a,title:s,genre_ids:t,release_date:c,vote_average:l},m)=>{const g=a?`https://image.tmdb.org/t/p/w300${a}`:$,d=m>=o?"hide-mobile":"",n=t.slice(0,2).map(p=>r[p]).join(", "),i=c.substr(0,4);return`
<li class="film-card ${d}">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="${g}" alt="${s}" loading="lazy" />
    <div class="darkening"></div>
    <div class="info">
        <p class="info-title">
          ${s}
        </p>
      <div class="genre-rating">
        <p class="info-genre">
          ${n!==""?n:"Unknown"} |
          <span class="info-release-date"> ${i!==""?i:"Unknown"}</span>
        </p>

        <div class="rating">
          ${v(l)}
        </div>
      </div>
    </div>
  </a>
</li>`}).join("")}export{b as m};
