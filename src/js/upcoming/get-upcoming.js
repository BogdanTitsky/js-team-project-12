import { getUpcomingMovies } from '../reuseble/tmdb-api.js';

export async function getUpcoming() {
  const totalPages = 5;
  const upcomingMovies = [];

  for (let page = 1; page <= totalPages; page += 1) {
    const movies = await getUpcomingMovies(page);
    upcomingMovies.push(...movies);
  }

  return upcomingMovies;
}
