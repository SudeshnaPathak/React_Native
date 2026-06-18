import {screen, render, waitFor} from '@testing-library/react';
import ApiCall from './ApiCall';

beforeEach(() => {
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: 'delectus aut autem' }),
  })
);
});

test('ApiCall component fetches and displays data', async () => {
  render(<ApiCall />);
  const ele = await screen.findByText('delectus aut autem');
  expect(ele).toBeInTheDocument();
})