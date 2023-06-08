import{c as M,m as w,d as h}from"./footer-f353fa0c.js";const E="/js-team-project-12/assets/comingSoon-22be8f72.jpg";function v(s){return s?`https://image.tmdb.org/t/p/w300${s}`:E}async function C(s,a=100){const e=await M();return s.map(({id:t,poster_path:n,title:l,genre_ids:i,release_date:c,vote_average:y},k)=>{const b=k>=a?"hide-mobile":"",p=i.slice(0,2).map($=>e[$]).join(", "),u=c.substr(0,4);return`
<li class="film-card ${b}">
  <a href="#" class="film-card-link" movie_id="${t}">
    <img class="film-card-img" src="${v(n)}" alt="${l}" loading="lazy" />
    <div class="darkening"></div>
    <div class="info">
        <p class="info-title">
          ${l}
        </p>
      <div class="genre-rating">
        <p class="info-genre">
          ${p!==""?p:"Unknown"} |
          <span class="info-release-date"> ${u!==""?u:"Unknown"}</span>
        </p>

        <div class="rating">
          ${w(y)}
        </div>
      </div>
    </div>
  </a>
</li>`}).join("")}function L({title:s,poster_path:a,vote_average:e,vote_count:t,popularity:n,genres:l,overview:i}){return`
  <div class="modal-wrap">
  
      <button class="modal__close" type="button">
        <svg class="modal__svg" width="24" height="24">
          <use href="./img/symbol-defs.svg#icon-close-hero-modal"></use>
        </svg>
      </button>
      <div class="modal-display">
      <img src="${v(a)}" alt="${s}" class="modal__img" />
      </div>
      <div class="modal__wrap">
        <h2 class="modal__title">${s}</h2>
        <ul class="modal-list">
          <li class="modal-list__item">
            <p class="modal-list__text">Vote / Votes</p>
            <div class="modal-list__wrap">
              <span class="modal-list__vote">${e}</span> /
              <span class="modal-list__vote">${t}</span>
            </div>
          </li>
          <li class="modal-list__item">
            <span class="modal-list__text">Popularity</span>
            <span class="modal-list__popularity">${n}</span>
          </li>
          <li class="modal-list__item">
            <span class="modal-list__text">Genre</span>
            <span class="modal-list__genres">${l.map(({name:c})=>c).join(", ")}</span>
          </li>
        </ul>
        <p class="modal__about">About</p>
        <p class="modal__text">
          ${i}
        </p>
        <button type="button" class="modal-btn">
          Add to my library
        </button>
      </div>
    </div>`}const o=document.querySelector(".modal-backdrop");let d,r;function q(){document.querySelectorAll(".film-card-link").forEach(a=>{const e=a.getAttribute("movie_id");a.addEventListener("click",t=>{t.preventDefault(),S(e)})})}async function S(s){const a=await h(s);o.innerHTML=L(a),j()}function j(){r=document.querySelector(".modal-section"),r.style.display="block",d=document.querySelector(".modal__close"),d.addEventListener("click",_),document.addEventListener("keydown",g),o.addEventListener("click",f)}function _(){m()}function g(s){s.key==="Escape"&&m()}function f(s){s.target===o&&m()}function m(){o.innerHTML="",r.style.display="none",d.removeEventListener("click",_),document.removeEventListener("keydown",g),o.removeEventListener("click",f)}export{q as a,C as m};
