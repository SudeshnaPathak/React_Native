import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setActiveFilter , selectTicket } from './TicketSlice';

export default function FilterPanel() {
    const dispatch = useDispatch();
    const activeFilter = useSelector((state) => state.tickets.activeFilter);
    const filters = ['All', 'Open', 'In Progress', 'Resolved'];
  return (
    <div className='d-flex flex-column align-items-start mb-3' style={{ gap: '10px' }}>
    <label 
        htmlFor="ticket-filter" 
        style={{ fontWeight: 'bold', color: '#495057' }}
      >
        Filter by Status:
      </label>
      <select
      value={activeFilter}
      onChange={(e) => 
        {
            dispatch(setActiveFilter(e.target.value))
            dispatch(selectTicket(null)) 
        }}
        style={{ padding: '8px', borderRadius: '4px', marginBottom: '20px' }}
        >
        {filters.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
            </option>
        ))}
      </select>
    </div>
  )
}
    
