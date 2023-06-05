import{a as m}from"./footer-eca60421.js";import{g as u,a as g,m as d,f as _}from"./card-markup-306c0ea8.js";const f=document.querySelector(".js-upcoming"),h=document.querySelector("#upcoming-btn");async function y(){const t="https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7";try{const{data:e}=await m.get(t);return e}catch(e){console.error(e)}}async function v(t){try{return(await u()).filter(s=>t.includes(s.id)).map(s=>s.name).join(", ")}catch(e){console.log(e)}}y().then(async({results:t})=>{const e=new Date,n=t.filter(r=>e<Date.parse(r.release_date));if(n.length===0){console.log("No");return}const s=Math.floor(Math.random()*n.length),o=n[s].genre_ids,i=await v(o),a=w(n[s],i);$(a),console.log(n[s]);const c="key";h.addEventListener("click",r=>{r.preventDefault(),localStorage.setItem(c,JSON.stringify(n[s]));const p=localStorage.getItem(c);console.log(p)})});function k(t){return new Date(t).toLocaleString("uk",{day:"numeric",month:"numeric",year:"numeric"})}function w({backdrop_path:t,overview:e,popularity:n,release_date:s,title:o,vote_average:i,vote_count:a},c){return`
  <h2 class="upcoming-name">Upcoming this month</h2>
  <div class="upcoming-content">
      <img
        class="upcoming__img"
        src="https://image.tmdb.org/t/p/original/${t}"
        alt="${o}"/>

      <div class="upcoming__wrapper">
        <h3 class="upcoming__title">${o}</h3>
        <div class="upcoming-thumb">
          <ul class="upcoming-list left">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Release date</p>
              <p class="upcoming-list__date">${k(s)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Vote / Votes</p>
              <p class="upcoming-list__vote">
                <span class="vote"> ${i.toFixed(1)}</span> / <span class="vote">${a}</span>
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
              <p class="upcoming-list__genre">${c}</p>
            </li>
          </ul>
        </div>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${e}
        </p>
       
        
  </div>`}function $(t){f.innerHTML=t}const l=document.querySelector(".weelky-trends-list");async function x(){try{const t=await g();l.innerHTML=await d(t),_(l)}catch(t){console.error(t)}}x();
