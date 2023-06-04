import axios from 'axios';

const trailerBtn = document.querySelector('.hero-trailer-btn');

const apiKey = '183c3cacc9c38c09c14d38798ccfe9d7';

async function fetchTrailers() {
  const response = await axios.get(`
  https://api.themoviedb.org/3/movie/100/videos?api_key=${apiKey}&language=en-US`);
  const data = await response.data;
  const trailer = await data.results;
  console.log(data);
  return trailer;
}

trailerBtn.addEventListener('click', handleWatchTrailer);

async function handleWatchTrailer() {
  fetchTrailers();
}
