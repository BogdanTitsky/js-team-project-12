import"./footer-eca60421.js";document.querySelector(".library-card");const r=document.querySelector(".libr-list"),a=document.querySelector(".libr-catch"),i="key";console.log(15);if(localStorage.length){const e=localStorage.getItem(i),c=JSON.parse(e);console.log(c);const t=s(c);n(t),a.style.display="none"}function s({backdrop_path:e,poster_path:c,title:t,vote_average:l,release_date:o}){return`
  <li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${e}" alt="${t}" loading="lazy" />
    <div class="info">
      <p class="info-title">
        ${t}
      </p>
      <p class="info-item">
        ${l}
      </p>
      <p class="info-item">
        ${o}
      </p>
    </div>
  </a>
</li>`}function n(e){r.innerHTML=e}
