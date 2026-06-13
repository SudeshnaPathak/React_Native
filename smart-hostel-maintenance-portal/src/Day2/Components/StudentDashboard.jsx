import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { getRequestsByStudentId } from '../Services/RequestService';
import Dashboard from './Dashboard';


export default function StudentDashboard() {
  const {user} = useAuth();
  const [requests, setRequests] = React.useState([])

  React.useEffect(() => {
    getRequestsByStudentId(user.id)
    .then(data => setRequests(data))
    .catch(error => console.error(error))
  }, [])


  return (
    <div>
      <h2 className='fw-bold mb-3'>Student Dashboard</h2>
      <Dashboard requests={requests} />
    </div>
  )
}
