import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || {};
  function handleBack() 
  {
    navigate(-1);
  }
  function handleNavigationToSupport() {
    navigate('/support', { state: { from: "Profile Page" } });
  }
  return (
    <div className='container-fluid mt-5 text-center'>
      <h1 className='fw-bold'>Student Profile</h1>
      <div className='card shadow p-3 mb-3 mt-3 bg-success-subtle rounded mx-auto' style={{ width: '18rem' }}>
      <p>You came from: {from}</p>
      <p>Time: {new Date().toLocaleTimeString()}</p>
      </div>
      <button className = 'btn btn-secondary m-2' onClick={handleBack}>Go Back</button>
      <button className = 'btn btn-primary m-2' onClick={handleNavigationToSupport}>Go to Support</button>
    </div>
  )
}
