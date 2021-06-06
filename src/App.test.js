import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashes', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bienvenido al buscador de Gif's/i);
  expect(linkElement).toBeInTheDocument();
});
test('search form working', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')
  fireEvent.change(input, { target: {value: 'Cats'} })
  fireEvent.click(button)
  const title = await screen.findByText('CATS')
  expect(title).toBeInTheDocument()
})
