import React from 'react'
import api from './Api'

export default function App() {
  React.useEffect(() => {
      api.get('/users/1')
      .then(response => {
        console.log('Response Data:', response.data);
        console.log('Request Headers:', response.config.headers);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Check console for API response</h1>
    </div>
  )
}
