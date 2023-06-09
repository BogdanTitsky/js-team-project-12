import axios from 'axios';

const API_KEY = '183c3cacc9c38c09c14d38798ccfe9d7';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTrendsMovie(type = 'week', limit = 20, page = 1) {
  const url = `${BASE_URL}/trending/movie/${type}?api_key=${API_KEY}&page=${page}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const movies = data.results;
    return movies.slice(0, limit);
  } catch (error) {
    console.error('Error getting trending movies', error);
    return [];
  }
}

export async function getGenres() {
  const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const genres = data.genres;
    return genres;
  } catch (error) {
    console.error('Error getting genres', error);
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
    console.error('Error getting movie detail information', error);
  }
}

export async function getSearchMovie(query, page = 1) {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
    const data = await response.data;
    const movies = await data.results;
    data.total_pages;

    return { movies, totalPages: data.total_pages };
  } catch (error) {
    console.error('Error searching movies', error);
    return [];
  }
}

export async function getUpcomingMovies(page) {
  const url = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;

  try {
    const { data } = await axios.get(url);
    //console.log(data.results);
    return data.results;
  } catch (error) {
    console.error('Error getting updating movies', error);
  }
}

export async function getTrailer(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
    );

    console.log(response.data.results[0]);

    return response.data.results[0];
  } catch (error) {
    console.error('Error getting trailer.', error);
  }
}
