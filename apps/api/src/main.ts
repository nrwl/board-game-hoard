import * as express from 'express';
import { getGames } from './app/game';
import { createReview, getReviews } from './app/review';
import { addItemToCart, getCart, updateItemInCart } from './app/store';

const app = express();
app.use(express.json());

app.get('/api/game', getGames);

app.get('/api/review/:game', getReviews);
app.post('/api/review/:game', createReview);

app.get('/api/cart', getCart);
app.post('/api/cart', addItemToCart);
app.put('/api/cart', updateItemInCart);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
