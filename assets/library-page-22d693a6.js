import{m as s}from"./footer-c8c30220.js";const e=document.querySelector(".libr-list"),n=document.querySelector(".libr-catch"),r="upcomingFilms";if(localStorage.length){const i=localStorage.getItem(r),a=JSON.parse(i);console.log(a),m(a),n.style.display="none"}function m(i){const a=i.map(({poster_path:t,title:l,vote_average:c,release_date:o})=>`
  <li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${t}" alt="${l}" loading="lazy" />
    <div class="info">
      <p class="info-title">
        ${l}
      </p>
      <p class="info-item">
        ${o}
      </p>
      <p class="info-item">
        ${s(c)}
      </p>
     
    </div>
  </a>
</li>`).join("");e.innerHTML=a}
