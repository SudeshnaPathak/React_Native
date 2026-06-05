import axios from 'axios';
import React from 'react'

export default function App() {

  function fetchData() {
    //By default asynchronous
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
  }

  React.useEffect(() => {
    fetchData()
    }, []);

  return (
    <div>
      
    </div>
  )
}
