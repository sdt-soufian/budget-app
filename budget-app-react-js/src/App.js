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
    tab: [],
    titleExpense: '',
    amount: '',
    price: ''
  }

  addBudget = price => {
    this.setState({ budget: price })

  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  deleteClick = id => {
    this.setState({ tab: this.state.tab.filter(elem => elem.id !== id) })
  }

  editClick = elet => {
    this.setState({ titleExpense: elet.expense });
    this.setState({ amount: elet.expenseAmount });
    this.deleteClick(elet.id);
  }

  addRow = (expense, expenseAmount) => {
    const newItem = {
      id: Math.floor(Math.random() * 200),
      expense: expense,
      expenseAmount: expenseAmount
    }
    return this.setState({ tab: [...this.state.tab, newItem] })
    //console.log(expense, expenseAmount);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.addRow(this.state.titleExpense, this.state.amount);
    this.setState({ titleExpense: '' })
    this.setState({ amount: '' })

  }


  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-4 col-sm-12">
            <Budget addBudget={this.addBudget} />
            <Information handleChange={this.handleChange} titleExpense={this.state.titleExpense} amount={this.state.amount} handleSubmit={this.handleSubmit} />
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="row">
              <BudgetTitle budget={this.state.budget} />
              <ExpenseTitle />
              <BalanceTitle />
            </div>
            <div className="row mt-4">
              <ExpenseManager tabRow={this.state.tab} deleteClick={this.deleteClick} editClick={this.editClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
