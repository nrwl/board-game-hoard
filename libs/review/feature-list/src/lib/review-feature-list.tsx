import React from 'react';
import { Link } from 'react-router-dom';
import {
  TileGrid,
  Tile,
  ImageWrapper,
  Image,
  TileTitle,
  TileLeftCorner,
  TileRightCorner
} from '@bghoard/review/ui-tile';
import { useGames } from '@bghoard/review/data-access-games';
import { currencyFormat, ratingFormat } from '@bghoard/review/util-formatters';

/* eslint-disable-next-line */
export interface ReviewFeatureListProps {}

export const ReviewFeatureList = (props: ReviewFeatureListProps) => {
  const games = useGames();
  return (
    <TileGrid>
      {games.map(game => {
        return (
          <Link
            to={'/' + game.id}
            key={game.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Tile>
              {game.image && (
                <ImageWrapper>
                  <Image src={game.image} />
                </ImageWrapper>
              )}
              <TileTitle>{game.name}</TileTitle>
              <TileLeftCorner>
                {ratingFormat(game.rating)}
              </TileLeftCorner>
              <TileRightCorner>
                {currencyFormat(game.price)}
              </TileRightCorner>
            </Tile>
          </Link>
        );
      })}
    </TileGrid>
  );
};

export default ReviewFeatureList;
