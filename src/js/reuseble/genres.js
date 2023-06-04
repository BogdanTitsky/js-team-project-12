import { getGenres } from './tmdb-api';

let genresMap;

export default async function getGenresMap() {
  if (genresMap === undefined) {
    try {
      const genresList = await getGenres();
      genresMap = genresList.reduce((map, { id, name }) => {
        {
          map[id] = name;
          return map;
        }
      }, {});

    } catch (error) {
      console.error(error);
    }
  }

  return genresMap;
}
