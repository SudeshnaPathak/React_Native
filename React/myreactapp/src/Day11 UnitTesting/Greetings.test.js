import { render, screen } from '@testing-library/react';
import Greetings from './Greetings';

describe('Greetings', () => {
    test('renders Greetings heading', () => {
        render(<Greetings name="Sudeshna" />);
        const headingElement = screen.getByText(/Greetings, Sudeshna!/i);
        expect(headingElement).toBeInTheDocument();
    });
    test('renders Click Me button', () => {
        render(<Greetings />);
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
    });
});