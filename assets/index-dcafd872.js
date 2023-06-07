import{a as f,g as h,b as y,f as v}from"./footer-49ebefbf.js";import{m as x}from"./card-markup-8c2f4c17.js";async function M(){const o=[];for(let s=1;s<=5;s+=1){const t=`https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7&language=en-US&page=${s}`;try{const{data:n}=await f.get(t);o.push(...n.results)}catch(n){console.error(n)}}return o}async function L(e){try{return(await h()).filter(t=>e.includes(t.id)).map((t,n)=>n===0?t.name:t.name.toLowerCase()).join(", ")}catch(o){console.log(o)}}const S=document.querySelector(".js-upcoming");function $(e){return new Date(e).toLocaleString("uk",{day:"numeric",month:"numeric",year:"numeric"})}function b({backdrop_path:e,overview:o,popularity:s,release_date:t,title:n,vote_average:p,vote_count:g},u){const l=e?`https://image.tmdb.org/t/p/original/${e}`:"/img/no-image.jpg",m=o||"Sorry! No description.";return`
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
                <span class="vote"> ${p.toFixed(1)}</span> / <span class="vote">${g}</span>
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
              <p class="upcoming-list__genre">${u}</p>
            </li>
          </ul>
        </div>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${m}
        </p>
       
        
  </div>`}function k(e){S.innerHTML=e}const c=document.querySelector("#upcoming-btn");M().then(async e=>{const o=new Date,s=o.getMonth()+1,t=e.filter(a=>{const i=new Date(a.release_date),r=i.getMonth()+1;return i>o&&r===s});if(t.length===0){console.log("No upcoming films this month.");return}const n=Math.floor(Math.random()*t.length),p=t[n].genre_ids,g=await L(p),u=b(t[n],g);k(u),c.style.display="block",console.log(t);function l(){const a="upcomingFilms";(JSON.parse(localStorage.getItem(a))||[]).findIndex(d=>d.id===t[n].id)===-1?(c.classList.remove("remove-btn"),c.textContent="Add to my library"):(c.classList.add("remove-btn"),c.textContent="Remove from my library")}const m="upcomingFilms";c.addEventListener("click",a=>{a.preventDefault();let i=JSON.parse(localStorage.getItem(m))||[];const r=i.findIndex(d=>d.id===t[n].id);r===-1?i.push(t[n]):i.splice(r,1),localStorage.setItem(m,JSON.stringify(i)),l()}),l()});const _=document.querySelector(".weelky-trends-list");async function w(){try{const e=await y();_.innerHTML=await x(e,1),v(_)}catch(e){console.error(e)}}w();
