import React, { useContext } from 'react'
import { BudgetContext } from '../store'

const Expenses = () => {
  const { expense, setExpense, amount, setAmount, setTab } =
    useContext(BudgetContext)

  const handleExpenseChange = (e) => setExpense(e.target.value)

  const handleAmountChange = (e) => setAmount(e.target.value)

  const addExpense = (expense, amount) => {
    const newRow = {
      id: Math.floor(Math.random() * 200),
      expense: expense,
      amount: amount,
    }
    setTab((prevState) => [...prevState, newRow])
    setExpense('')
    setAmount('')
  }

  const formSubmit = (e) => {
    e.preventDefault()
    addExpense(expense, amount)
  }

  return (
    <div className="my-3 border border-danger rounded-sm p-2">
      <form onSubmit={formSubmit}>
        <div className="form-group">
          <label htmlFor="">Please Enter Your Expense</label>
          <input
            type="text"
            name="expense"
            value={expense}
            onChange={handleExpenseChange}
            className="form-control border-danger"
            placeholder="Enter your Expense"
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Please Enter Your Expense Amount</label>
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            className="form-control border-danger"
            placeholder="Enter your Expense Amount"
          />
        </div>
        <button type="submit" className="btn btn-outline-danger">
          Add Expense
        </button>
      </form>
    </div>
  )
}

export default Expenses
