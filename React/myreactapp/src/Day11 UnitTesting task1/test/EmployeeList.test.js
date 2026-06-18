import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithCustomState } from './test-utils';
import EmployeeList from '../Components/EmployeeList';

describe('EmployeeList Component', () => {
  const customInitialState = {
    employees: {
      allEmployees: [
        { id: 1, name: 'Anu', team: 'UI', status: 'Pending' },
        { id: 2, name: 'Rahul', team: 'Backend', status: 'Going' }
      ],
      activeFilter: 'All'
    }
  };

  test('Employee list renders properly and shows correct initial data', () => {
    renderWithCustomState(<EmployeeList />, customInitialState);

    expect(screen.getByRole('heading', { name: /employee list/i })).toBeInTheDocument();
    expect(screen.getByText('Anu')).toBeInTheDocument();
    expect(screen.getByText('UI')).toBeInTheDocument();
    expect(screen.getByText('Rahul')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
  });

  test('Clicking Going or Not Going triggers state update in the row', async () => {
    renderWithCustomState(<EmployeeList />, customInitialState);

    const rowAnu = screen.getByText('Anu').closest('tr');
    const goingButton = screen.getAllByRole('button', { name: 'Going' })[0];
    
    await userEvent.click(goingButton);
    expect(rowAnu).toHaveTextContent('Going');
  });

  test('Filter rules hide unmatched employees', () => {
    const filteringState = {
      employees: {
        ...customInitialState.employees,
        activeFilter: 'Going'
      }
    };

    renderWithCustomState(<EmployeeList />, filteringState);

    // Only Rahul should show because his status is 'Going'
    expect(screen.getByText('Rahul')).toBeInTheDocument();
    expect(screen.queryByText('Anu')).not.toBeInTheDocument();
  });

  test('Empty state handled if no matches found', () => {
    const filteringEmptyState = {
      employees: {
        ...customInitialState.employees,
        activeFilter: 'Not Going' // Nobody matches this
      }
    };

    renderWithCustomState(<EmployeeList />, filteringEmptyState);

    expect(screen.getByText('No employees found.')).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });
});
