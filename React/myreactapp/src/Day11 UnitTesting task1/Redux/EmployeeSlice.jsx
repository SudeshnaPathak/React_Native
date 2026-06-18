import { createSlice } from '@reduxjs/toolkit';

const initialEmployees = [
  { id: 1, name: "Anu", team: "UI", status: "Pending" },
  { id: 2, name: "Rahul", team: "Backend", status: "Pending" },
  { id: 3, name: "Sneha", team: "QA", status: "Pending" },
  { id: 4, name: "Kiran", team: "DevOps", status: "Pending" }
]

const initialState = {
  allEmployees: initialEmployees,
  activeFilter: 'All',
}

const EmployeeSlice = createSlice({
  name: 'employees',
  initialState,
    reducers: {
        updateEmployeeStatus: (state, action) => {
            const { id, status } = action.payload;
            const employee = state.allEmployees.find(employee => employee.id === id);
            if (employee) {
                employee.status = status;
            }
        },
        setActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
        resetEmployeeStatus: (state) => {
            state.allEmployees.forEach(employee => {
                employee.status = 'Pending';
            })
        }
    }
});
export const { updateEmployeeStatus, setActiveFilter, resetEmployeeStatus } = EmployeeSlice.actions;
export default EmployeeSlice.reducer;