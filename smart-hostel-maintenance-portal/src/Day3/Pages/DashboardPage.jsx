import React from 'react'
import Dashboard from '../Components/Dashboard'
import { useAuth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function DashboardPage() {

  const {user} = useAuth();
  
  if (user?.role === 'admin') {
    return <Navigate to="/admin-dashboard" replace />
  }

  if (user?.role === 'student') {
    return <Navigate to="/student-dashboard" replace />
  }

  return <Navigate to="/login" replace />
}
