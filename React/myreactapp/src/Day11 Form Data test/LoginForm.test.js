import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('renders login form', () => {
  render(<LoginForm />);
  const usernameInput = screen.getByLabelText(/username/i);
  expect(usernameInput).toBeInTheDocument();
  const button = screen.getByRole('button', { name: /submit/i });
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  expect(button).toBeDisabled();
}
)