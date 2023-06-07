import axios from 'axios';

const apiKey = '183c3cacc9c38c09c14d38798ccfe9d7';

const popUpCloseSvg = document.querySelector('.hero-PopUp-closeSvg');
const heroPopUp = document.querySelector('.hero-PopUp');
const trailerModal = document.querySelector('.trailer-modal');
const overlay = document.querySelector('.overlay');
const modalCloseSvg = document.querySelector('.trailer-modal-closeSvg');

popUpCloseSvg.addEventListener('click', hidePopUp);
modalCloseSvg.addEventListener('click', hideModal);

export default async function openTrailerModal() {
  const btnTrailer = document.querySelector('.watch-trailer');

  btnTrailer.addEventListener('click', async e => {
    const movieId = e.target.dataset.id;

    try {
      const { key } = await getTrailer(movieId);

      const videoUrl = `https://www.youtube.com/embed/${key}`;

      trailerModal.insertAdjacentHTML('beforeend', modalTemplate(videoUrl));
      showModal();
    } catch (error) {
      showPopUp();
    }
  });
}

async function getTrailer(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
    );

    console.log(response.data.results[0]);

    return response.data.results[0];
  } catch (error) {
    console.log(error);
  }
}

function modalTemplate(videoUrl) {
  return `<div>
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
  btn.disabled = false;
}

function hideModal() {
  overlay.classList.remove('overlay-active');
  trailerModal.classList.remove('trailer-modal-active');
  document.body.style.overflow = '';
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
