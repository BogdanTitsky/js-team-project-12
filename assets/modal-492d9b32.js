import{c as g,m as v,d as f}from"./footer-0ba66a71.js";const b="/js-team-project-12/assets/comingSoon-22be8f72.jpg";function r(s){return s?`https://image.tmdb.org/t/p/w300${s}`:b}async function k(s,a=100){const t=await g();return s.map(({id:l,poster_path:o,title:i,genre_ids:n,release_date:e,vote_average:m},p)=>{const _=p>=a?"hide-mobile":"",c=n.slice(0,2).map(u=>t[u]).join(", "),d=e.substr(0,4);return`
<li class="film-card ${_}">
  <a href="#" class="film-card-link" movie_id="${l}">
    <img class="film-card-img" src="${r(o)}" alt="${i}" loading="lazy" />
    <div class="darkening"></div>
    <div class="info">
        <p class="info-title">
          ${i}
        </p>
      <div class="genre-rating">
        <p class="info-genre">
          ${c!==""?c:"Unknown"} |
          <span class="info-release-date"> ${d!==""?d:"Unknown"}</span>
        </p>

        <div class="rating">
          ${v(m)}
        </div>
      </div>
    </div>
  </a>
</li>`}).join("")}function $({title:s,poster_path:a,vote_average:t,vote_count:l,popularity:o,genres:i,overview:n}){return`<div class="modal">
      <button class="modal__close" type="button">
        <svg class="modal__svg" width="24" height="24">
          <use href=""></use>
        </svg>
      </button>
      <img src="${r(a)}" alt="${s}" class="modal__img" />
      <div class="modal__wrap">
        <h2 class="modal__title">${s}</h2>
        <ul class="modal-list">
          <li class="modal-list__item">
            <p class="modal-list__text">Vote / Votes</p>
            <div class="modal-list__wrap">
              <span class="modal-list__vote">${t}</span>/
              <span class="modal-list__vote">${l}</span>
            </div>
          </li>
          <li class="modal-list__item">
            <span class="modal-list__text">Popularity</span>
            <span class="modal-list__popularity">${o}</span>
          </li>
          <li class="modal-list__item">
            <span class="modal-list__text">Genre</span>
            <span class="modal-list__genres">${i.map(({name:e})=>e).join(", ")}</span>
          </li>
        </ul>
        <p class="modal__about">About</p>
        <p class="modal__text">
          ${n}
        </p>
        <button type="button" class="modal-btn">
          Add to my library
        </button>
      </div>
    </div>`}const h=document.querySelector(".modal-backdrop");function w(){document.querySelectorAll(".film-card-link").forEach(a=>{const t=a.getAttribute("movie_id");a.addEventListener("click",l=>{l.preventDefault(),y(t)})})}async function y(s){const a=await f(s);h.innerHTML=$(a),showModal()}export{w as a,k as m};
