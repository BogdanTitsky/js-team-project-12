import{a as c}from"./footer-32303f92.js";function p(a){return`
    <div class="rating">
      <div class="rating-body">
          <div class="rating-active"></div>
          <div class="rating-items">
              <input type="radio" class="rating-item" value="1" name="rating">
              <input type="radio" class="rating-item" value="2" name="rating">
              <input type="radio" class="rating-item" value="3" name="rating">
              <input type="radio" class="rating-item" value="4" name="rating">
              <input type="radio" class="rating-item" value="5" name="rating">
          </div>
       </div>
       <div class="rating-value">${a}</div>
    </div>

    `}const o="183c3cacc9c38c09c14d38798ccfe9d7",l="https://api.themoviedb.org/3";async function f(a="week",t=3){const n=`${l}/trending/movie/${a}?api_key=${o}`;try{const i=(await(await c.get(n)).data).results;return console.log(i),i.slice(0,t)}catch(e){console.log(e)}}async function u(){const a=`${l}/genre/movie/list?api_key=${o}`;try{const e=(await(await c.get(a)).data).genres;return console.log(e),e}catch(t){console.log(t)}}let s;async function m(){if(s===void 0)try{s=(await u()).reduce((t,{id:n,name:e})=>(t[n]=e,t),{})}catch(a){console.error(a)}return s}async function y(a){const t=await m();return a.map(({poster_path:n,title:e,genre_ids:r,release_date:i,vote_average:g})=>`
<li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${n}" alt="${e}" loading="lazy" />
    <div class="info">
      <p class="info-title">
        ${e}
      </p>
      <p class="info-genre">
        ${r.map(d=>t[d]).join(", ")} | <span class="info-release-date"> ${i}</span>
      </p>
      <div class="rating">
        ${p(g)}
      </div>
    </div>
  </a>
</li>`).join("")}export{f as g,y as m};
