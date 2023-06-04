// const ratingDivs = document.querySelector('.rating');

// if (ratingDivs.length === 0) {
//   console.log('rating error');
// } else {
//   initRatings();
// }

function initRatings(ratingDivs) {
  for (let i = 0; i < ratingDivs.length; i += 1) {
    const ratingDiv = ratingDivs[i];
    const ratingValue = ratingDiv.querySelector('.rating-value').innerHTML;
    const ratingActiveDiv = ratingDiv.querySelector('.rating-active::before');
    setRatingActiveWidth(ratingValue, ratingActiveDiv);
  }
}

function setRatingActiveWidth(ratingValue, ratingActiveDiv) {
  const ratingActiveWidth = (ratingValue * 10);
  ratingActiveDiv.style.width = `${ratingActiveWidth}%`;
}

export function fillRatings(container) {
  const ratingDivs = container.querySelectorAll('.rating')
  if (ratingDivs.length === 0) {
    console.log('rating error');
  } else {
    initRatings(ratingDivs);
  }
}