import React from 'react'
import AppointmentCard from './AppointmentCard'

export default function AppointmentSection({appointments}) {
  return (
    <div>
      <AppointmentCard appointments={appointments} />
    </div>
  )
}
