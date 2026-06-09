import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  function handleLogin() 
  {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Login successful!');
    navigate('/');
  }
  return (
    <div className='card shadow mt-4' style={{margin: '20px', padding: '30px', width: '400px'}}>
      <div >
        <label className='form-label'>Username: </label>
        <input 
          type="text"
          value={username}
          placeholder="Enter username"
          className='form-control'
          onChange={(e) => setUsername(e.target.value)}
          ></input>
      </div>
      <div>
        <label className='form-label'>Password: </label>
        <input 
          type="password"
          value={password}
          placeholder="Enter password"
          className='form-control'
          onChange={(e) => setPassword(e.target.value)}
          ></input>
      </div>
      <button className='btn btn-primary mt-2' onClick={handleLogin}>Login</button>
    </div>
  )
}
