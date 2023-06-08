import axios from 'axios';

export async function getUpcoming() {
  const totalPages = 5;
  const upcomingMovies = [];

  for (let page = 1; page <= totalPages; page += 1) {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=183c3cacc9c38c09c14d38798ccfe9d7&language=en-US&page=${page}`;

    try {
      const { data } = await axios.get(url);
      upcomingMovies.push(...data.results);
      //console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  }

  return upcomingMovies;
}
