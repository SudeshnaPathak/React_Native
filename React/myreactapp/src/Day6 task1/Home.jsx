import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className='container-fluid text-center mt-5'>
      <h1 className='fw-bold'>Student Help Desk</h1>
      <NavLink to='/profile' className='btn btn-primary m-2' state={{ from: "Home Page" }}>Profile</NavLink>
      <NavLink to='/support' className='btn btn-secondary m-2'state={{ from: "Home Page" }}>Support</NavLink>
      <NavLink to='/feedback' className='btn btn-success m-2' state={{ from: "Home Page" }}>Feedback</NavLink>
    </div>
  )
}
