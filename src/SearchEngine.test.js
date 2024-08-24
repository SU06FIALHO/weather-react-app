import { render, screen } from '@testing-library/react';
import SearchEngine from './SearchEngine';

test('renders learn react link', () => {
  render(<SearchEngine />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
