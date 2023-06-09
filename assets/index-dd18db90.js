import{d,e as _,t as h,i as f,b as v,c as y,f as M,a as w}from"./footer-413ec481.js";async function x(){const n=[];for(let s=1;s<=5;s+=1){const e=await d(s);n.push(...e)}return n}async function D(t){try{return(await _()).filter(e=>t.includes(e.id)).map((e,o)=>o===0?e.name:e.name.toLowerCase()).join(", ")}catch(n){console.log(n)}}const L="/js-team-project-12/assets/no-image-816a65ed.jpg",$=document.querySelector(".js-upcoming");function b(t){return new Date(t).toLocaleString("uk",{day:"numeric",month:"numeric",year:"numeric"})}function G({backdrop_path:t,overview:n,popularity:s,release_date:e,title:o,vote_average:r,vote_count:l},m){const a=t?`https://image.tmdb.org/t/p/original/${t}`:L,i=n||"Sorry! No description.";return`
  <h2 class="upcoming-name">Upcoming this month</h2>
  <div class="upcoming-content">
  <div class="upcoming-gradient">
      <img
        class="upcoming__img"
        src=${a}
        alt="${o}"/>
        </div>

      <div class="upcoming__wrapper">
        <h3 class="upcoming__title">${o}</h3>
        <div class="upcoming-thumb">
          <ul class="upcoming-list left">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Release date</p>
              <p class="upcoming-list__date">${b(e)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Vote / Votes</p>
              <p class="upcoming-list__vote">
                <span class="vote"> ${r.toFixed(1)}</span> / <span class="vote">${l}</span>
              </p>
            </li>
          </ul>

          <ul class="upcoming-list right">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Popularity</p>
              <p class="upcoming-list__popularity">${s.toFixed(1)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Genre</p>
              <p class="upcoming-list__genre">${m}</p>
            </li>
          </ul>
        </div>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${i}
        </p>
       
        
  </div>`}function k(t){$.innerHTML=t}const c=document.querySelector("#upcoming-btn");x().then(async t=>{const n=new Date,s=n.getMonth()+1,e=t.filter(i=>{const u=new Date(i.release_date),g=u.getMonth()+1;return u>n&&g===s});if(e.length===0){console.log("No upcoming films this month.");return}const o=Math.floor(Math.random()*e.length),r=e[o].genre_ids,l=await D(r),m=G(e[o],l);k(m),c.style.display="block";function a(){f(e[o].id)?(c.classList.add("remove-btn"),c.textContent="Remove from my library"):(c.classList.remove("remove-btn"),c.textContent="Add to my library")}c.addEventListener("click",i=>{i.preventDefault(),h(e[o]),a()}),a()});const p=document.querySelector(".weelky-trends-list");async function S(){try{const t=await v("week",3);p.innerHTML=await y(t,1),M(p),w(p)}catch(t){console.error(t)}}S();
