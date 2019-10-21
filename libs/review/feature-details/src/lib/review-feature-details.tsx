import { Review } from '@bghoard/api-interfaces';
import { useGames } from '@bghoard/review/data-access-games';
import { currencyFormat, ratingFormat } from '@bghoard/shared/util-formatters';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export interface ReviewFeatureDetailsProps {
  gameId: string;
}

export const ReviewFeatureDetails = ({ gameId }) => {
  const games = useGames();
  const game = games.find(g => g.id === gameId);

  const [reviewForm, setReviewForm] = useState<Review>({
    game: game && game.id,
    content: '',
    rating: 0
  });

  function createReview() {
    fetch('/api/review/' + (game && game.id), {
      body: JSON.stringify(reviewForm),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(() => {
      setReviewForm({
        game: game.id,
        rating: 0,
        content: ''
      });
    });
  }

  if (!game) {
    return null;
  }

  return (
    <>
      <img
        src={game.image}
        alt={game.name}
        style={{ float: 'right', marginLeft: '1em', maxWidth: '50vw' }}
      />
      <Link to={'../'}>All Games</Link>
      <h2>{game.name}</h2>
      <p>{game.description}</p>
      <dl>
        <dt>Rating:</dt>
        <dd>{ratingFormat(game.rating, 5)}</dd>
        <br />
        <dt>Price:</dt>
        <dd>{currencyFormat(game.price)}</dd>
      </dl>

      <form onSubmit={createReview}>
        <fieldset>
          <legend>Write a Review</legend>
          <p>
            <label>
              <strong>Rating</strong>
              <br />
              <input
                type="number"
                name="rating"
                min="0"
                max="5"
                value={reviewForm.rating}
                onChange={event =>
                  setReviewForm({ ...reviewForm, rating: +event.target.value })
                }
              />
            </label>
          </p>
          <p>
            <label>
              <strong>Review</strong>
              <br />
              <textarea
                name="content"
                style={{ width: '100%' }}
                value={reviewForm.content}
                onChange={event =>
                  setReviewForm({ ...reviewForm, content: event.target.value })
                }
              />
            </label>
          </p>
          <button type="submit">Submit Review</button>
        </fieldset>
      </form>

      <h3 style={{ clear: 'right' }}>Reviews</h3>
      {game.reviews.map((review, index) => (
        <article
          key={index}
          style={{ borderBottom: 'solid 1px #ccc', marginLeft: '1em' }}
        >
          <p>
            <strong>{ratingFormat(review.rating, 5)}</strong>
          </p>
          <p>{review.content}</p>
        </article>
      ))}
    </>
  );
};
