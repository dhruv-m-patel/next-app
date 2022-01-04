import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../src/pages/index';

describe('HomePage', () => {
  test('it should render', () => {
    render(<HomePage articles={[]} />);
    expect(screen.getByText(/Welcome Home/)).toBeInTheDocument();
  });
});
