import { getMovieDetailsInfo } from '../reuseble/tmdb-api.js';
import { createMoveiDetailsMarkup } from '../reuseble/markups.js';
import { isMovieStored, toggleStoredMovie } from '../reuseble/local-storage.js';

const modalContainer = document.getElementById('modal-backdrop');
let closeModalBtn;
let modalRef;

// Movie Details Modal
export function assignMovieDetailsModalListener(container) {
  const movieCards = container.querySelectorAll('.film-card-link');
  movieCards.forEach(link => {
    link.addEventListener('click', movieDetailsModalListener);
  });
}

export async function movieDetailsModalListener(event) {
  event.preventDefault();
  const movieId = event.currentTarget.dataset.id;
  const movieDatails = await getMovieDetailsInfo(movieId);
  // console.log(movieDatails);

  modalContainer.innerHTML = createMoveiDetailsMarkup(movieDatails);
  showModal();

  const modalBtnAdd = document.querySelector('.modal-btn');
  // console.log(modalBtnAdd);

  function changeBtnName() {
    const exists = isMovieStored(movieDatails.id);

    if (!exists) {
      modalBtnAdd.classList.remove('remove-btn');
      modalBtnAdd.textContent = 'Add to my library';
    } else {
      modalBtnAdd.classList.add('remove-btn');
      modalBtnAdd.textContent = 'Remove from my library';
    }
  }

  modalBtnAdd.addEventListener('click', e => {
    e.preventDefault();
    toggleStoredMovie(movieDatails);
    changeBtnName();
  });

  changeBtnName();
}

export function showModal() {
  modalRef = document.querySelector('.modal-section');
  document.body.style.overflow = 'hidden';
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
  document.body.style.overflow = '';
  modalRef.style.display = 'none';
  modalContainer.innerHTML = '';
  closeModalBtn.removeEventListener('click', onModalBtnClick);
  document.removeEventListener('keydown', onEscapeKeyDown);
  modalContainer.removeEventListener('click', onModalBackdropClick);
}
