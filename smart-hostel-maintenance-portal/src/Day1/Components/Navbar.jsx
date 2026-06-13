import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary shadow-sm" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand">Smart Hostel Maintenance Portal</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/create-request" className="nav-link">Create Request</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
