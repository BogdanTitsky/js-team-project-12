import{a as g}from"./footer-32303f92.js";import{g as p,m as u}from"./card-markup-e73795fc.js";const r=document.querySelector(".js-upcoming");console.log(r);const m=document.querySelector("#upcoming-btn");async function _(){const t="https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7";return await g.get(t).then(({data:e})=>(console.log(e.results),e)).catch(e=>console.error(e))}_().then(({results:t})=>{const e=new Date,n=t.filter(s=>e<Date.parse(s.release_date));if(n.length===0){console.log("No");return}const o=Math.floor(Math.random()*n.length),i=h(n[o]);f(i),console.log(n[o]);const c="key";m.addEventListener("click",s=>{s.preventDefault(),localStorage.setItem(c,JSON.stringify(n[o]));const a=localStorage.getItem(c);console.log(a)})});function d(t){return new Date(t).toLocaleString("uk",{day:"numeric",month:"numeric",year:"numeric"})}function h({backdrop_path:t,genre_ids:e,overview:n,popularity:o,release_date:i,title:c,vote_average:s,vote_count:a}){return`
  <h2 class="upcoming-name">Upcoming this month</h2>
  <div class="upcoming-content">
      <img
        class="upcoming__img"
        src="https://image.tmdb.org/t/p/original/${t}"
        alt="${c}"/>

      <div class="upcoming__wrapper">
        <h3 class="upcoming__title">${c}</h3>
        <div class="upcoming-thumb">
          <ul class="upcoming-list left">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Release date</p>
              <p class="upcoming-list__date">${d(i)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Vote / Votes</p>
              <p class="upcoming-list__vote">
                <span class="vote"> ${s.toFixed(1)}</span> / <span class="vote">${a}</span>
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
              <p class="upcoming-list__genre">${e}</p>
            </li>
          </ul>
        </div>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${n}
        </p>
       
        
  </div>`}function f(t){r.innerHTML=t}function v(t){for(let e=0;e<t.length;e+=1){const n=t[e],o=n.querySelector(".rating-value").innerHTML,i=n.querySelector(".rating-active::before");y(o,i)}}function y(t,e){const n=t*10;e.style.width=`${n}%`}function k(t){const e=t.querySelectorAll(".rating");e.length===0?console.log("rating error"):v(e)}const l=document.querySelector(".weelky-trends-list");async function D(){try{const t=await p();l.innerHTML=await u(t),k(l)}catch(t){console.error(t)}}D();
