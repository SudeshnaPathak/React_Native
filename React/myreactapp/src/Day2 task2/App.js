import React from 'react'
import BankDashboard from './BankDashboard'
import './App.css'

export default function App() {
    const bankDetails = {
        bankName: "Secure Bank",
        welcomeMessage: "Welcome to Secure Bank",
        accountHolder: "Rahul Verma",
        accountNumber: "1234 5678 9012",
        accountType: "Savings Account",
        availableBalance: "₹45,680"
      }

  return (
    <div className='app'>
      <div className='main-content'>
        <BankDashboard bankDetails={bankDetails} />
      </div>
    </div>
  )
}
