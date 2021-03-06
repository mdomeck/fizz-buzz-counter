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

test('decrease button stops at 1', () => {
  render(<App />)
  const button = screen.getByRole('decrease')
  fireEvent.click(button)
  expect(screen.getByRole('counter')).toHaveTextContent('1')
})

test('renders output', () => {
  render(<App />)
  expect(screen.getByRole('output')).toBeInTheDocument()
})

test('output returns Fizz', () => {
  render(<App />)
  const button = screen.getByRole('increase')
  fireEvent.click(button)
  fireEvent.click(button)
  expect(screen.getByRole('counter')).toHaveTextContent('3')
  expect(screen.getByRole('output')).toHaveTextContent('Fizz')
})

test('output returns Buzz', () => {
  render(<App />)
  const button = screen.getByRole('increase')
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  expect(screen.getByRole('counter')).toHaveTextContent('5')
  expect(screen.getByRole('output')).toHaveTextContent('Buzz')
})

test('output returns FizzBuzz', () => {
  render(<App />)
  const button = screen.getByRole('increase')
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  expect(screen.getByRole('counter')).toHaveTextContent('15')
  expect(screen.getByRole('output')).toHaveTextContent('FizzBuzz')
})
