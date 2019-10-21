export const currencyFormat = (amount: number) => '$' + amount.toFixed(2);
export const ratingFormat = (rating: number, maxRating: number) =>
  (rating === undefined ? '?' : rating.toFixed(0)) + '/' + maxRating;
