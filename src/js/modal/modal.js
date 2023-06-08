import { getMovieDetailsInfo } from '../reuseble/tmdb-api.js';
import { createModalMarkup } from '../reuseble/markups.js';

const modalContainer = document.querySelector('.modal-backdrop');
let closeModalBtn;
let modalRef;

export function assignModalListeners() {
  const movieCards = document.querySelectorAll('.film-card-link');
  movieCards.forEach(link => {
    const movieId = link.getAttribute('movie_id');
    link.addEventListener('click', event => {
      event.preventDefault();
      openModal(movieId);
    });
  });
}

async function openModal(movieId) {
  const movieDatails = await getMovieDetailsInfo(movieId);
  modalContainer.innerHTML = createModalMarkup(movieDatails);
  showModal();
}
function showModal() {
  modalRef = document.querySelector('.modal-section');
  modalRef.style.display = 'block';
  closeModalBtn = document.querySelector('.modal__close');
  closeModalBtn.addEventListener('click', onModalBtnClick);
  document.addEventListener('keydown', onEscapeKeyDown);
  modalContainer.addEventListener('click', onModalBackdropClick);
}

function onModalBtnClick() {
  closeModal();
}

function onEscapeKeyDown(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
function onModalBackdropClick(event) {
  if (event.target === modalContainer) {
    closeModal();
  }
}
function closeModal() {
  modalContainer.innerHTML = '';
  modalRef.style.display = 'none';
  closeModalBtn.removeEventListener('click', onModalBtnClick);
  document.removeEventListener('keydown', onEscapeKeyDown);
  modalContainer.removeEventListener('click', onModalBackdropClick);
}
