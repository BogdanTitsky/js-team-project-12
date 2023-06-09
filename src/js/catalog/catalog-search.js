import { createMovieCardsMarkup } from '../reuseble/markups.js';
import Notiflix from 'notiflix';
import Pagination from 'tui-pagination';
import throttle from 'lodash.throttle';
import { fillRatings } from '../reuseble/star-rating';
import { assignMovieDetailsModalListener } from '../modal/modal.js';
import { getSearchMovie } from '../reuseble/tmdb-api.js';

const refs = {
  form: document.querySelector('.form-search'),
  filmList: document.querySelector('.weelky-trends-list'),
  textBox: document.querySelector('.catalog-text-box'),
  paginationContainer: document.querySelector('#tui-pagination-container'),
};

let currentPage = 1;
let pagination = null;

refs.form.addEventListener('submit', throttle(onSubmitForm, 2000));

async function onSubmitForm(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const query = form.elements.search.value.trim();

  if (query === '') {
    Notiflix.Notify.failure('No value!');
    return;
  }
  clearMarkup();
  const {movies} = await getSearchMovie(query);
  await renderMovieList(query, currentPage);

  if (movies.length === 0) {
    refs.textBox.classList.remove('hidden-text');
    return;
  }
  refs.textBox.classList.add('hidden-text');
  const markupMovie = await createMovieCardsMarkup(movies);
  movieList(markupMovie);
  fillRatings(refs.filmList);
  assignMovieDetailsModalListener(refs.filmList);
}

async function renderMovieList(query, page) {
  try {
    const {movies, totalPages} = await getSearchMovie(query, page);
    const markup = await createMovieCardsMarkup(movies);

    movieList(markup);
    if (pagination !== null) {
      pagination.reset();
    }
    if (movies.length > 0) {
      initPagination(totalPages);
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
    visiblePages: 4,
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

  pagination = new Pagination(refs.paginationContainer, options);

  pagination.on('afterMove', async event => {
    currentPage = event.page;
    await renderMovieList(refs.form.elements.search.value.trim(), currentPage);
  });
}

renderMovieList('', currentPage);

const buttonClose = document.querySelector('.btn-close');
const inputArea = document.querySelector('.search-input__area');

inputArea.addEventListener('keyup', () => {
  buttonHider();
});

buttonClose.addEventListener('click', () => {
  inputArea.value = '';

  buttonClose.classList.add('btn-none');
});

function butFunc() {
  buttonClose.classList.toggle('btn-none');
}

butFunc();

function buttonHider() {
  console.log('buttonHider start');
  if (inputArea.value.length === 0) {
    buttonClose.classList.add('btn-none');
  } else {
    buttonClose.classList.remove('btn-none');
    console.log('else');
  }
}
