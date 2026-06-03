import React from 'react'
import { useDataContext } from './DataContext'

export default function WelcomeMessage() {
  const {userName} = useDataContext();
  return (
    <div>
      <h1>Welcome, {userName}!</h1>
    </div>
  )
}
