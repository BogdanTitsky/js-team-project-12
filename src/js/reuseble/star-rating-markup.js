export default function makeStarRating(vote_average) {
  return `
    <div class="rating">
      <div class="rating-body">
          <div class="rating-active"></div>
          <div class="rating-items">
              <input type="radio" class="rating-item" value="1" name="rating">
              <input type="radio" class="rating-item" value="2" name="rating">
              <input type="radio" class="rating-item" value="3" name="rating">
              <input type="radio" class="rating-item" value="4" name="rating">
              <input type="radio" class="rating-item" value="5" name="rating">
          </div>
       </div>
       <div class="rating-value">${vote_average}</div>
    </div>

    `;
}

// export {makeStarRating};


