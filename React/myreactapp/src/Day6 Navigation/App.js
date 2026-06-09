import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

export default function App() {
  const [status, setStatus] = React.useState(false);
  const navigate = useNavigate();
  function HandleLogin()
  {
    navigate("/login"); // This is the correct way to navigate to another page programmatically. It is a function that takes the path as an argument and navigates to that path.
    // <Navigate to="/login" replace={true} /> --Does not work here because it is not a component, it is a function. It can only be used inside the return statement of a component.
  }
  return (
    <div>
      <button onClick={HandleLogin}>Login</button>
      <button onClick={() => setStatus(!status)}>Toggle Dashboard</button>
      {
        status ? <Navigate to="/dashboard" /> : <Navigate to="/login"/>
      }
    </div>
  )
}
    