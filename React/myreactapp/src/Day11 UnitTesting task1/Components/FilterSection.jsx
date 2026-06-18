import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setActiveFilter } from '../Redux/EmployeeSlice';

export default function FilterSection() {
    const dispatch = useDispatch();
    const filters = ['All', 'Going', 'Not Going', 'Pending'];
  return (
    <div className= 'd-flex align-items-start mb-3 border p-4 g-4 rounded shadow-sm w-100' style={{ gap: '10px' }}>
      <h3>Filter by Status: </h3>
      <button onClick={() => dispatch(setActiveFilter('All'))} className='btn btn-outline-secondary'>All</button>
      <button onClick={() => dispatch(setActiveFilter('Going'))} className='btn btn-outline-success'>Going</button>
      <button onClick={() => dispatch(setActiveFilter('Not Going'))} className='btn btn-outline-danger'>Not Going</button>
      <button onClick={() => dispatch(setActiveFilter('Pending'))} className='btn btn-outline-warning'>Pending</button>
    </div>
  )
}
