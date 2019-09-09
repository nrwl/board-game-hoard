import { Game } from '@bghoard/api-interfaces';

const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const randomReviews = (game: string) => {
  return new Array(randomInteger(1, 3)).fill({}).map(() => ({
    game,
    rating: randomInteger(0, 5),
    content: 'Lorem ipsum dolor sit amet'
  }));
};

export const games: Game[] = [
  {
    id: 'settlers-in-the-can',
    name: 'Settlers in the Can',
    image: '/assets/beans.png', // 'https://media.giphy.com/media/xUNda3pLJEsg4Nedji/giphy.gif',
    description:
      'Help your bug family claim the best real estate in a spilled can of beans.',
    price: 35,
    reviews: randomReviews('settlers-in-the-can')
  },
  {
    id: 'chess-pie',
    name: 'Chess Pie',
    image: '/assets/chess.png', // 'https://media.giphy.com/media/iCZyBnPBLr0dy/giphy.gif',
    description: 'A circular game of Chess that you can eat as you play.',
    price: 15,
    reviews: randomReviews('chess-pie')
  },
  {
    id: 'purrfection',
    name: 'Purrfection',
    image: '/assets/cat.png', // 'https://media.giphy.com/media/12xMvwvQXJNx0k/giphy.gif',
    description: 'A cat grooming contest goes horribly wrong.',
    price: 45,
    reviews: randomReviews('purrfection')
  }
];

export const getGames = (req, res) => {
  res.send(
    games.map(game => ({
      ...game,
      rating: game.reviews.reduce(
        (avg, next) => avg + next.rating / game.reviews.length,
        0
      )
    }))
  );
};
