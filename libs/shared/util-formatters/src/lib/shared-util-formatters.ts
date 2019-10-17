export const currencyFormat = (amount: number) => '$' + amount.toFixed(2);
export const ratingFormat = (rating: number) =>
  (rating === undefined ? '?' : rating.toFixed(0)) + '/5';
export const ratingFormatV2 = (rating: number, maxRating: number) =>
  (rating === undefined ? '?' : rating.toFixed(0)) + '/' + maxRating;
