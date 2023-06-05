import{a as _,b as f,c as h,f as y}from"./footer-b68d9b12.js";import{m as v}from"./card-markup-0e99a49d.js";const x=document.querySelector(".js-upcoming"),a=document.querySelector("#upcoming-btn");async function L(){const e="https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7";try{const{data:n}=await _.get(e);return n}catch(n){console.error(n)}}async function b(e){try{return(await f()).filter(t=>e.includes(t.id)).map((t,i)=>i===0?t.name:t.name.toLowerCase()).join(", ")}catch(n){console.log(n)}}L().then(async({results:e})=>{const n=new Date,s=e.filter(o=>n<Date.parse(o.release_date));if(s.length===0){console.log("No");return}const t=Math.floor(Math.random()*s.length),i=s[t].genre_ids,l=await b(i),m=w(s[t],l);S(m);function r(){const o="upcomingFilms";(JSON.parse(localStorage.getItem(o))||[]).findIndex(u=>u.id===s[t].id)===-1?(a.classList.remove("remove-btn"),a.textContent="Add to my library"):(a.classList.add("remove-btn"),a.textContent="Remove from my library")}const g="upcomingFilms";a.addEventListener("click",o=>{o.preventDefault();let c=JSON.parse(localStorage.getItem(g))||[];const p=c.findIndex(u=>u.id===s[t].id);p===-1?c.push(s[t]):c.splice(p,1),localStorage.setItem(g,JSON.stringify(c)),r()}),r()});function k(e){return new Date(e).toLocaleString("uk",{day:"numeric",month:"numeric",year:"numeric"})}function w({backdrop_path:e,overview:n,popularity:s,release_date:t,title:i,vote_average:l,vote_count:m},r){return`
  <h2 class="upcoming-name">Upcoming this month</h2>
  <div class="upcoming-content">
      <img
        class="upcoming__img"
        src="https://image.tmdb.org/t/p/original/${e}"
        alt="${i}"/>

      <div class="upcoming__wrapper">
        <h3 class="upcoming__title">${i}</h3>
        <div class="upcoming-thumb">
          <ul class="upcoming-list left">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Release date</p>
              <p class="upcoming-list__date">${k(t)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Vote / Votes</p>
              <p class="upcoming-list__vote">
                <span class="vote"> ${l.toFixed(1)}</span> / <span class="vote">${m}</span>
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
              <p class="upcoming-list__genre">${r}</p>
            </li>
          </ul>
        </div>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${n}
        </p>
       
        
  </div>`}function S(e){x.innerHTML=e}const d=document.querySelector(".weelky-trends-list");async function $(){try{const e=await h();d.innerHTML=await v(e),y(d)}catch(e){console.error(e)}}$();
