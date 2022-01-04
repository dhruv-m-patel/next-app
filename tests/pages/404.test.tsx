import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../../src/pages/404';

describe('Errors/404', () => {
  test('it should render', () => {
    render(<NotFound />);
    expect(screen.getByText(/Page Not Found/)).toBeInTheDocument();
    expect(
      screen.getByText(
        /The page you’re looking for either does not exist or has been moved somewhere else./
      )
    ).toBeInTheDocument();
  });
});
