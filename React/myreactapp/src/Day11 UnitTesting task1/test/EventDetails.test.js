import React from 'react';
import { render, screen } from '@testing-library/react';
import EventDetails from '../Components/EventDetails';

describe('EventDetails Component', () => {
  test('Event details displayed correctly', () => {
    render(<EventDetails />);

    expect(screen.getByText('EVENT NAME:')).toBeInTheDocument();
    expect(screen.getByText('Friday Team Lunch')).toBeInTheDocument();
    expect(screen.getByText('VENUE:')).toBeInTheDocument();
    expect(screen.getByText('Green Bowl Cafe')).toBeInTheDocument();
    expect(screen.getByText('TIME:')).toBeInTheDocument();
    expect(screen.getByText('1:00 PM')).toBeInTheDocument();
    expect(screen.getByText('DAY:')).toBeInTheDocument();
    expect(screen.getByText('Friday')).toBeInTheDocument();
  });
});
