import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <h1>NavBar</h1>
      <NavLink to="/home">Home</NavLink> <br />
      <NavLink to="/about">About</NavLink> <br />
      <NavLink to="/contacts">Contacts</NavLink> <br />
      <NavLink to="/products">Products</NavLink> <br />
      <NavLink to="/dashboard">Dashboard</NavLink> <br />
    </div>
  )
}
