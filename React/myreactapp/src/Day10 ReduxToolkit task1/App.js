import React from 'react'
import { Provider } from 'react-redux'
import TicketStore from './TicketStore'
import SummaryHeader from './SummaryHeader'
import TicketList from './TicketList'
import TicketDetailPanel from './TicketDetails'
import FilterPanel from './FilterPanel'

export default function App() {
  return (
    <Provider store={TicketStore}>
      <div className='container mt-4 d-flex flex-column align-items-center'>
        <SummaryHeader />
        <FilterPanel />
        <div className='d-flex flex-row justify-content-center align-items-start gap-4'>
        <TicketList />
        <TicketDetailPanel />
        </div>
      </div>
    </Provider>
  )
}
