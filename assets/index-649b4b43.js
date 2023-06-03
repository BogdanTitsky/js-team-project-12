import"./main-ec808ebb.js";import{a as p}from"./axios-4a70c6fc.js";const i=document.querySelector(".js-upcoming");console.log(i);async function r(){const t="https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7";return await p.get(t).then(({data:o})=>(console.log(o.results),o)).catch(o=>console.error(o))}r().then(({results:t})=>{const o=new Date,e=t.filter(n=>o<Date.parse(n.release_date));if(e.length===0){console.log("No");return}const c=Math.floor(Math.random()*e.length),s=u(e[c]);g(s)});function m(t){return new Date(t).toLocaleString("uk",{day:"numeric",month:"numeric",year:"numeric"})}function u({backdrop_path:t,genre_ids:o,overview:e,popularity:c,release_date:s,title:n,vote_average:a,vote_count:l}){return`
  <h2>Upcoming</h2>
      <img
        class="upcoming__img"
        src="https://image.tmdb.org/t/p/original/${t}"
        alt="${n}"/>

      <div class="upcoming__wrapper">
        <h3 class="upcoming__title">${n}</h3>

          <ul class="upcoming-list">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Release date</p>
              <p class="upcoming-list__date">${m(s)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Vote / Votes</p>
              <p class="upcoming-list__vote">
                <span class="vote"> ${a.toFixed(1)}</span> / <span class="vote">${l}</span>
              </p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Popularity</p>
              <p class="upcoming-list__pop">${c.toFixed(1)}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Genre</p>
              <p class="upcoming-list__genre">${o}</p>
            </li>
          </ul>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${e}
        </p>

  <button type="button" class="upcoming__btn">
  Add to my library
</button>`}function g(t){i.innerHTML=t}
