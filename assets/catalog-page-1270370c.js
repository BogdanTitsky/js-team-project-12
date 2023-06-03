import"./main-ec808ebb.js";import{a as r}from"./axios-4a70c6fc.js";const n=document.querySelector(".catalog-films-list"),m="183c3cacc9c38c09c14d38798ccfe9d7";async function l(){const e=`https://api.themoviedb.org/3/trending/movie/week?api_key=${m}&language=en-US`;try{return(await r.get(e)).data.results}catch(t){return console.error("Помилка отримання масиву фільмів:",t),[]}}async function u(){try{const e=await l(),t=s(e);n.innerHTML=t}catch(e){console.error("Помилка при рендерингу списку фільмів:",e)}}function s(e){return e.map(({poster_path:t,title:a,vote_average:c,release_date:o})=>`
<li>
  <a href="" class="photo-card">
    <img src="https://image.tmdb.org/t/p/w300${t}" alt="${a}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>${a} </b>
      </p>
      <p class="info-item">
        <b>${c}</b>
      </p>
      <p class="info-item">
        <b>${o}</b>
      </p>
    </div>
  </a>
</li>`).join("")}u();const p="183c3cacc9c38c09c14d38798ccfe9d7";async function f(e,t=1){const o=await(await(await r.get(`
https://api.themoviedb.org/3/search/movie?api_key=${p}&query=${e}&page=${t}`)).data).results;return console.log(o),o}const i={form:document.querySelector(".form-search"),filmList:document.querySelector(".catalog-films-list")};i.form.addEventListener("submit",d);async function d(e){e.preventDefault();const a=e.currentTarget.elements.search.value.trim(),c=await f(a),o=await s(c);g(o),console.log(o)}function g(e){i.filmList.innerHTML=e}
