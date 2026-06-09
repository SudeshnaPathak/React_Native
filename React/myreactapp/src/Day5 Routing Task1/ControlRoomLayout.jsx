import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

export default function ControlRoomLayout() {
  return (
    <div style={{border: '1px solid #605a5a', margin: '20px', padding: '30px'}}>
    <h1 style = {{color: 'green'}}> 🚨Control Room Dashboard</h1>
    <div class="card shadow mt-4">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
            <NavLink to="active-missions" className='nav-link'> Active Missions </NavLink>
            </li>
            <li class="nav-item">
            <NavLink to="team-status" className = 'nav-link'> Team Status </NavLink>
            </li>
            <li class="nav-item">
            <NavLink to="reports" className='nav-link'> Reports </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
