import{a as l}from"./footer-32303f92.js";import{m as p}from"./card-markup-2112fb7b.js";const r=document.querySelector(".js-upcoming");console.log(r);const m=document.querySelector("#upcoming-btn");async function u(){const t="https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7";return await l.get(t).then(({data:e})=>(console.log(e.results),e)).catch(e=>console.error(e))}u().then(({results:t})=>{const e=new Date,o=t.filter(s=>e<Date.parse(s.release_date));if(o.length===0){console.log("No");return}const c=Math.floor(Math.random()*o.length),i=_(o[c]);d(i),console.log(o[c]);const n="key";m.addEventListener("click",s=>{s.preventDefault(),localStorage.setItem(n,JSON.stringify(o[c]));const a=localStorage.getItem(n);console.log(a)})});function g(t){return new Date(t).toLocaleString("uk",{day:"numeric",month:"numeric",year:"numeric"})}function _({backdrop_path:t,genre_ids:e,overview:o,popularity:c,release_date:i,title:n,vote_average:s,vote_count:a}){return`
  <h2 class="upcoming-name">Upcoming this month</h2>
  <div class="upcoming-content">
      <img
        class="upcoming__img"
        src="https://image.tmdb.org/t/p/original/${t}"
        alt="${n}"/>

      <div class="upcoming__wrapper">
        <h3 class="upcoming__title">${n}</h3>
        <div class="upcoming-thumb">
          <ul class="upcoming-list left">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Release date</p>
              <p class="upcoming-list__date">${g(i)}</p>
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
              <p class="upcoming-list__popularity">${c.toFixed(1)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Genre</p>
              <p class="upcoming-list__genre">${e}</p>
            </li>
          </ul>
        </div>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${o}
        </p>
       
        
  </div>`}function d(t){r.innerHTML=t}const h="183c3cacc9c38c09c14d38798ccfe9d7",f="https://api.themoviedb.org";async function y(){const t=`${f}/3/trending/movie/week?api_key=${h}`;try{const c=(await(await l.get(t)).data).results;return console.log(c),c.slice(0,3)}catch(e){console.log(e)}}const v=document.querySelector(".weelky-trends-list");async function k(){try{const t=await y();v.innerHTML=p(t)}catch(t){console.error(t)}}k();
