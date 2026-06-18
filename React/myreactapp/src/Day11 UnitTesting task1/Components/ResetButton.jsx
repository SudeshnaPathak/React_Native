import React from 'react';
import { useDispatch } from 'react-redux';
import { resetEmployeeStatus } from '../Redux/EmployeeSlice';

export default function ResetButton() {
  const dispatch = useDispatch(); 
  return (
    <button 
      onClick={() => dispatch(resetEmployeeStatus())} 
      className='btn btn-outline-primary mb-3'
    >
      Reset
    </button>
  );
}
