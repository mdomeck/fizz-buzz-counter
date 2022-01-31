import { render, screen } from '@testing-library/react';
import App from './App';

test('counter has initial value', () => {
  render(<App />)
  expect(screen.getByRole('counter')).toHaveTextContent('1')
});
