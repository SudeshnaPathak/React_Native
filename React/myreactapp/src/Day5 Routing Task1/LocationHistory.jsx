import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function LocationHistory() {
  const rescueDetails = useOutletContext();
  return (
    <div class="card-body">
      <h3 class="card-title">Location History</h3>
       <p class="card-text"><strong>Found At:</strong> {rescueDetails.location.area}, {rescueDetails.location.state}</p>
       <h4 class="card-title">Event TimeLine: </h4>
        <ul class="list-group list-group-flush">
          {rescueDetails.history.map((item, index) => (
            <li key={index} class="list-group-item">
              <strong>{item.date}</strong> : {item.event}
            </li>
          ))}
        </ul>
      
    </div>
  )
}
