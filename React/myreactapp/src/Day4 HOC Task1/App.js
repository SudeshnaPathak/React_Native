import React from 'react'
import Dashboard from './Dashboard';
import AuthCheck from './AuthCheck';


export default function App() {
  const EnhancedDashboard = AuthCheck(Dashboard);
  return (
    <div>
      <EnhancedDashboard isLoggedIn={true} />
    </div>
  )
}
