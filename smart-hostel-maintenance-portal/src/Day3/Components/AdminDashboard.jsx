import React from 'react'
import { getRequests, updateRequest } from '../Services/RequestService'
import Dashboard from './Dashboard'

export default function AdminDashboard() {
    const [requests, setRequests] = React.useState([])

  React.useEffect(() => {
    getRequests()
    .then(data => setRequests(data))
    .catch(error => console.error(error))
  }, [])

  function handleStatusChange(id, newStatus) {
     updateRequest(id, { status: newStatus })
     .then(updatedRequest => {
       setRequests(prev => prev.map(req => req.id === id ? updatedRequest : req))
     })
     .catch(error => console.error(error))
  }
  
  return (
    <div>
      <h2 className='fw-bold mb-3'>Admin Dashboard</h2>
      <Dashboard requests={requests} onStatusChange={handleStatusChange}/>
    </div>
  )
}
