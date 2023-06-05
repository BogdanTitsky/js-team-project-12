import"./footer-0711ddd6.js";document.querySelector(".library-card");const e=document.querySelector(".libr-list"),s=document.querySelector(".libr-catch"),r="upcomingFilms";if(localStorage.length){const l=localStorage.getItem(r),c=JSON.parse(l);console.log(c),n(c),s.style.display="none"}function n(l){const c=l.map(({backdrop_path:m,poster_path:t,title:a,vote_average:i,release_date:o})=>`
  <li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${t}" alt="${a}" loading="lazy" />
    <div class="info">
      <p class="info-title">
        ${a}
      </p>
      <p class="info-item">
        ${i}
      </p>
      <p class="info-item">
        ${o}
      </p>
    </div>
  </a>
</li>`);e.innerHTML=c}
