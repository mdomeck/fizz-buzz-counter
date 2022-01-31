import { render, screen } from '@testing-library/react';
import App from './App';

test('counter has initial value', () => {
  render(<App />)
  expect(screen.getByRole('counter')).toHaveTextContent('1')
})

test('renders an increase button', () => {
  render(<App />)
  expect(screen.getByRole('increase')).toHaveTextContent('+')
})
