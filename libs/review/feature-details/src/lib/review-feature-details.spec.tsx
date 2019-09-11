import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ReviewFeatureDetails from './review-feature-details';

describe(' ReviewFeatureDetails', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<ReviewFeatureDetails />);
    expect(baseElement).toBeTruthy();
  });
});
