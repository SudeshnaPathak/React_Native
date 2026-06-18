import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../Redux/EmployeeSlice';

// Helper function to inject any custom initial state into a clean Redux store
export const renderWithCustomState = (component, customState = {}) => {
  const store = configureStore({
    reducer: { employees: employeeReducer },
    preloadedState: customState,
  });

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};
