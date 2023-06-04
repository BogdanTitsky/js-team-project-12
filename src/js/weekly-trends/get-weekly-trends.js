import { makeMarkup } from '../reuseble/card-markup.js';
import { getTrendsMovie } from '../reuseble/tmdb-api.js';
import { fillRatings } from './star-rating';

const cardContainer = document.querySelector('.weelky-trends-list');

async function renderTrendsList() {
  try {
    const trendsList = await getTrendsMovie();
    cardContainer.innerHTML = await makeMarkup(trendsList);
    fillRatings(cardContainer)
  } catch (error) {
    console.error(error);
  }
}

renderTrendsList();
