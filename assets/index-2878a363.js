import{a as _}from"./footer-64011acd.js";import{g as f,a as h,m as y,f as v}from"./card-markup-a6fe512c.js";const x=document.querySelector(".js-upcoming"),c=document.querySelector("#upcoming-btn");async function L(){const e="https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7";try{const{data:t}=await _.get(e);return t}catch(t){console.error(t)}}async function k(e){try{return(await f()).filter(i=>e.includes(i.id)).map(i=>i.name).join(", ")}catch(t){console.log(t)}}L().then(async({results:e})=>{const t=new Date,n=e.filter(s=>t<Date.parse(s.release_date));if(n.length===0){console.log("No");return}const i=Math.floor(Math.random()*n.length),a=n[i].genre_ids,l=await k(a),m=b(n[i],l);w(m);function r(){const s="upcomingFilms";(JSON.parse(localStorage.getItem(s))||[]).findIndex(u=>u.id===n[i].id)===-1?(c.classList.remove("remove-btn"),c.textContent="Add to my library"):(c.classList.add("remove-btn"),c.textContent="Remove from my library")}const g="upcomingFilms";c.addEventListener("click",s=>{s.preventDefault();let o=JSON.parse(localStorage.getItem(g))||[];const p=o.findIndex(u=>u.id===n[i].id);p===-1?o.push(n[i]):o.splice(p,1),localStorage.setItem(g,JSON.stringify(o)),r()}),r()});function S(e){return new Date(e).toLocaleString("uk",{day:"numeric",month:"numeric",year:"numeric"})}function b({backdrop_path:e,overview:t,popularity:n,release_date:i,title:a,vote_average:l,vote_count:m},r){return`
  <h2 class="upcoming-name">Upcoming this month</h2>
  <div class="upcoming-content">
      <img
        class="upcoming__img"
        src="https://image.tmdb.org/t/p/original/${e}"
        alt="${a}"/>

      <div class="upcoming__wrapper">
        <h3 class="upcoming__title">${a}</h3>
        <div class="upcoming-thumb">
          <ul class="upcoming-list left">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Release date</p>
              <p class="upcoming-list__date">${S(i)}</p>
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
              <p class="upcoming-list__popularity">${n.toFixed(1)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Genre</p>
              <p class="upcoming-list__genre">${r}</p>
            </li>
          </ul>
        </div>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${t}
        </p>
       
        
  </div>`}function w(e){x.innerHTML=e}const d=document.querySelector(".weelky-trends-list");async function $(){try{const e=await h();d.innerHTML=await y(e),v(d)}catch(e){console.error(e)}}$();
