import React, { useState } from "react";
import BalanceTitle from './components/BalanceTitle'
import Budget from './components/Budget'
import BudgetTitle from './components/BudgetTitle'
import ExpenseManager from './components/ExpenseManager'
import ExpenseTitle from './components/ExpenseTitle'
import Information from './components/Information'
import Errors from './components/Errors'


const App = () => {
  const [budget, setBudget] = useState('0');
  const [expense, setExpense] = useState('0');
  const [balance, setBalance] = useState('0');
  const [inputBudget, setInputBudget] = useState('0');
  const [inputExpense, setInputExpense] = useState('');
  const [inputExpenseAmount, setInputExpenseAmount] = useState('');
  const [errors, setErrors] = useState(false);
  const [tab, setTab] = useState([])


  const handleChange = (e) => setInputBudget(e.target.value)

  const handleExpenseChange = (e) => setInputExpense(e.target.value)

  const handleExpenseAmountChange = (e) => setInputExpenseAmount(e.target.value)

  const addBudget = price => {
    if (parseInt(price) < 0 || price === '' || price.search(/\D+/g) !== -1) {
      setErrors(true)
    }
    else {
      setBudget(price)
      setBalance(price)
      setInputBudget('')
    }

  }

  const addExpense = (expense, amount) => {
    const newRow = {
      id: Math.floor(Math.random() * 200),
      expense: expense,
      amount: amount,
    }
    setTab(state => state.concat(newRow))
    setExpense(prev => parseInt(prev) + parseInt(inputExpenseAmount))
    setBalance(prev => parseInt(prev) - parseInt(inputExpenseAmount))
  }

  const expenseSubmit = (e) => {
    e.preventDefault()
    if (inputExpense === '' || inputExpense.search(/\D+/g) === -1 || inputExpenseAmount < 0 || inputExpenseAmount === '') {
      setErrors(true)
    }
    else {
      addExpense(inputExpense, inputExpenseAmount)
      setInputExpense('')
      setInputExpenseAmount('')
    }
  }

  const budgetSubmit = (e) => {
    e.preventDefault();
    addBudget(inputBudget);
  }

  const deleteExpense = id => {
    setTab(tab.filter(elem => elem.id !== id))
    const elem = tab.find(elt => elt.id === id);
    setExpense(prev => parseInt(prev) - parseInt(elem.amount))
    setBalance(prev => parseInt(prev) + parseInt(elem.amount))
  };

  const editExpense = row => {
    console.log(row)
    setInputExpense(row.expense)
    setInputExpenseAmount(row.amount)
    deleteExpense(row.id)
  };

  const handleErrorsClick = () => setErrors(false)


  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-4 col-sm-12">
          <Budget inputBudget={inputBudget} handleChange={handleChange} formSubmit={budgetSubmit} />

          <Information
            inputExpense={inputExpense}
            inputExpenseAmount={inputExpenseAmount}
            expenseChange={handleExpenseChange}
            amountChange={handleExpenseAmountChange}
            expenseSubmit={expenseSubmit} />
        </div>
        <div className="col-lg-8 col-sm-12">
          <Errors active={errors} handleErrorsClick={handleErrorsClick} />
          <div className="row">
            <BudgetTitle budget={budget} />
            <ExpenseTitle expense={expense} />
            <BalanceTitle budgetBalance={balance} />
          </div>
          <div className="row mt-4">
            <ExpenseManager newRow={tab}
              deleteExpense={deleteExpense}
              editExpense={editExpense} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
