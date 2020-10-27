import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('has button', () => {
  render(<App />);
  const linkElement = screen.getByText(/button-disabled/i);
  expect(linkElement).toBeInTheDocument();
});
