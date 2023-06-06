import{a as f,b as h,c as y,f as v}from"./footer-8e53d27a.js";import{m as x}from"./card-markup-19c85153.js";async function M(){const o=[];for(let s=1;s<=5;s+=1){const t=`https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7&page=${s}`;try{const{data:n}=await f.get(t);o.push(...n.results)}catch(n){console.error(n)}}return o}async function L(e){try{return(await h()).filter(t=>e.includes(t.id)).map((t,n)=>n===0?t.name:t.name.toLowerCase()).join(", ")}catch(o){console.log(o)}}const S=document.querySelector(".js-upcoming");function $(e){return new Date(e).toLocaleString("uk",{day:"numeric",month:"numeric",year:"numeric"})}function w({backdrop_path:e,overview:o,popularity:s,release_date:t,title:n,vote_average:p,vote_count:u},g){const l=e?`https://image.tmdb.org/t/p/original/${e}`:"../../img/no-image.jpg",m=o||"Sorry! No description";return`
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
              <p class="upcoming-list__date">${$(t)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Vote / Votes</p>
              <p class="upcoming-list__vote">
                <span class="vote"> ${p.toFixed(1)}</span> / <span class="vote">${u}</span>
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
              <p class="upcoming-list__genre">${g}</p>
            </li>
          </ul>
        </div>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${m}
        </p>
       
        
  </div>`}function b(e){S.innerHTML=e}const r=document.querySelector("#upcoming-btn");M().then(async e=>{const o=new Date,s=o.getMonth()+1,t=e.filter(c=>{const i=new Date(c.release_date),a=i.getMonth()+1;return i>o&&a===s});if(t.length===0){console.log("No upcoming films this month.");return}const n=Math.floor(Math.random()*t.length),p=t[n].genre_ids,u=await L(p),g=w(t[n],u);b(g),console.log(t);function l(){const c="upcomingFilms";(JSON.parse(localStorage.getItem(c))||[]).findIndex(d=>d.id===t[n].id)===-1?(r.classList.remove("remove-btn"),r.textContent="Add to my library"):(r.classList.add("remove-btn"),r.textContent="Remove from my library")}const m="upcomingFilms";r.addEventListener("click",c=>{c.preventDefault();let i=JSON.parse(localStorage.getItem(m))||[];const a=i.findIndex(d=>d.id===t[n].id);a===-1?i.push(t[n]):i.splice(a,1),localStorage.setItem(m,JSON.stringify(i)),l()}),l()});const _=document.querySelector(".weelky-trends-list");async function k(){try{const e=await y();_.innerHTML=await x(e,1),v(_)}catch(e){console.error(e)}}k();
