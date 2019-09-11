import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ReviewDataAccessGames from './review-data-access-games';

describe(' ReviewDataAccessGames', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<ReviewDataAccessGames />);
    expect(baseElement).toBeTruthy();
  });
});
