import React from 'react'

export default function BalanceCard({accountDetails}) {
  return (
    <div className='balance-card'>
      <div className='card'>
        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='bank-logo' className='bank-logo' />
        <h4>Account Holder</h4>
        <p>{accountDetails.accountHolder}</p>
      </div>
      <div className='card'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhBcuow4gxKeJSsCABITbGRbeAz4X5NMzoA&s' alt='bank-logo' className='bank-logo' />
        <h4>Available Balance</h4>
        <p>{accountDetails.availableBalance}</p>
      </div>
      <div className='card'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtSZXYhx3wKY4ESY0pnEWlOT3afhZpmPNkg&s' alt='bank-logo' className='bank-logo' />
        <h4>Account Number</h4>
        <p>{accountDetails.accountNumber}</p>
      </div>
      <div className='card'>
        <img src='https://static.vecteezy.com/system/resources/previews/033/544/837/non_2x/bank-account-icon-in-illustration-vector.jpg' alt='bank-logo' className='bank-logo' />
        <h4>Account Type</h4>
        <p>{accountDetails.accountType}</p>
      </div>

    </div>
  )
}
