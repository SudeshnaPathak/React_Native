import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithCustomState } from './test-utils';
import FilterSection from '../Components/FilterSection';

describe('FilterSection Component', () => {
  test('Updates active filter state upon clicking filter choices', async () => {
    const { store } = renderWithCustomState(<FilterSection />, {
      employees: { allEmployees: [], activeFilter: 'All' }
    });

    const goingFilterBtn = screen.getByRole('button', { name: /^going$/i });
    await userEvent.click(goingFilterBtn);

    // Assert custom state updated inside the store directly
    expect(store.getState().employees.activeFilter).toBe('Going');
  });
});
