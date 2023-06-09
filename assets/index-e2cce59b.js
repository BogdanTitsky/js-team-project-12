import{b as d,g as _,t as h,i as f,d as v,c as y,f as M,a as x}from"./footer-2f66b335.js";async function $(){const s=[];for(let o=1;o<=5;o+=1){const e=`https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7&language=en-US&page=${o}`;try{const{data:n}=await d.get(e);s.push(...n.results)}catch(n){console.error(n)}}return s}async function b(t){try{return(await _()).filter(e=>t.includes(e.id)).map((e,n)=>n===0?e.name:e.name.toLowerCase()).join(", ")}catch(s){console.log(s)}}const w="/js-team-project-12/assets/no-image-816a65ed.jpg",D=document.querySelector(".js-upcoming");function L(t){return new Date(t).toLocaleString("uk",{day:"numeric",month:"numeric",year:"numeric"})}function G({backdrop_path:t,overview:s,popularity:o,release_date:e,title:n,vote_average:r,vote_count:l},m){const a=t?`https://image.tmdb.org/t/p/original/${t}`:w,i=s||"Sorry! No description.";return`
  <h2 class="upcoming-name">Upcoming this month</h2>
  <div class="upcoming-content">
  <div class="upcoming-gradient">
      <img
        class="upcoming__img"
        src=${a}
        alt="${n}"/>
        </div>

      <div class="upcoming__wrapper">
        <h3 class="upcoming__title">${n}</h3>
        <div class="upcoming-thumb">
          <ul class="upcoming-list left">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Release date</p>
              <p class="upcoming-list__date">${L(e)}</p>
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
              <p class="upcoming-list__popularity">${o.toFixed(1)}</p>
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
       
        
  </div>`}function S(t){D.innerHTML=t}const c=document.querySelector("#upcoming-btn");$().then(async t=>{const s=new Date,o=s.getMonth()+1,e=t.filter(i=>{const u=new Date(i.release_date),g=u.getMonth()+1;return u>s&&g===o});if(e.length===0){console.log("No upcoming films this month.");return}const n=Math.floor(Math.random()*e.length),r=e[n].genre_ids,l=await b(r),m=G(e[n],l);S(m),c.style.display="block";function a(){f(e[n].id)?(c.classList.add("remove-btn"),c.textContent="Remove from my library"):(c.classList.remove("remove-btn"),c.textContent="Add to my library")}c.addEventListener("click",i=>{i.preventDefault(),h(e[n]),a()}),a()});const p=document.querySelector(".weelky-trends-list");async function k(){try{const t=await v();p.innerHTML=await y(t,1),M(p),x(p)}catch(t){console.error(t)}}k();
