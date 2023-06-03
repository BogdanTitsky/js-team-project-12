import"./main-ec808ebb.js";import{a as i,m as p}from"./card-markup-66a6f97c.js";const a=document.querySelector(".js-upcoming");console.log(a);async function m(){const t="https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7";return await i.get(t).then(({data:e})=>(console.log(e.results),e)).catch(e=>console.error(e))}m().then(({results:t})=>{const e=new Date,o=t.filter(c=>e<Date.parse(c.release_date));if(o.length===0){console.log("No");return}const n=Math.floor(Math.random()*o.length),s=g(o[n]);_(s)});function u(t){return new Date(t).toLocaleString("uk",{day:"numeric",month:"numeric",year:"numeric"})}function g({backdrop_path:t,genre_ids:e,overview:o,popularity:n,release_date:s,title:c,vote_average:r,vote_count:l}){return`
  <h2>Upcoming</h2>
      <img
        class="upcoming__img"
        src="https://image.tmdb.org/t/p/original/${t}"
        alt="${c}"/>

      <div class="upcoming__wrapper">
        <h3 class="upcoming__title">${c}</h3>

          <ul class="upcoming-list">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Release date</p>
              <p class="upcoming-list__date">${u(s)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Vote / Votes</p>
              <p class="upcoming-list__vote">
                <span class="vote"> ${r.toFixed(1)}</span> / <span class="vote">${l}</span>
              </p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Popularity</p>
              <p class="upcoming-list__pop">${n.toFixed(1)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Genre</p>
              <p class="upcoming-list__genre">${e}</p>
            </li>
          </ul>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${o}
        </p>

  <button type="button" class="upcoming__btn">
  Add to my library
</button>`}function _(t){a.innerHTML=t}const d="183c3cacc9c38c09c14d38798ccfe9d7",h="https://api.themoviedb.org";async function y(){const t=`${h}/3/trending/movie/week?api_key=${d}`;try{const n=(await(await i.get(t)).data).results;return console.log(n),n.slice(0,3)}catch(e){console.log(e)}}const f=document.querySelector(".weelky-trends-list");async function $(){try{const t=await y();f.innerHTML=p(t)}catch(t){console.error(t)}}$();
