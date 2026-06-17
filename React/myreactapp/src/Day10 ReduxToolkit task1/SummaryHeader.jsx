import React from 'react'
import { useSelector } from 'react-redux'

export default function SummaryHeader() {
  const allTickets = useSelector((state) => state.tickets.allTickets);
  const totalTickets = allTickets.length;
  const openTickets = allTickets.filter((ticket) => ticket.status === 'Open').length;
  const inProgressTickets = allTickets.filter((ticket) => ticket.status === 'In Progress').length;
  const resolvedTickets = allTickets.filter((ticket) => ticket.status === 'Resolved').length;
  const starredTickets = allTickets.filter((ticket) => ticket.starred).length;
  const cardStyle = 'text-center d-flex flex-column align-items-center border shadow-sm p-3 rounded';
  return (
    <div className='d-flex align-items-center justify-content-center mb-3 gap-2'>
      <div className={cardStyle}>
        <h3>{totalTickets}</h3>
        <p className='fw-bold'>Total Tickets</p>
      </div>
      <div className={cardStyle}>
        <h3>{openTickets}</h3>
        <p className='fw-bold'>Open Tickets</p>
      </div>
      <div className={cardStyle}>
        <h3>{inProgressTickets}</h3>
        <p className='fw-bold'>In Progress Tickets</p>
      </div>
      <div className={cardStyle}>
        <h3>{resolvedTickets}</h3>
        <p className='fw-bold'>Resolved Tickets</p>
      </div>
      <div className={cardStyle}>
        <h3>{starredTickets}</h3>
        <p className='fw-bold'>Starred Tickets</p>
      </div>
      </div>
  )
}
