import React from 'react'
import { NavLink } from 'react-router-dom'

export default function RescueCard({caseItem}) {
  return (
    <div className="col-md-4" style={{marginBottom: '20px', width: '300px'}}>
    <div className="card shadow p-3">
    <h5 className="card-header bg-success-subtle">Case: {caseItem.name}</h5>
    <div className="card-body">
        <h5 className="card-title">Animal: {caseItem.animal}</h5>
        <NavLink to={`/rescues/${caseItem.id}`} className="btn btn-secondary"> View Details </NavLink>
    </div>
    </div>
    </div>
  )
}
