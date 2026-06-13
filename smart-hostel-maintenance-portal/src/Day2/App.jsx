import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="container mt-4">
        <Outlet />
      </main>
    </div>
  )
}
