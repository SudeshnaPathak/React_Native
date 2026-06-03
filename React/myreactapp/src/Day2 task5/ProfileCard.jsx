import React from 'react'
import { useDataContext } from './DataContext'

export default function ProfileCard() {
  const {userName, isLoggedIn} = useDataContext();
  return (
    <div className='profile-card'>
      <h3>Profile Card</h3>
      <p>User Name: {userName}</p>
      <p>Login Status: {isLoggedIn ? 'Active' : 'Inactive'}</p>
    </div>
  )
}
