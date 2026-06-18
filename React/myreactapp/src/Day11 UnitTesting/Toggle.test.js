import Toggle from "./Toggle"
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Toggle Component', () => {
    test('should toggle the switch state when button is clicked', async () => {
        render(<Toggle />);
        expect(screen.getByText('The switch is OFF')).toBeInTheDocument();
        const buttonElement = screen.getByRole('button');
        await userEvent.click(buttonElement);
        expect(screen.getByText('The switch is ON')).toBeInTheDocument();
        await userEvent.click(buttonElement);
        expect(screen.getByText('The switch is OFF')).toBeInTheDocument();
    });
    test('should display the correct button text based on switch state', async () => {
    render(<Toggle />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('ON');
    await userEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('OFF');
    await userEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('ON');
});

})