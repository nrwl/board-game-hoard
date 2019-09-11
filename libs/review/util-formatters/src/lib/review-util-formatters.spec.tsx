import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ReviewUtilFormatters from './review-util-formatters';

describe(' ReviewUtilFormatters', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<ReviewUtilFormatters />);
    expect(baseElement).toBeTruthy();
  });
});
