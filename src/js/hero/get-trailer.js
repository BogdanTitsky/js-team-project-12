import { getTrailer } from '../reuseble/tmdb-api.js';

const popUpCloseSvg = document.querySelector('.hero-PopUp-closeSvg');
const heroPopUp = document.querySelector('.hero-PopUp');
const trailerModal = document.querySelector('.trailer-modal');
const overlay = document.querySelector('.overlay');
const modalCloseSvg = document.querySelector('.trailer-modal-closeSvg');

popUpCloseSvg.addEventListener('click', hidePopUp);
modalCloseSvg.addEventListener('click', hideModal);

export default async function openTrailerModal() {
  const btnTrailer = document.querySelector('.watch-trailer');

  btnTrailer.addEventListener(
    'click',
    async e => {
      const movieId = e.target.dataset.id;

      try {
        const { key } = await getTrailer(movieId);

        const videoUrl = `https://www.youtube.com/embed/${key}`;

        trailerModal.insertAdjacentHTML('beforeend', modalTemplate(videoUrl));

        showModal();
      } catch (error) {
        showPopUp();
      }
    },
    { once: true }
  );
}

function modalTemplate(videoUrl) {
  return `<div class='video'>
<div>
  <iframe
    id='trailer-video'
    class='trailer-modal-iframe'
    src='${videoUrl}'
    frameborder='0'
    allowfullscreen
  ></iframe>
</div>
</div>`;
}

function showModal() {
  overlay.classList.add('overlay-active');
  trailerModal.classList.add('trailer-modal-active');
  document.body.style.overflow = 'hidden';
}

function hideModal() {
  overlay.classList.remove('overlay-active');
  trailerModal.classList.remove('trailer-modal-active');
  document.body.style.overflow = '';

  const video = document.querySelector('.video');
  if (video) {
    video.remove();
  }
}

function showPopUp() {
  overlay.classList.add('overlay-active');
  heroPopUp.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function hidePopUp() {
  overlay.classList.remove('overlay-active');
  heroPopUp.classList.remove('active');
  document.body.style.overflow = '';
}

if (overlay) {
  overlay.addEventListener('click', event => {
    if (event.target.className !== 'video') {
      hideModal();
    }
  });

  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      hideModal();
    }
  });
}
