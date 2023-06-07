import { makeMarkup } from '../reuseble/markups.js';
import { getTrendsMovie } from '../reuseble/tmdb-api.js';
import { fillRatings } from '../reuseble/star-rating';
import { assignModalListeners } from '../modal/modal.js';

const cardContainer = document.querySelector('.weelky-trends-list');

async function renderTrendsList() {
  try {
    const trendsList = await getTrendsMovie();

    cardContainer.innerHTML = await makeMarkup(trendsList, 1);
    fillRatings(cardContainer);
    assignModalListeners();
  } catch (error) {
    console.error(error);
  }
}

renderTrendsList();






