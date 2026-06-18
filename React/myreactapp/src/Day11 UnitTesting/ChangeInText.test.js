import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChangeInText from './ChangeInText';
describe('ChangeInText component', () => {
  test('updates text when input changes', async () => {
    render(<ChangeInText />);
    const inputElement = screen.getByPlaceholderText('Enter your name');
    await userEvent.type(inputElement, 'Sudeshna');
    expect(screen.getByText('Hello, Sudeshna!')).toBeInTheDocument();
  });
    test('updates status when checkbox is toggled', async () => {
        render(<ChangeInText />);
        const checkboxElement = screen.getByRole('checkbox');
        await userEvent.click(checkboxElement);
        expect(screen.getByText('Checkbox is checked')).toBeInTheDocument();
        await userEvent.click(checkboxElement);
        expect(screen.getByText('Checkbox is unchecked')).toBeInTheDocument();
    })
})