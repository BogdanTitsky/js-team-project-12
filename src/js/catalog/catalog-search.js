import axios from 'axios';
import { makeMarkup } from '../reuseble/card-markup';
import Notiflix from 'notiflix';


import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';


import throttle from 'lodash.throttle';
import { fillRatings } from '../reuseble/star-rating';

const apiKey = '183c3cacc9c38c09c14d38798ccfe9d7';

async function getSearchMovie(query, page = 1) {
  try {
    const response = await axios.get(`
https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`);
const data = await response.data;
const movie = await data.results;
console.log(movie)
return movie;
  }
  catch (error) {
    console.error('Помилка отримання масиву фільмів:', error);
    return [];
  }
}
const refs = {
form: document.querySelector('.form-search'),
filmList: document.querySelector('.weelky-trends-list'),
textBox: document.querySelector('.catalog-text-box'),
paginationContainer: document.querySelector('#tui-pagination-container')
}


let currentPage = 1;
let pagination = null;



refs.form.addEventListener('submit', throttle(onSubmitForm, 2000))


async function onSubmitForm(e) {
   e.preventDefault();
  const form = e.currentTarget;
  const value = form.elements.search.value.trim();


  if (value === "") {
   Notiflix.Notify.failure('No value!');
return
}
clearMarkup();
const getMovie = await getSearchMovie(value);
await renderMovieList(value, currentPage);

if (getMovie.length === 0) {
   refs.textBox.classList.remove('hidden-text')
    return
   }
   refs.textBox.classList.add('hidden-text')
  const markupMovie = await makeMarkup(getMovie);
  movieList(markupMovie);
  fillRatings(refs.filmList);
}
async function renderMovieList(page) {
  try {
    const movies = await getSearchMovie(page);
    const markup = await makeMarkup(movies);

    movieList(markup);
    if (pagination !== null) {
      pagination.off();
    }
    if (movies.length > 0) {
      initPagination(movies.length);
    }
  } catch (error) {
    console.error('Помилка при рендерингу списку фільмів:', error);
  }
}

function movieList(markup) {
   refs.filmList.innerHTML = markup;
}

function clearMarkup() {
   refs.filmList.innerHTML = '';
}

function initPagination(totalPages) {
  const options = {
    totalItems: totalPages,
    itemsPerPage: 20,
    visiblePages: 5,
    page: currentPage,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination(refs.paginationContainer, options);

  pagination.on('afterMove', async event => {
    currentPage = event.page;
    await renderMovieList(refs.form.elements.search.value.trim(), currentPage);
  });
}
renderMovieList('', currentPage);

const buttonClose = document.querySelector('.btn-close');
const inputArea = document.querySelector('.search-input__area')



inputArea.addEventListener('keyup', ()=> {
  buttonHider()
})

buttonClose.addEventListener('click', ()=> {
  inputArea.value='';
  buttonClose.classList.add('btn-none');
})

function butFunc () {
  buttonClose.classList.toggle('btn-none')
}
butFunc();

function buttonHider () {
  console.log('buttonHider start');
  if (inputArea.value.length===0) {
    buttonClose.classList.add('btn-none')
  }
  else {
    buttonClose.classList.remove('btn-none')
    console.log ('else')
  }


}
