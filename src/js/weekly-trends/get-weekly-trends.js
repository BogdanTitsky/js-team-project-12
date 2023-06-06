import { makeMarkup } from '../reuseble/card-markup.js';
import { getTrendsMovie } from '../reuseble/tmdb-api.js';
import { fillRatings } from '../reuseble/star-rating';

const cardContainer = document.querySelector('.weelky-trends-list');

async function renderTrendsList() {
  try {
    const trendsList = await getTrendsMovie();

    cardContainer.innerHTML = await makeMarkup(trendsList, 1);
    fillRatings(cardContainer)
  } catch (error) {
    console.error(error);
  }
}

renderTrendsList();






