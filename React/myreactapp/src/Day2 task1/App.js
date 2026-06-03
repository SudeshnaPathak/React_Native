import React from 'react'
import Dashboard from './Dashboard'
import './App.css'

export default function App() {
  const [appointments, setAppointments] = React.useState([
  {
    patientName: "Ananya Rao",
    doctorName: "Dr. Mehta",
    department: "Cardiology",
    appointmentTime: "10:30 AM",
    roomNumber: 205
    },
    {
    patientName: "Rohan Sharma",
    doctorName: "Dr. Gupta",
    department: "Neurology",
    appointmentTime: "11:00 AM",
    roomNumber: 310
    },
    {
    patientName: "Priya Singh",
    doctorName: "Dr. Verma",
    department: "Orthopedics",
    appointmentTime: "11:30 AM",
    roomNumber: 415
    },
    {
    patientName: "Amit Patel",
    doctorName: "Dr. Kumar",
    department: "Dermatology",
    appointmentTime: "12:00 PM",
    roomNumber: 120
    }
])
  return (
    <div className='app'>
      <Dashboard appointments={appointments} />
    </div>
  )
}
