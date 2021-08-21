import React, { Component } from 'react'
import BalanceTitle from './comonents/BalanceTitle'
import Budget from './comonents/Budget'
import BudgetTitle from './comonents/BudgetTitle'
import ExpenseManager from './comonents/ExpenseManager'
import ExpenseTitle from './comonents/ExpenseTitle'
import Information from './comonents/Information'

export class App extends Component {
  state = {
    budget: '0',
    tab: []
  }

  addBudget = (price) => {
    this.setState({ budget: price })

  }

  addRow = (expense, expenseAmount) => {
    const newItem = {
      id: Math.floor(Math.random() * 200),
      expense: expense,
      expenseAmount: expenseAmount
    }
    this.setState({ tab: [...this.state.tab, newItem] })
    console.log(expense, expenseAmount);
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-4 col-sm-12">
            <Budget addBudget={this.addBudget} />
            <Information addRow={this.addRow} />
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="row">
              <BudgetTitle budget={this.state.budget} />
              <ExpenseTitle />
              <BalanceTitle />
            </div>
            <div className="row mt-4">
              <ExpenseManager tabRow={this.state.tab} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
