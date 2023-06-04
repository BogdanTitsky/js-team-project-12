import{a as c}from"./footer-32303f92.js";function u(e){return`
    <div class="rating">
      <div class="rating-body">
        <div class="rating-active"></div>
      </div>
      <div class="rating-value">${e}</div>
    </div>
    `}function $(e){const t=e.querySelectorAll(".rating");t.length===0?console.log("rating error"):v(t)}function v(e){for(let t=0;t<e.length;t+=1){const a=e[t],n=a.querySelector(".rating-value").innerHTML,i=a.querySelector(".rating-active");f(n,i)}}function f(e,t){const a=e*10;t.style.width=`${a}%`}const o="183c3cacc9c38c09c14d38798ccfe9d7",l="https://api.themoviedb.org/3";async function h(e="week",t=3){const a=`${l}/trending/movie/${e}?api_key=${o}`;try{const s=(await(await c.get(a)).data).results;return console.log(s),s.slice(0,t)}catch(n){console.log(n)}}async function p(){const e=`${l}/genre/movie/list?api_key=${o}`;try{const n=(await(await c.get(e)).data).genres;return console.log(n),n}catch(t){console.log(t)}}let r;async function m(){if(r===void 0)try{r=(await p()).reduce((t,{id:a,name:n})=>(t[a]=n,t),{})}catch(e){console.error(e)}return r}async function w(e){const t=await m();return e.map(({poster_path:a,title:n,genre_ids:i,release_date:s,vote_average:g})=>`
<li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${a}" alt="${n}" loading="lazy" />
    <div class="info">
      <p class="info-title">
        ${n}
      </p>
      <p class="info-genre">
        ${i.map(d=>t[d]).join(", ")} | <span class="info-release-date"> ${s}</span>
      </p>
      <div class="rating">
        ${u(g)}
      </div>
    </div>
  </a>
</li>`).join("")}export{h as a,$ as f,p as g,w as m};
