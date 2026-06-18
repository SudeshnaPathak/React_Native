import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';
describe('Counter component', () => {
  test('counter increments when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByText('Increment');
    fireEvent.click(button);
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText('Counter: 2')).toBeInTheDocument();
  });
});