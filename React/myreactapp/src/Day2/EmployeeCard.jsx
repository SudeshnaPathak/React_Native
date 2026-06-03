import React from 'react'

export default function EmployeeCard({employee}) {
  return (
    <div className='employee-card'>
      <h3>Name : {employee.name}</h3>
      <h3>Age : {employee.age}</h3>
      <h3>Designation : {employee.designation}</h3>
      <h3>Location : {employee.location}</h3>
    </div>
  )
}
