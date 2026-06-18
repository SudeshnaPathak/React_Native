import React from 'react';
import { screen, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithCustomState } from './test-utils';
import ResetButton from '../Components/ResetButton';
import EmployeeList from '../Components/EmployeeList';

describe('ResetButton Component', () => {
  test('Clicking Reset updates all employee statuses to Pending in the store', async () => {
    const customAppState = {
      employees: {
        allEmployees: [
          { id: 1, name: 'Anu', team: 'UI', status: 'Going' },
          { id: 2, name: 'Rahul', team: 'Backend', status: 'Not Going' }
        ],
        activeFilter: 'All'
      }
    };

    const { store } = renderWithCustomState(
    <div>
        <ResetButton />
        <EmployeeList />
      </div>, customAppState);

    const resetButton = screen.getByRole('button', { name: 'Reset' });
    await userEvent.click(resetButton);

    const updatedEmployees = store.getState().employees.allEmployees;

    expect(updatedEmployees.length).toBe(2);
    expect(updatedEmployees[0].status).toBe('Pending');
    expect(updatedEmployees[1].status).toBe('Pending');

    const tableBody = screen.getByRole('table').querySelector('tbody');
    const pendingBadgesInTable = within(tableBody).getAllByText('Pending');
    
    expect(pendingBadgesInTable.length).toBe(2);
  });
});
