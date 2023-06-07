import axios from 'axios';

const API_KEY = '183c3cacc9c38c09c14d38798ccfe9d7';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTrendsMovie(type = "week", limit = 3) {
  const url = `${BASE_URL}/trending/movie/${type}?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const movies = data.results;
    console.log(movies);
    return movies.slice(0, limit);
  } catch (error) {
    console.log(error);
  }
}

export async function getGenres() {
  const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const genres = data.genres;
    console.log(genres);
    return genres;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieDetailsInfo(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const movieDetails = await response.data;
    console.log(movieDetails);
    return movieDetails;
  } catch (error) {
    console.log(error);
  }
}
