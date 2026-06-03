import React from 'react'
import AccountSummary from './AccountSummary'

import{
  House,
  User,
  Phone
} from "lucide-react";

export default function BankDashboard({bankDetails}) {
    const {bankName, welcomeMessage, ...accountDetails} = bankDetails
  return (
    <div className='bank-dashboard'>
      <header>
      <div className='bank-name'>
        <img className='bank-logo' src='https://cdn-icons-png.flaticon.com/512/5462/5462680.png' alt = 'bank-logo'/>
        <h1>{bankName}</h1>
      </div>
      <ul>
        <li>
          <House size={20} />
          <span>Home</span>
        </li>
        <li>
          <User size={20} />
          <span>Accounts</span>
        </li>
        <li>
          <Phone size={20} />
          <span>Contacts</span>
        </li>
      </ul>
      </header>
      <div className='welcome-message'>
        <img className='welcome-icon' src='https://cdn-icons-png.flaticon.com/512/4847/4847043.png' alt='welcome-icon' />
        <div>
        <h2>{welcomeMessage}</h2>
        <h2>We are here to serve you better</h2>
        </div>
      </div>
      <div className='summary-title'>
        <h2>Account Summary</h2>
      </div>
      <AccountSummary accountDetails={accountDetails} />
    </div>
  )
}
