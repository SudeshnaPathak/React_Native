import React from 'react'
import { useState } from 'react'
import { getRequests } from '../Services/RequestService'
import { getCategories } from '../Services/CategoryService'
import RequestList from './RequestList'
import SearchAndFilter from './SearchAndFilter'
import SummaryCards from './SummaryCards'
import useRequestFilters from '../Hooks/useRequestFilters'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import AdminInsights from './AdminInsights'

function Dashboard({requests, onStatusChange}) {
  const navigate = useNavigate();
  const {user} = useAuth();
  const isAdmin = user?.role === 'admin';
  const [categories, setCategories] = React.useState([])

  const {filters, setFilters, filteredRequests} = useRequestFilters(requests);

  const total = React.useMemo(() => requests.length, [requests]);
  const open = React.useMemo(() => requests.filter(req => req.status?.toLowerCase() === 'open').length, [requests]);
  const inProgress = React.useMemo(() => requests.filter(req => req.status?.toLowerCase() === 'in progress').length, [requests]);
  const resolved = React.useMemo(() => requests.filter(req => req.status?.toLowerCase() === 'resolved').length, [requests]);
  const latestComplaint = React.useMemo(() => [...requests].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0], [requests]);
  const highPriorityRequestsCount = React.useMemo(() => requests.filter(req => req.priority?.toLowerCase() === 'high').length, [requests]);

  const cardData = [
    { title: 'Total Requests', count: total, color: 'blue' },      
    { title: 'Open', count: open, color: 'red' },                  
    { title: 'In Progress', count: inProgress, color: 'orange' },    
    { title: 'Resolved', count: resolved, color: 'green' },
    { title:  'High Priority Requests', count: highPriorityRequestsCount, color: 'purple' }        
  ];

  React.useEffect(() => {
    getCategories()
    .then(data => setCategories(data))
    .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <SummaryCards cardData={cardData} />
      {!isAdmin && latestComplaint && (
        <div 
          className="card mb-3 bg-light border-primary border-2 shadow-sm" 
          style={{ borderRadius: '8px', cursor: 'pointer' }}
        >
          <div className="card-body py-2 px-3 d-flex justify-content-between align-items-center">
            <span className="text-dark mb-0">
              🆕 <strong>Latest:</strong> {latestComplaint.title} {latestComplaint.roomNo} — {latestComplaint.createdAt}
            </span>
            <button className="btn btn-sm btn-outline-danger rounded-pill fw-bold"
            onClick={() => navigate(`/request/${latestComplaint.id}`)}>
            View →
          </button>
          </div>
        </div>
      )}
      {
        isAdmin && <AdminInsights requests={requests} />
      }
      <SearchAndFilter category={categories} filters={filters} onFilterChange={setFilters} />
      <RequestList requests={filteredRequests} onStatusChange={onStatusChange} />
    </div>
  )
}

export default React.memo(Dashboard);
