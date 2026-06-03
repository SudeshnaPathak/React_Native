import React from 'react'

export default function TodoItem({task}) {
  return (
    <div className='todo-item'>
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <p>Priority: {task.Priority}</p>
    </div>
  )
}
