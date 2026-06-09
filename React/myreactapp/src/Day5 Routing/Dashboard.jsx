import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <NavLink to ="/dashboard/admin">Admin Dashboard</NavLink> <br />
      <NavLink to ="/dashboard/user">User Dashboard</NavLink> <br />
      <div style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
      <Outlet />
      </div>
    </div>
  )
}
