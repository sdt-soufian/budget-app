import React, { Component } from 'react'
import BalanceTitle from './components/BalanceTitle'
import Budget from './components/Budget'
import BudgetTitle from './components/BudgetTitle'
import ExpenseManager from './components/ExpenseManager'
import ExpenseTitle from './components/ExpenseTitle'
import Information from './components/Information'
import Errors from './components/Errors'

export class App extends Component {
  state = {
    budget: '0',
    tab: [],
    titleExpense: '',
    amount: '',
    price: '',
    expensePrice: '0',
    balancePrice: '0',
    active: false
  }

  addBudget = price => {
    if (parseInt(price) < 0 || price === '' || price.search(/\D+/g) !== -1) {
      this.setState({ active: true })
    }
    else {
      this.setState({ budget: price })
      this.setState({ balancePrice: price })
    }


  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  deleteClick = id => {
    this.setState({ tab: this.state.tab.filter(elem => elem.id !== id) })
    const elet = this.state.tab.find(elt => elt.id === id);
    this.setState(state => {
      return { balancePrice: parseInt(state.balancePrice) + parseInt(elet.expenseAmount) }
    })
    this.setState(prevState => {
      return { expensePrice: parseInt(prevState.expensePrice) - parseInt(elet.expenseAmount) }
    })
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
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.titleExpense === '' || this.state.titleExpense.search(/\D+/g) === -1 || this.state.amount < 0 || this.state.amount === '') {
      this.setState({ active: true })
    }
    else {
      this.addRow(this.state.titleExpense, this.state.amount);
      this.setState(prevState => {
        return { expensePrice: parseInt(prevState.expensePrice) + parseInt(this.state.amount) }
      })
      this.setState(prevBalance => {
        return { balancePrice: parseInt(prevBalance.balancePrice) - parseInt(this.state.amount) }
      })
      this.setState({ titleExpense: '' })
      this.setState({ amount: '' })
    }
  }

  handleClick = () => {
    this.setState({ active: false });
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
            <Errors active={this.state.active} handleClick={this.handleClick} />
            <div className="row">
              <BudgetTitle budget={this.state.budget} />
              <ExpenseTitle expensePrice={this.state.expensePrice} />
              <BalanceTitle balancePrice={this.state.balancePrice} />
            </div>
            <div className="row mt-4">
              <ExpenseManager tabRow={this.state.tab} deleteClick={this.deleteClick} editClick={this.editClick} />
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default App
