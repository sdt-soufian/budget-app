import React from 'react'

import BudgetTitle from './BudgetTitle'
import ExpenseTitle from './ExpenseTitle'
import BalanceTitle from './BalanceTitle'

const ExpenseDashboard = () => {
  return (
    <div className="row">
      <BudgetTitle />
      <ExpenseTitle />
      <BalanceTitle />
    </div>
  )
}

export default ExpenseDashboard
