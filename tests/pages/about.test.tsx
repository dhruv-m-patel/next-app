import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../src/pages/about';

describe('AboutPage', () => {
  test('it should render', () => {
    render(<About />);
    expect(screen.getByText(/Welcome to About Page/)).toBeInTheDocument();
  });
});
