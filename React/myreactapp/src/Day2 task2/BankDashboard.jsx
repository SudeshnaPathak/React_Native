import React from 'react'
import AccountSummary from './AccountSummary'

export default function BankDashboard({bankDetails}) {
    const {bankName, welcomeMessage, ...accountDetails} = bankDetails
  return (
    <div className='bank-dashboard'>
      <header>
      <div className='bank-name'>
        <h1>{bankName}</h1>
      </div>
      </header>
      <div className='welcome-message'>
        <h2>{welcomeMessage}</h2>
      </div>
      <div className='summary-title'>
        <h2>Account Summary</h2>
      </div>
      <AccountSummary accountDetails={accountDetails} />
    </div>
  )
}
