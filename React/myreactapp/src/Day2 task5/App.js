import React from 'react'
import { DataContextProvider } from './DataContext'
import Header from './Header'
import LoginStatus from './LoginStatus'
import WelcomeMessage from './WelcomeMessage'
import ProfileCard from './ProfileCard'
import { useDataContext } from './DataContext'
import './App.css'

export default function App() {
  return (
    <DataContextProvider>
      <AppContent />
    </DataContextProvider>
  );
}

function AppContent() {
  const { isLoggedIn, userName, toggleLogin, setUserName } = useDataContext();

  return (
    <div className="App">
      <Header />
      <LoginStatus />
      <WelcomeMessage />
      <ProfileCard />

      <button onClick={() => toggleLogin(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      <br></br>

      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}
