import React from 'react'
import { useDataContext } from './DataContext'

export default function LoginStatus() {
  const { isLoggedIn } = useDataContext();
  return (
    <div>
      <h1>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</h1>
    </div>
  )
}
