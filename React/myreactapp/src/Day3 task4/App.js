import React from 'react'
import Users from './Users';

export default function App() {

    const [users, setUsers] = React.useState([]);

    async function fetchUsers() 
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
        setUsers(data);
    }

    React.useEffect(() => 
        {
            console.log("Fetching users...");
            fetchUsers();
        }, []);

  return (
    <div>
      <Users users={users} />
    </div>
  )
}
