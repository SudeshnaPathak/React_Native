import React from 'react'
import { Provider , useDispatch } from 'react-redux'
import { EmployeeStore } from './Redux/EmployeeStore'
import EventDetails from './Components/EventDetails'
import SummarySection from './Components/SummarySection'
import FilterSection from './Components/FilterSection'
import EmployeeList from './Components/EmployeeList'
import { resetEmployeeStatus } from './Redux/EmployeeSlice'
import ResetButton from './Components/ResetButton'

export default function App() {
  
  return (
    <Provider store={EmployeeStore}>
      <div className='container mt-4 d-flex flex-column align-items-center'>
      <div className='d-flex w-100 justify-content-between mb-4 w-100 align-items-center'>
      <h3 className='fw-bold text-primary'>Team Lunch RSVL Planner </h3>
      <ResetButton />
      </div>
      <EventDetails />
      <FilterSection />
      <SummarySection />
      <EmployeeList />
      </div>
    </Provider>
  )
}
