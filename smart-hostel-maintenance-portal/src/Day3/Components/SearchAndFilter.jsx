import React, { useState } from 'react'
import useRequestFilters from '../Hooks/useRequestFilters';

export default function SearchAndFilter({ category, filters, onFilterChange }) {

  function handleChange (e)
  {
    const { name, value } = e.target;
    onFilterChange(prev => ({...prev, [name]: value}));
  };

  return (
    <>
    <div className="card mb-4 d-flex flex-row align-items-center justify-content-center shadow-sm">
      <div className="card-body d-flex flex-column flex-md-row align-items-center gap-3">
        <label htmlFor="search" className="form-label mb-0 fw-bold">Title:</label>
        <input 
          type="text"
          id="search"
          name="search" 
          className="form-control"
          placeholder="Enter title"
          value={filters.search}
          onChange={handleChange}
        />
      </div>

      
      <div className="card-body d-flex flex-column flex-md-row align-items-center gap-3">
        <label htmlFor="category" className="form-label mb-0 fw-bold">Category:</label>
        <select 
          className="form-select" 
          id="category"
          name="category" 
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">--No Category--</option>
          {category && category.map((cat) => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>

      <div className="card-body d-flex flex-column flex-md-row align-items-center gap-3">
        <label htmlFor="status" className="form-label mb-0 fw-bold">Status:</label>
        <select 
          className="form-select" 
          id="status"
          name="status" 
          value={filters.status}
          onChange={handleChange}
        >
          <option value="">--No Status--</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <div className="card-body d-flex flex-column flex-md-row align-items-center gap-3">
        <label htmlFor="status" className="form-label mb-0 fw-bold">Priority:</label>
        <select 
          className="form-select" 
          id="priority"
          name="priority" 
          value={filters.priority}
          onChange={handleChange}
        >
          <option value="">--No Priority--</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="card-body d-flex flex-column flex-md-row align-items-center gap-3">
        <label htmlFor="sortBy" className="form-label mb-0 fw-bold">Sort:</label>
        <select 
          className="form-select" 
          id="sortBy"
          name="sortBy" 
          value={filters.sortBy}
          onChange={handleChange}
        >
          <option value="">--No Sort--</option>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>
      <button className="btn btn-sm btn-outline-info fw-bold me-3" onClick={() => onFilterChange({search: '', category: '', status: '', priority: '', sortBy: ''})}>
        Reset
      </button>
    </div>
    </>
  )
}
