import React from 'react'
import { useState } from 'react'
import { getRequests } from '../Services/RequestService'
import { getCategories } from '../Services/CategoryService'
import RequestList from '../Components/RequestList'
import SearchAndFilter from '../Components/SearchAndFilter'
import SummaryCards from '../Components/SummaryCards'

export default function DashboardPage() {
  const [requests, setRequests] = React.useState([])
  const [categories, setCategories] = React.useState([])
  const [filteredRequests, setFilteredRequests] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [open, setOpen] = React.useState(0);
  const [inProgress, setInProgress] = React.useState(0);
  const [resolved, setResolved] = React.useState(0);

  const cardData = [
    { title: 'Total Requests', count: total, color: 'blue' },      
    { title: 'Open', count: open, color: 'red' },                  
    { title: 'In Progress', count: inProgress, color: 'orange' },    
    { title: 'Resolved', count: resolved, color: 'green' }          
  ];

  function applyFilters(filters) 
  {
    let filtered = [...requests];

    if(filters.search.trim() !== ''){
      filtered = filtered.filter(req => req.title.toLowerCase().includes(filters.search.toLowerCase()));
    }
    if(filters.category.trim() !== ''){
      filtered = filtered.filter(req => req.category.toLowerCase() === filters.category.toLowerCase());
    }
    if(filters.status.trim() !== ''){
      filtered = filtered.filter(req => req.status.toLowerCase() === filters.status.toLowerCase());
    }
    setFilteredRequests(filtered);
  }

  React.useEffect(() => {

    getRequests()
    .then(data => {
      setRequests(data);
      setFilteredRequests(data);
      setTotal(data.length);
      setOpen(data.filter(req => req.status === 'Open').length);
      setInProgress(data.filter(req => req.status === 'In Progress').length);
      setResolved(data.filter(req => req.status === 'Resolved').length);
    })
    .catch(error => console.log(error));

    getCategories()
    .then(data => setCategories(data))
    .catch(error => console.log(error));

  }, []);

  return (
    <div>
      <h2 className='fw-bold mb-3'>Hostel Maintenance Dashboard</h2>
      <SummaryCards cardData={cardData} />
      <SearchAndFilter category={categories} onFilterChange={applyFilters} />
      <RequestList requests={filteredRequests} />
    </div>
  )
}
