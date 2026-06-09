import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function OverView() {
    const rescueDetails = useOutletContext();
  return (
    <div class="card-body">
      <h2 class="card-title">Overview</h2>
      <p class="card-text"><strong>Name:</strong> {rescueDetails.name}</p>
      <p class="card-text"><strong>Animal:</strong> {rescueDetails.animal}</p>
      <p class="card-text"><strong>Status: </strong> {rescueDetails.status}</p>
      <p class="card-text"><strong>Severity: </strong> {rescueDetails.severity}</p>
      <p class="card-text"><strong>Rescued By: </strong> {rescueDetails.rescuedBy}</p>
      <p class="card-text"><strong>Rescue Date: </strong> {rescueDetails.rescueDate}</p>
    </div>
  )
}
