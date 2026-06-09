import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {

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
      {isAuthenticated() ? children : <Navigate to="/login" replace={true} />}
    </div>
  )
}
