import { getStoredMovies } from '../reuseble/local-storage.js';
import { fillRatings, makeStarRating } from '../reuseble/star-rating';
import { createMovieCardsMarkup } from '../reuseble/markups.js';
import { assignMovieDetailsModalListener } from '../modal/modal.js';
import getGenresMap from '../reuseble/genres.js';

const libraryContainer = document.querySelector('.libr-list');
const librCatch = document.querySelector('.libr-catch');

async function renderLibrary() {
  const movies = getStoredMovies()
  libraryContainer.insertAdjacentHTML('beforeend', await createMovieCardsMarkup(movies, 9));
  fillRatings(libraryContainer);
  assignMovieDetailsModalListener(libraryContainer);

  if (movies.length >= 1) {
    librCatch.classList.add('display');
    
  }
   if (movies.length >= 6) {
     
     loadmorebtn.style.display = 'block';
   }
}

renderLibrary();


//load more




const loadmorebtn = document.querySelector('.loadmorebtn');
let currentItems = 6

loadmorebtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(15)
  const Elements = [...document.querySelectorAll('.libr-list li')];
  for (let i = currentItems; i < currentItems +6 ; i ++) {
    if (Elements[i]) {
      Elements[i].style.display = "block"
    }
    if (Elements.lastIndexOf) {
      loadmorebtn.style.display= 'none'
    }
  }
  currentItems += 6;
} );


