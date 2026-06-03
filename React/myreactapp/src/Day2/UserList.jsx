import React from 'react'
// rfc ---> react functional component
export default function UserList({person}) {
  return (
    <div>
      <h3>Name is : {person.name}</h3>
        <h3>Age is : {person.age}</h3>
    </div>
  )
}

//rfce ---> react functional component with export
// import React from 'react'

// function UserList() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default UserList

