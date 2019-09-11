import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ReviewUiTile from './review-ui-tile';

describe(' ReviewUiTile', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<ReviewUiTile />);
    expect(baseElement).toBeTruthy();
  });
});
