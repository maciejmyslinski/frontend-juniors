import React from 'react';
import { render } from 'react-testing-library';
import { Home } from '.';

describe('Home', () => {
  it('renders an input element', () => {
    const queries = render(<Home />);
    queries.getByLabelText('Search:');
  });
});
