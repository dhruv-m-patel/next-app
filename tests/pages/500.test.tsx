import React from 'react';
import { render, screen } from '@testing-library/react';
import InternalServerError from '../../src/pages/500';

describe('Errors/500', () => {
  test('it should render', () => {
    render(<InternalServerError />);
    expect(screen.getByText(/Internal Server Error/)).toBeInTheDocument();
    expect(
      screen.getByText(
        /An unexpected error occurred on server while processing your request, please try again./
      )
    ).toBeInTheDocument();
  });
});
