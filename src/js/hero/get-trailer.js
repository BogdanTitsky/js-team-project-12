import axios from 'axios';

const closeSvg = document.querySelector('.hero-PopUp-closeSvg');
const modal = document.querySelector('.hero-PopUp');
const markupTrailer = document.querySelector('.trailer-modal');

closeSvg.addEventListener('click', hideModal);

const apiKey = '183c3cacc9c38c09c14d38798ccfe9d7';

openTrailerModal();

async function openTrailerModal() {
  const watchTrailerButtons = document.querySelectorAll('.watch-trailer');
  watchTrailerButtons.forEach(btn => {
    btn.addEventListener('click', async e => {
      const movieId = e.target.dataset.id;
      console.log(movieId);

      try {
        const { key } = await getTrailer(movieId);
        const videoUrl = `https://www.youtube.com/embed/${key}`;

        markupTrailer.insertAdjacentHTML(
          'beforeend',
          successModalTemplate(videoUrl)
        );
      } catch (error) {
        showModal();
      }
    });
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

function successModalTemplate(videoUrl) {
  return `<div class='watch-modal'>
<div class='watch-modal__content'>
  <iframe
    id='trailer-video'
    class='watch-modal__iframe'
    src='${videoUrl}'
    frameborder='0'
    allowfullscreen
  ></iframe>
</div>
</div>`;
}

function showModal() {
  modal.classList.add('active');
}

function hideModal() {
  modal.classList.remove('active');
}
