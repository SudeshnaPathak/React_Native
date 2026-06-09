import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {
   return (
    <nav className="navbar navbar-expand bg-secondary-subtle">
      <div className="nav navbar-nav">
        <NavLink to='/' className='nav-item nav-link'>Home</NavLink>
        <NavLink to='/rescues' className='nav-item nav-link'>Rescues</NavLink>
        <NavLink to='/control-room' className='nav-item nav-link'>Control Room</NavLink>
        <NavLink to='/login' className='nav-item nav-link'>Login</NavLink>
      </div>
    </nav>
  )
}