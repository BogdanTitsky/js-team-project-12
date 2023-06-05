import{a as c}from"./footer-55dcca99.js";function u(e){return`
    <div class="rating">
      <div class="rating-body">
        <div class="rating-active"></div>
      </div>
      <div class="rating-value">${e}</div>
    </div>
    `}function h(e){const t=e.querySelectorAll(".rating");t.length===0?console.log("rating error"):v(t)}function v(e){for(let t=0;t<e.length;t+=1){const n=e[t],a=n.querySelector(".rating-value").innerHTML,i=n.querySelector(".rating-active");f(a,i)}}function f(e,t){const n=e*10;t.style.width=`${n}%`}const o="183c3cacc9c38c09c14d38798ccfe9d7",l="https://api.themoviedb.org/3";async function w(e="week",t=3){const n=`${l}/trending/movie/${e}?api_key=${o}`;try{const s=(await(await c.get(n)).data).results;return console.log(s),s.slice(0,t)}catch(a){console.log(a)}}async function p(){const e=`${l}/genre/movie/list?api_key=${o}`;try{const a=(await(await c.get(e)).data).genres;return console.log(a),a}catch(t){console.log(t)}}let r;async function m(){if(r===void 0)try{r=(await p()).reduce((t,{id:n,name:a})=>(t[n]=a,t),{})}catch(e){console.error(e)}return r}async function k(e){const t=await m();return e.map(({poster_path:n,title:a,genre_ids:i,release_date:s,vote_average:g})=>`
<li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="${n?`https://image.tmdb.org/t/p/w300${n}`:"../../img/comingSoon.jpg"}" alt="${a}" loading="lazy" />
    <div class="info">
      <div>
        <p class="info-title">
          ${a}
        </p>
        <p class="info-genre">
          ${i.slice(0,2).map(d=>t[d]).join(", ")} | <span class="info-release-date"> ${s.substr(0,4)}</span>
        </p>
      </div>
      <div class="rating">
        ${u(g)}
      </div>
    </div>
  </a>
</li>`).join("")}export{w as a,h as f,p as g,k as m};
