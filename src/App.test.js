import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('counter has initial value', () => {
  render(<App />)
  expect(screen.getByRole('counter')).toHaveTextContent('1')
})

test('renders an increase button', () => {
  render(<App />)
  expect(screen.getByRole('increase')).toHaveTextContent('+')
})

test('increase button increments by 1', () => {
  render(<App />)
  const button = screen.getByRole('increase')
  fireEvent.click(button)
  expect(screen.getByRole('counter')).toHaveTextContent('2')
})

test('renders a decrease button', () => {
  render(<App />)
  expect(screen.getByRole('decrease')).toHaveTextContent('-')
})
