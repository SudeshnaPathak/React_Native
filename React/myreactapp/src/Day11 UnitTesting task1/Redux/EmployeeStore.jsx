import { configureStore } from "@reduxjs/toolkit";
import EmployeeSlice from "./EmployeeSlice";
export const EmployeeStore = configureStore({
    reducer: {
        employees: EmployeeSlice
    }
})
export default EmployeeStore;