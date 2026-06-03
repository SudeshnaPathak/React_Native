import React from 'react'

import {
  User,
  Stethoscope,
  Building2,
  Clock3,
  DoorOpen, CalendarCheck2
} from "lucide-react";


export default function AppointmentCard({appointments}) {
  return (
    <div className='appointment-cards'>
      {appointments && appointments.map((appointment, index) => (
        <div key={index} id='appointment-card' className='appointment-card'>
          <div>
          <h2><CalendarCheck2 size={20} /> Patient Appointment Details</h2>
          </div>

          <div className='info'>

            <div className='icon-text'>
              <User size={20} />
              <span>Patient Name</span>
            </div>

            <h3>{appointment.patientName}</h3>
           
          </div>

          <div className='info'>
            <div className='icon-text'>
              <Stethoscope size={20} />
              <span>Doctor Name</span>
            </div>
            <h3>{appointment.doctorName}</h3>
          </div>

          <div className='info'>
            <div className='icon-text'>
              <Building2 size={20} />
              <span>Department</span>
            </div>
            <h3>{appointment.department}</h3>
          </div>

          <div className='info'>
            <div className='icon-text'>
              <Clock3 size={20} />
              <span>Appointment Time</span>
            </div>
            <h3>{appointment.appointmentTime}</h3>
          </div>

          <div className='info'>
            <div className='icon-text'>
              <DoorOpen size={20} />
              <span>Room Number</span>
            </div>
            <h3>{appointment.roomNumber}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
