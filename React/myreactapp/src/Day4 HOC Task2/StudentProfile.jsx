import React from 'react'

export default function StudentProfile({ student }) {
  return (
    <div>
      <h2>Name: {student.Name}</h2>
      <p>Batch: {student.Batch}</p>
      <p>Skill: {student.Skill}</p>
    </div>
  )
}
