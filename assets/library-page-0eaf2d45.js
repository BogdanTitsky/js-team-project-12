import{e as t,h as f,m as g,c as p,f as b,a as u}from"./footer-cb0210ec.js";const e=document.querySelector(".libr-list"),v=document.querySelector(".libr-catch");async function M(){const a=t();e.insertAdjacentHTML("beforeend",await p(a,9)),b(e),u(e),a.length>=1&&v.classList.add("display")}M();const y=document.querySelector(".loadmorebtn");y.addEventListener("click",h);function h(){console.log(15);const a=t();for(let s=0;s<a.length;s++){const n=f(),r=a.map(({poster_path:o,title:i,vote_average:l,release_date:c,genre_ids:d})=>`
  <li class="film-card">
  <a href="" class="film-card-link">
    <img class="film-card-img" src="https://image.tmdb.org/t/p/w300${o}" alt="${i}" loading="lazy" />
    <div class="info">
    <div>
      <p class="info-title">
        ${i}
      </p>
      <p class="info-genre">
          ${d.slice(0,2).map(m=>n[m]).join(", ")} | <span class="info-release-date"> ${c.substring(0,4)}</span>
        </p>
        </div>
      <div class="rating">
        ${g(l)}
      </div>

    </div>
  </a>
</li>`).join("");e.insertAdjacentHTML("beforeend",r)}}
