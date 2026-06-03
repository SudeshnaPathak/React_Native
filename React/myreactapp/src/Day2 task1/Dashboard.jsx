import React from 'react'
import AppointmentSection from './AppointmentSection'

export default function Dashboard({appointments}) {
  return (
    <div>
      <AppointmentSection appointments={appointments} />
    </div>
  )
}
