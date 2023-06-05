import{a as c,m}from"./footer-2d24bd25.js";const i="183c3cacc9c38c09c14d38798ccfe9d7",l="https://api.themoviedb.org/3";async function v(s="week",a=3){const n=`${l}/trending/movie/${s}?api_key=${i}`;try{const t=(await(await c.get(n)).data).results;return console.log(t),t.slice(0,a)}catch(e){console.log(e)}}async function p(){const s=`${l}/genre/movie/list?api_key=${i}`;try{const e=(await(await c.get(s)).data).genres;return console.log(e),e}catch(a){console.log(a)}}let r;async function u(){if(r===void 0)try{r=(await p()).reduce((a,{id:n,name:e})=>(a[n]=e,a),{})}catch(s){console.error(s)}return r}async function y(s){const a=await u();return s.map(({poster_path:n,title:e,genre_ids:o,release_date:t,vote_average:g})=>`
<li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="${n?`https://image.tmdb.org/t/p/w300${n}`:"../../img/comingSoon.jpg"}" alt="${e}" loading="lazy" />
    <div class="info">
      <div>
        <p class="info-title">
          ${e}
        </p>
        <p class="info-genre">
          ${o.slice(0,2).map(d=>a[d]).join(", ")} | <span class="info-release-date"> ${t.substr(0,4)}</span>
        </p>
      </div>
      <div class="rating">
        ${m(g)}
      </div>
    </div>
  </a>
</li>`).join("")}export{v as a,p as g,y as m};
