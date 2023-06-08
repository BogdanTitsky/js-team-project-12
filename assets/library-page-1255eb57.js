import{e as r,m as d}from"./footer-abc308f2.js";document.querySelector(".libr-list");const g=document.querySelector(".libr-list"),u=document.querySelector(".libr-catch"),m="upcomingFilms";if(localStorage.length){const a=localStorage.getItem(m),s=JSON.parse(a);console.log(s),v(s),s.length>=1&&u.classList.add("display")}async function v(a){const s=await r(),i=a.map(({poster_path:t,title:e,vote_average:n,release_date:l,genre_ids:c})=>`
  <li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${t}" alt="${e}" loading="lazy" />
     <div class="info">
        <p class="info-title">
          ${e}
        </p>
      <div class="genre-rating">
        <p class="info-genre">
          ${c.slice(0,2).map(o=>s[o]).join(", ")} | <span class="info-release-date"> ${l.substring(0,4)}</span>
        </p>

        <div class="rating">
          ${d(n)}
        </div>
      </div>
    </div>
  </a>
</li>`).join("");g.innerHTML=i}const $=document.querySelector(".loadmorebtn");$.addEventListener("click",b);function b(){console.log(15);const a=localStorage.getItem(m),s=JSON.parse(a);for(let i=0;i<a.length;i++){const t=r(),e=s.map(({poster_path:n,title:l,vote_average:c,release_date:o,genre_ids:p})=>`
  <li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${n}" alt="${l}" loading="lazy" />
    <div class="info">
    <div>
      <p class="info-title">
        ${l}
      </p>
      <p class="info-genre">
          ${p.slice(0,2).map(f=>t[f]).join(", ")} | <span class="info-release-date"> ${o.substring(0,4)}</span>
        </p>
        </div>
      <div class="rating">
        ${d(c)}
      </div>

    </div>
  </a>
</li>`).join("");g.insertAdjacentHTML=e}}
