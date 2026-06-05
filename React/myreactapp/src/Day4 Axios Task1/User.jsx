import React from 'react'
import axios from 'axios';

export default function User() {
  const [users, setUsers] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredUsers, setFilteredUsers] = React.useState([]);

  function fetchData() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => 
        {
            console.log(response.data);
            setUsers(response.data);
            setFilteredUsers(response.data);
        })
    .catch(error => console.error(error));
  }

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
    const filtered = users.filter(({name, email, phone}) =>
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      phone.includes(searchTerm)
    );
    setFilteredUsers(filtered);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center' style={{margin: '20px'}}>
      <input type="text"
      className='form-control' 
      placeholder="Search users..."
      value={searchTerm}
      onChange={e => handleSearch(e.target.value)}
       />
      </div>
      <table className='table table-light table-striped table-hover'>
        <thead>
          <tr className='table-dark '>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td className='table-danger'>{user.name}</td>
              <td className='table-success'>{user.email}</td>
              <td className='table-warning'>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
