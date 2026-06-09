import React from 'react'
import NavBar from './NavBar'

export default function App() {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleLogin() 
  {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }
  return (
    <div>
      <NavBar />
      Enter user Name
      <input type="text" placeholder='Enter your name...' value={username} onChange={(e) => setUsername(e.target.value)} />
      Enter password
      <input type="password" placeholder='Enter your password...' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
