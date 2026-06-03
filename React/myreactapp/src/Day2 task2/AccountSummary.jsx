import React from 'react'
import BalanceCard from './BalanceCard'

export default function AccountSummary({accountDetails}) {
  return (
    <div>
      <BalanceCard accountDetails={accountDetails} />
    </div>
  )
}
