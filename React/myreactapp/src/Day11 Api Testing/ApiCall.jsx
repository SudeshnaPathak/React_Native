import React from 'react'

export default function ApiCall() {
  const [data , setData] = React.useState(null);
  async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonData = await response.json();
    setData(jsonData);
  }
  React.useEffect(() => {fetchData()}, [])

  return (
    <div>
      {
        data ? 
        <div>
          <h3>{data.title}</h3>
        </div> 
        : <h3>Loading...</h3>
      }
    </div>
  )
}
