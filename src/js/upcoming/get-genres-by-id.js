import { getGenres } from '../reuseble/tmdb-api';

export async function getGenresById(arr) {
  try {
    const allGenres = await getGenres();
    const movieGenres = allGenres
      .filter(g => arr.includes(g.id))
      .map((g, index) => {
        if (index === 0) {
          return g.name;
        } else {
          return g.name.toLowerCase();
        }
      })
      .join(', ');
    // console.log(movieGenres);
    return movieGenres;
  } catch (error) {
    console.log(error);
  }
}
