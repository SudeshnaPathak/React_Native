import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

export default function Navbar() {

  const { isAuthenticated, user, logout } = useAuth();

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
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <span className="nav-link fw-bold text-white">{user?.role.toUpperCase()} {user?.name}</span>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-outline-light btn-sm" onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
