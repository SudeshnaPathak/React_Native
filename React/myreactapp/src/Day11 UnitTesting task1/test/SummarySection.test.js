import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithCustomState } from './test-utils';
import SummarySection from '../Components/SummarySection';

describe('SummarySection Component', () => {
  test('Counts evaluate and render correctly based on custom state provided', () => {
    const customSummaryState = {
      employees: {
        allEmployees: [
          { id: 1, name: 'Anu', team: 'UI', status: 'Going' },
          { id: 2, name: 'Rahul', team: 'Backend', status: 'Going' },
          { id: 3, name: 'Sneha', team: 'QA', status: 'Not Going' },
          { id: 4, name: 'Kiran', team: 'DevOps', status: 'Pending' }
        ],
        activeFilter: 'All'
      }
    };

    renderWithCustomState(<SummarySection />, customSummaryState);

    expect(screen.getByText('Total Employees')).toBeInTheDocument();
    expect(screen.getByText('Going Employees')).toBeInTheDocument();
    expect(screen.getByText('Not Going Employees')).toBeInTheDocument();
    expect(screen.getByText('Pending Employees')).toBeInTheDocument();

    const headings = screen.getAllByRole('heading', { level: 3 });

    expect(headings[0]).toHaveTextContent('4'); // Total
    expect(headings[1]).toHaveTextContent('2'); // Going
    expect(headings[2]).toHaveTextContent('1'); // Not Going
    expect(headings[3]).toHaveTextContent('1'); // Pending
  });
});
