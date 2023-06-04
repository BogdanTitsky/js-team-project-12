import axios from "axios";
const keyApi = `183c3cacc9c38c09c14d38798ccfe9d7`;
const contentBlock = document.querySelector(".hero-content")
async function fetchRandomFilm(){
    try {
        const info = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${keyApi}&language=en-US`);
        const informationMovie = info.data;
        const movieArray = informationMovie.results;
        return movieArray;
    } catch (error) {
        console.log("Помилка при рендерингу списку фільмів:", error);
    }
}

 function loadHeroMarkup(data){
    const heroMarkup = data.map(({title, backdrop_path, vote_average, overview}) =>{
        
           return `
           <h1 class="hero-title">${title}</h1>
           <p>Тут повинні бути  зірочки замість цифри: <br> 
           ${vote_average}</p>
           <p class="hero-text">${overview}
           </p>
           <button type="button" class="get-started-button">Get Started</button>
           `;
       }).join(``);
       contentBlock.innerHTML =``;
       contentBlock.insertAdjacentHTML(`beforeend`, heroMarkup);
   } 
// functions workflow

fetchRandomFilm()
    .then((movieArray) => {
      loadHeroMarkup(movieArray);
    })
    .catch((error) => {
      console.log("Помилка при рендерингу тренду дня!:", error);
    });