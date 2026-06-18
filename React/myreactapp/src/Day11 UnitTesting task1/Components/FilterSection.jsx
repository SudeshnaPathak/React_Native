import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setActiveFilter } from '../Redux/EmployeeSlice';

export default function FilterSection() {
    const dispatch = useDispatch();
    const filters = ['All', 'Going', 'Not Going', 'Pending'];
    const activeFilter = useSelector((state) => state.employees.activeFilter);

    function isActive(filter) {
        return filter === activeFilter ? 'active' : '';
    }
     
  return (
    <div className= 'd-flex flex-row align-items-start mb-3 border p-4 gap-2 rounded shadow-sm w-100'>
      <h3>Filter by Status: </h3>
      <button 
      onClick={() => dispatch(setActiveFilter('All'))} className={`btn btn-outline-secondary ${isActive('All')}`}
      style = {{width: '100px'}}>All</button>
      <button 
      onClick={() => dispatch(setActiveFilter('Going'))} className={`btn btn-outline-success ${isActive('Going')}`}
      style = {{width: '100px'}}>Going</button>
      <button 
      onClick={() => dispatch(setActiveFilter('Not Going'))} className={`btn btn-outline-danger ${isActive('Not Going')}`}
      style = {{width: '100px'}}>Not Going</button>
      <button 
      onClick={() => dispatch(setActiveFilter('Pending'))} className={`btn btn-outline-warning ${isActive('Pending')}`}
      style = {{width: '100px'}}>Pending</button>
    </div>
  )
}
