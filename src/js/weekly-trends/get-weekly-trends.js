import { createMovieCardsMarkup } from '../reuseble/markups.js';
import { getTrendsMovie } from '../reuseble/tmdb-api.js';
import { fillRatings } from '../reuseble/star-rating';
import { assignMovieDetailsModalListener } from '../modal/modal.js';

const cardContainer = document.querySelector('.weelky-trends-list');

async function renderTrendsList() {
  try {
    const trendsList = await getTrendsMovie("week", 3);

    cardContainer.innerHTML = await createMovieCardsMarkup(trendsList, 1);
    fillRatings(cardContainer);
    assignMovieDetailsModalListener(cardContainer);
  } catch (error) {
    console.error(error);
  }
}


renderTrendsList();






