import React from 'react'

function Child({ticket, resolveTicket}) {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center border border-primary shadow p-4 m-2 bg-light rounded' style={{width: '400px', height: '200px'}}>
      <h3 className='fw-bold'>{ticket.name}</h3>
      <p>Status: {ticket.status}</p>
      {ticket.status === 'resolved' &&
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <p className='border border-success border-2 rounder p-2 rounded' >✅Resolved</p> 
        <p>Resolved At: {ticket.resolvedAt}</p>
      </div>}
      {ticket.status === 'open' && <button className='btn btn-outline-primary' onClick={() => resolveTicket(ticket.id)}>Resolve</button>}
    </div>
  )
}

export default React.memo(Child)
