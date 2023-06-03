import axios from 'axios';
import { makeMarkup } from './card-markup';
import Notiflix from 'notiflix';
const apiKey = '183c3cacc9c38c09c14d38798ccfe9d7';

async function getSearchMovie(query, page=1) {
   const response = await axios.get(`
https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`);
const data = await response.data;
const movie = await data.results;
console.log(movie)
return movie;
}

const refs = {
form: document.querySelector('.form-search'),
filmList: document.querySelector('.catalog-films-list')
}

refs.form.addEventListener('submit', onSubmitForm)

async function onSubmitForm(e) {
   e.preventDefault();
  const form = e.currentTarget;
  const value = form.elements.search.value.trim();

  if (value === "") {
   Notiflix.Notify.failure('No query!');
return
}

  const getMovie = await getSearchMovie(value);

if (getMovie.length === 0) {
   return movieList(`<p class='text-error'>OOPS...
    We are very sorry!
    We don't have any results matching your search.</p>`)
   }
   
  const markupMovie = await makeMarkup(getMovie);
  movieList(markupMovie);
}

function movieList(markup) {
   refs.filmList.innerHTML = markup;
}


