import React from 'react'
import Budget from './components/Budget'
import ExpenseDashboard from './components/ExpenseDashboard'
import ExpenseManager from './components/ExpenseManager'
import Expenses from './components/Expenses'
import BudgetProvider from './store'

const App = () => {
  return (
    <div className="container">
      <BudgetProvider>
        <div className="row mt-4">
          <div className="col-lg-4 col-sm-12">
            <Budget />
            <Expenses />
          </div>
          <div className="col-lg-8 col-sm-12">
            <ExpenseDashboard />
            <ExpenseManager />
          </div>
        </div>
      </BudgetProvider>
    </div>
  )
}

export default App
