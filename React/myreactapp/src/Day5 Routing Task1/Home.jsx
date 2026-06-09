import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {
   return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-3 shadow-sm rounded">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">
          Home Page
        </NavLink>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/rescues"
              >
                Rescue List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/control-room"
              >
                Control Room
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <h4 style={{marginTop: '20px'}}>Rescue Management System HomePage</h4>
    </div>
  )
}

