import React from 'react'
import { useSelector } from 'react-redux'

export default function SummarySection() {
  const allEmployees = useSelector((state) => state.employees.allEmployees);
  const totalEmployees = React.useMemo(() => allEmployees.length, [allEmployees]);
  const goingEmployees = React.useMemo(() => allEmployees.filter((employee) => employee.status === 'Going').length, [allEmployees]);
  const notGoingEmployees = React.useMemo(() => allEmployees.filter((employee) => employee.status === 'Not Going').length, [allEmployees]);
  const pendingEmployees = React.useMemo(() => allEmployees.filter((employee) => employee.status === 'Pending').length, [allEmployees]);
  const cardStyle = 'text-center d-flex flex-column align-items-start shadow-sm p-2 rounded w-100 p-2';
  return (
    <div className='d-flex align-items-center justify-content-center mb-3 gap-4 w-100'>
      <div className={cardStyle} style={{ borderLeft: '5px solid #533af7' }}>
        <h3>{totalEmployees}</h3>
        <p className='fw-bold'>Total Employees</p>
        </div>
        <div className={cardStyle} style={{ borderLeft: '5px solid #22bf1d' }}>
        <h3>{goingEmployees}</h3>
        <p className='fw-bold'>Going Employees</p>
        </div>
        <div className={cardStyle} style={{ borderLeft: '5px solid #e04508' }}>
        <h3>{notGoingEmployees}</h3>
        <p className='fw-bold'>Not Going Employees</p>
        </div>
        <div className={cardStyle} style={{ borderLeft: '5px solid #e9de65' }}>
        <h3>{pendingEmployees}</h3>
        <p className='fw-bold'>Pending Employees</p>
      </div>
    </div>
  )
}
