import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectTicket } from './TicketSlice';

export default function TicketList() {
  const dispatch = useDispatch();
  const { allTickets, selectedTicketId, activeFilter } = useSelector((state) => state.tickets);
  const filteredTickets = activeFilter === 'All' ? allTickets : allTickets.filter((ticket) => ticket.status === activeFilter);
  return (
    <div className='d-flex flex-column gap-2' style={{ maxHeight: '500px', overflowY: 'auto' }}>
        {filteredTickets.length === 0 ? (
          <p className='text-center'>No tickets found.</p>
        ) : (
            <ul className='list-group'>
                {filteredTickets.map((ticket) => (
                    <li
                        key={ticket.id}
                        className={`list-group-item d-flex justify-content-between align-items-center ${selectedTicketId === ticket.id ? 'active' : ''} p-15 mb-2 rounded shadow-sm`}
                        onClick={() => dispatch(selectTicket(ticket.id))}
                        style={{ cursor: 'pointer',
                            width: '350px',
                         }}
                    >
                        <div>
                          <div className='d-flex justify-content-between align-items-center mb-2 gap-2'>
                           <strong>{ticket.id}</strong>
                           <span className={`badge ${ticket.starred ? 'bg-warning text-dark' : 'bg-secondary'} rounded-pill`}>
                            {ticket.starred ? '★' : '☆'}
                          </span>
                           </div>
                           <p className='fw-bold'>{ticket.customerName}</p>
                           <p className='fw-bold text-dark'>{ticket.issueTitle}</p>
                           <p className='fw-bold text-danger'>Status: {ticket.status}</p>
                           <p className='fw-bold text-warning'>Priority: {ticket.priority}</p>
                           
                        </div>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}
