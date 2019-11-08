import React from 'react';
import { render } from '@testing-library/react';

import ReactPublish from './react-publish';

describe(' ReactPublish', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactPublish />);
    expect(baseElement).toBeTruthy();
  });
});
