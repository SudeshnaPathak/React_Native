import React from 'react'
import useOnlineStatus from './useOnlineStatus';
 
export default function App() {
 
    const isOnline = useOnlineStatus();
 
  return (
    <div>
      {isOnline ? 'Online' : 'Offline'}
    </div>
  )
}