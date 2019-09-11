import React, { useEffect, useState } from 'react';
import { Game } from '@bghoard/api-interfaces';
import styled from '@emotion/styled';

export const TileGrid = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
`;

export const Tile = styled.div`
  border: solid 1px #ccc;
  border-radius: 5px;
  overflow: hidden;
  display: block;
  min-width: 200px;
  color: inherit;
  text-decoration: none;
  margin: 0.5em;
  &:hover {
    border-color: #5159ea;
  }
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #ccc;
`;

export const Image = styled.img`
  max-width: 100%;
  min-height: 100%;
`;

export const TileTitle = styled.h2`
  text-align: center;
`;

export const TileLeftCorner = styled.div`
  display: block;
  float: left;
  margin: -0.5em 0 1em 0.5em;
`;

export const TileRightCorner = styled.div`
  display: block;
  float: right;
  margin: -0.5em 0.5em 1em 0;
`;
export const currencyFormat = (amount: number) => '$' + amount.toFixed(2);
export const ratingFormat = (rating: number) =>
  (rating === undefined ? '?' : rating.toFixed(0)) + '/5';

export const App = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then(r => r.json())
      .then(setGames);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Board Game Hoard: Review</h1>
      </div>
      <TileGrid>
        {games.map(game => {
          return (
            <a
              href={'/' + game.id}
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
                <TileLeftCorner>{ratingFormat(game.rating)}</TileLeftCorner>
                <TileRightCorner>{currencyFormat(game.price)}</TileRightCorner>
              </Tile>
            </a>
          );
        })}
      </TileGrid>
    </>
  );
};

export default App;
