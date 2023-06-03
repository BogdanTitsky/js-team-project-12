import axios from 'axios';

const API_KEY = '183c3cacc9c38c09c14d38798ccfe9d7';
const BASE_URL = 'https://api.themoviedb.org';

export default async function getTrendsMovie() {
  const url = `${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const movies = data.results;
    console.log(movies);
    return movies.slice(0, 3);
  } catch (error) {
    console.log(error);
  }
}

