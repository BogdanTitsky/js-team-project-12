import { makeMarkup } from '../reuseble/card-markup.js';
import getTrendsMovie from './movie-tmdb-api.js';

const cardContainer = document.querySelector('.weelky-trends-list');

// refs.weelkyTrendsList.addEventListener('load', onLoadWeeklyTrends);

// function onLoadWeeklyTrends(evn) {

// }

async function renderTrendsList() {
  try {
    const trendsList = await getTrendsMovie();
    cardContainer.innerHTML = makeMarkup(trendsList);
  } catch (error) {
    console.error(error);
  }
}

renderTrendsList();
