import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders BP Calculator', () => {
  render(<App />);
  const linkElement = screen.getByText(/BP Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Systolic', () => {
  render(<App />);
  const linkElement = screen.getByText(/Systolic/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Diastolic', () => {
  render(<App />);
  const linkElement = screen.getByText(/Diastolic/i);
  expect(linkElement).toBeInTheDocument();
});
