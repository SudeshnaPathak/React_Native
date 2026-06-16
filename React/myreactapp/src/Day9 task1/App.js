import React from 'react'
import Child from './Child'

export default function App() {
  const [tickets, setTickets] = React.useState([
    { id: 1, name: 'Login Issue', status: 'resolved', 'resolvedAt': '16/6/2026, 2:00:00 pm'},
    { id: 2, name: 'Payment Failure', status: 'open', 'resolvedAt': null },
    { id: 3, name: 'Account Suspension', status: 'open', 'resolvedAt': null },
    { id: 4, name: 'Bug in Dashboard', status: 'open', 'resolvedAt': null },
    { id: 5, name: 'Feature Request', status: 'open', 'resolvedAt': null },
  ])


  const resolvedCount = React.useMemo(() => tickets.filter(ticket => ticket.status === 'resolved').length, [tickets]);

  const resolveTicket = React.useCallback((id) => {
    setTickets(prevTickets => {
      return prevTickets.map(ticket => (ticket.id === id && ticket.status !== 'resolved') ? { ...ticket, status: 'resolved', resolvedAt: new Date().toLocaleString() } : ticket)
    }
  )}, [])

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
        <h1 className='fw-bold'>Total Tickets: {tickets.length}</h1>
        <h2 className='fw-bold'>Resolved Tickets: {resolvedCount}</h2>
        {resolvedCount === tickets.length && <h5 className='fw-bold'>All tickets resolved🎉</h5> }
        <div className='d-flex flex-wrap align-items-center justify-content-center'>
        {
          tickets.map(ticket => (<Child key={ticket.id} ticket={ticket} resolveTicket={resolveTicket} />))
        }
        </div>
    </div>
  )
}
