import{a as p}from"./footer-32303f92.js";import{g as m,m as u,f as g}from"./card-markup-a1afbb7f.js";const r=document.querySelector(".js-upcoming");console.log(r);const _=document.querySelector("#upcoming-btn");async function d(){const t="https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7";return await p.get(t).then(({data:e})=>(console.log(e.results),e)).catch(e=>console.error(e))}d().then(({results:t})=>{const e=new Date,n=t.filter(s=>e<Date.parse(s.release_date));if(n.length===0){console.log("No");return}const o=Math.floor(Math.random()*n.length),i=f(n[o]);y(i),console.log(n[o]);const c="key";_.addEventListener("click",s=>{s.preventDefault(),localStorage.setItem(c,JSON.stringify(n[o]));const a=localStorage.getItem(c);console.log(a)})});function h(t){return new Date(t).toLocaleString("uk",{day:"numeric",month:"numeric",year:"numeric"})}function f({backdrop_path:t,genre_ids:e,overview:n,popularity:o,release_date:i,title:c,vote_average:s,vote_count:a}){return`
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
              <p class="upcoming-list__date">${h(i)}</p>
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
       
        
  </div>`}function y(t){r.innerHTML=t}const l=document.querySelector(".weelky-trends-list");async function v(){try{const t=await m();l.innerHTML=await u(t),g(l)}catch(t){console.error(t)}}v();
