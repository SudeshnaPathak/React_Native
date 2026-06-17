import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTicketStatus, updateTicketPriority, toggleStarred } from './TicketSlice';

export default function TicketDetailPanel() {
  const dispatch = useDispatch();
  const { allTickets, selectedTicketId } = useSelector((state) => state.tickets);

  const ticket = allTickets.find((t) => t.id === selectedTicketId);

  if (!ticket) {
    return (
      <div>
        <h3>Select a ticket from the list to view details and options.</h3>
      </div>
    );
  }

  return (
    <div className='d-flex flex-column p-3 border rounded shadow-sm bg-light' style={{ width: '600px' }}>
      <div className='d-flex justify-content-between align-items-center w-300'>
        <h2>Ticket Details - {ticket.id}</h2>
        <button
          onClick={() => dispatch(toggleStarred(ticket.id))}
           className={`btn ${ticket.starred ? 'btn-warning' : 'btn-outline-secondary'}`}
        >
          {ticket.starred ? '★ Starred' : '☆ Star Ticket'}
        </button>
      </div>

      <div className='mt-3 p-3 border rounded shadow-sm bg-white' style={{ width: '100%' }}>
        <h3>{ticket.issueTitle}</h3>
        <p><strong>Customer Name:</strong> {ticket.customerName}</p>
        <p><strong>Assigned Agent:</strong> {ticket.assignedTo}</p>
        <p><strong>Description:</strong></p>
        <p className=''>{ticket.description}</p>
      </div>

      
      <div className='mt-3 p-3 border rounded shadow-sm bg-white' style={{ width: '100%' }}>
        <h3>Action Panel</h3>
        <div className='d-flex gap-3'>
          <div>
            <label className='fw-bold mb-2'>Update Status:</label>
            <select
              value={ticket.status}
              onChange={(e) => dispatch(updateTicketStatus({ id: ticket.id, status: e.target.value }))}
              className='form-select border  border-success border-2 rounded'
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>

          <div>
            <label className='fw-bold mb-2'>Update Priority:</label>
            <select
              value={ticket.priority}
              onChange={(e) => dispatch(updateTicketPriority({ id: ticket.id, priority: e.target.value }))}
              className='form-select border border-warning border-2 rounded'
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
