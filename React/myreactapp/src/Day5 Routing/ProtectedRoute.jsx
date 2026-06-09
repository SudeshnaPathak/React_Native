import React from 'react'

export default function ProtectedRoute({ children }) {
  function isAuthenticated() 
  {
    if(localStorage.getItem('username') === 'admin' && localStorage.getItem('password') === 'admin123')
    {
      return true;
    }
    return false;
  }
  return (
    <div>
      {
        isAuthenticated() ? children : <h1>Access Denied. Please login as admin.</h1>
      }
    </div>
  )
}
