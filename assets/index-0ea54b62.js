import{a as f,g as h,b as y,f as v}from"./footer-8cb7fe6f.js";import{m as x,a as M}from"./modal-f3a5e708.js";async function L(){const s=[];for(let o=1;o<=5;o+=1){const e=`https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7&language=en-US&page=${o}`;try{const{data:n}=await f.get(e);s.push(...n.results)}catch(n){console.error(n)}}return s}async function S(t){try{return(await h()).filter(e=>t.includes(e.id)).map((e,n)=>n===0?e.name:e.name.toLowerCase()).join(", ")}catch(s){console.log(s)}}const $="/js-team-project-12/assets/no-image-816a65ed.jpg",b=document.querySelector(".js-upcoming");function k(t){return new Date(t).toLocaleString("uk",{day:"numeric",month:"numeric",year:"numeric"})}function w({backdrop_path:t,overview:s,popularity:o,release_date:e,title:n,vote_average:p,vote_count:g},u){const l=t?`https://image.tmdb.org/t/p/original/${t}`:$,m=s||"Sorry! No description.";return`
  <h2 class="upcoming-name">Upcoming this month</h2>
  <div class="upcoming-content">
  <div class="upcoming-gradient">
      <img
        class="upcoming__img"
        src=${l}
        alt="${n}"/>
        </div>

      <div class="upcoming__wrapper">
        <h3 class="upcoming__title">${n}</h3>
        <div class="upcoming-thumb">
          <ul class="upcoming-list left">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Release date</p>
              <p class="upcoming-list__date">${k(e)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Vote / Votes</p>
              <p class="upcoming-list__vote">
                <span class="vote"> ${p.toFixed(1)}</span> / <span class="vote">${g}</span>
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
              <p class="upcoming-list__genre">${u}</p>
            </li>
          </ul>
        </div>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${m}
        </p>
       
        
  </div>`}function D(t){b.innerHTML=t}const c=document.querySelector("#upcoming-btn");L().then(async t=>{const s=new Date,o=s.getMonth()+1,e=t.filter(a=>{const i=new Date(a.release_date),r=i.getMonth()+1;return i>s&&r===o});if(e.length===0){console.log("No upcoming films this month.");return}const n=Math.floor(Math.random()*e.length),p=e[n].genre_ids,g=await S(p),u=w(e[n],g);D(u),c.style.display="block";function l(){const a="upcomingFilms";(JSON.parse(localStorage.getItem(a))||[]).findIndex(d=>d.id===e[n].id)===-1?(c.classList.remove("remove-btn"),c.textContent="Add to my library"):(c.classList.add("remove-btn"),c.textContent="Remove from my library")}const m="upcomingFilms";c.addEventListener("click",a=>{a.preventDefault();let i=JSON.parse(localStorage.getItem(m))||[];const r=i.findIndex(d=>d.id===e[n].id);r===-1?i.push(e[n]):i.splice(r,1),localStorage.setItem(m,JSON.stringify(i)),l()}),l()});const _=document.querySelector(".weelky-trends-list");async function F(){try{const t=await y();_.innerHTML=await x(t,1),v(_),M()}catch(t){console.error(t)}}F();
