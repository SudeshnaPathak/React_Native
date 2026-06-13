import React from 'react'
import { useState } from 'react'
import { getRequests } from '../Services/RequestService'
import { getCategories } from '../Services/CategoryService'
import RequestList from './RequestList'
import SearchAndFilter from './SearchAndFilter'
import SummaryCards from './SummaryCards'

export default function Dashboard({requests, onStatusChange}) {
  const [categories, setCategories] = React.useState([])

  const [filters, setFilters] = React.useState({
    search: '',
    category: '',
    status: ''
  })

  const total = requests.length
  const open = requests.filter(req => req.status?.toLowerCase() === 'open').length
  const inProgress = requests.filter(req => req.status?.toLowerCase() === 'in progress').length
  const resolved = requests.filter(req => req.status?.toLowerCase() === 'resolved').length

  const cardData = [
    { title: 'Total Requests', count: total, color: 'blue' },      
    { title: 'Open', count: open, color: 'red' },                  
    { title: 'In Progress', count: inProgress, color: 'orange' },    
    { title: 'Resolved', count: resolved, color: 'green' }          
  ];
  
  let filteredRequests = [...requests]

  if (filters.search.trim() !== '') {
    filteredRequests = filteredRequests.filter(req => 
      req.title.toLowerCase().includes(filters.search.toLowerCase())
    )
  }
  if (filters.category.trim() !== '') {
    filteredRequests = filteredRequests.filter(req => 
      req.category.toLowerCase() === filters.category.toLowerCase()
    )
  }
  if (filters.status.trim() !== '') {
    filteredRequests = filteredRequests.filter(req => 
      req.status.toLowerCase() === filters.status.toLowerCase()
    )
  }

  React.useEffect(() => {
    getCategories()
    .then(data => setCategories(data))
    .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <SummaryCards cardData={cardData} />
      <SearchAndFilter category={categories} onFilterChange={setFilters} />
      <RequestList requests={filteredRequests} onStatusChange={onStatusChange} />
    </div>
  )
}
