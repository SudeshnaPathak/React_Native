import AsyncData from "./AsyncData"
import { render, screen } from "@testing-library/react"

test('Render loading message and then data loaded message', async () => 
    {
        render(<AsyncData />);
        const loadingMessage = screen.getByText('Loading...');
        expect(loadingMessage).toBeInTheDocument();
        const dataLoadedMessage = await screen.findByText('Data loaded!');
        expect(dataLoadedMessage).toBeInTheDocument();
    })