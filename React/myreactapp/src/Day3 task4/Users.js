import React from 'react'

export default function Users({users}) {
  return (
    <div>
      {
        users.map(user => (
            <ul key={user.id} 
            style={{
             listStyleType: "none", 
             border: "1px solid black",
             padding: "10px", 
             margin: "10px", 
             width: "300px", 
             backgroundColor: "lightpink", 
             borderRadius: "10px"
             }}>
                <li><h2>{user.name}</h2></li>
                <li><p>{user.username}</p></li>
                <li><p>{user.email}</p></li>
                <li><p>{user.phone}</p></li>
            </ul>
        ))
      }
    </div>
  )
}
