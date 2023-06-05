import axios from 'axios';

const trailerBtn = document.querySelector('.hero-trailer-btn');
const closeSvg = document.querySelector('.hero-PopUp-closeSvg');
const modal = document.querySelector('.hero-PopUp');

const apiKey = '183c3cacc9c38c09c14d38798ccfe9d7';

async function getTrailer() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/100/videos?api_key=${apiKey}&language=en-US`
  );
  const data = await response.data;
  const trailer = await data.results;
  console.log(data);
  return trailer;
}

trailerBtn.addEventListener('click', handlerWatchTrailer);
closeSvg.addEventListener('click', hideModal());

function handlerWatchTrailer() {
  getTrailer();
}

// function showModal() {
//   modal.classList.add('active');
// }

function hideModal() {
  modal.classList.add('active');
}
