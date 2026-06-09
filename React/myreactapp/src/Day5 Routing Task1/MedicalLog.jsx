import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function MedicalLog() {
  const rescueDetails = useOutletContext();
  const medicalLogs = rescueDetails.medical || [];
  return (
    <div class="card-body">
      <h3 class="card-title">Medical Log</h3>
      <p class="card-text"><strong>Condition:</strong> {medicalLogs.condition}</p>
      <p class="card-text"><strong>Treatment:</strong> {medicalLogs.treatment}</p>
      <p class="card-text"><strong>Attending Vet:</strong> {medicalLogs.vet}</p>
      <p class="card-text"><strong>Last Updated:</strong> {medicalLogs.lastUpdated}</p>
    </div>
  )
}
