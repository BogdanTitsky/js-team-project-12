import { getMovieDetailsInfo } from '../reuseble/tmdb-api.js';
import { createModalMarkup } from '../reuseble/markups.js';

const modalContainer = document.querySelector('.modal-backdrop');

export function assignModalListeners() {
  const movieCards = document.querySelectorAll('.film-card-link');
  movieCards.forEach(link => {
    const movieId = link.getAttribute("movie_id");
    link.addEventListener('click', (event) => {
      event.preventDefault();
      openModal(movieId);
    })
  })
}

async function openModal(movieId) {
  const movieDatails = await getMovieDetailsInfo(movieId);
  modalContainer.innerHTML = createModalMarkup(movieDatails);
  showModal();
}

async function closeModal() {
  hideModal();
  modalContainer.innerHTML = ''
}
