import{g as r,m}from"./footer-b68d9b12.js";document.querySelector(".libr-list");const g=document.querySelector(".libr-list"),p=document.querySelector(".libr-catch"),d="upcomingFilms";if(localStorage.length){const s=localStorage.getItem(d),a=JSON.parse(s);console.log(a),f(a),a.length>=1&&p.classList.add("display")}async function f(s){const a=await r(),e=s.map(({poster_path:t,title:i,vote_average:l,release_date:c,genre_ids:n})=>`
  <li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${t}" alt="${i}" loading="lazy" />
    <div class="info">
    <div>
      <p class="info-title">
        ${i}
      </p>
      <p class="info-genre">
          ${n.slice(0,2).map(o=>a[o]).join(", ")} | <span class="info-release-date"> ${c.substr(0,4)}</span>
        </p>
        </div>
      <div class="rating">
        ${m(l)}
      </div>
     
    </div>
  </a>
</li>`).join("");g.innerHTML=e}
