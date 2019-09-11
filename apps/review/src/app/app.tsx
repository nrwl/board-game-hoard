import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ReviewFeatureDetails } from '@bghoard/review/feature-details';
import { ReviewFeatureList } from '@bghoard/review/feature-list';

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/review">
        <h1 style={{ textAlign: 'center' }}>Board Game Hoard: Review</h1>
        <Route exact path="/" render={() => <ReviewFeatureList />} />
        <Route
          path="/:game"
          render={({ match }) => (
            <ReviewFeatureDetails gameId={match.params.game} />
          )}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
