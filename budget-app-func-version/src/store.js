import React, { useState, createContext } from 'react'

export const BudgetContext = createContext()

const BudgetProvider = ({ children }) => {
  const [tab, setTab] = useState([])
  const [expense, setExpense] = useState('')
  const [amount, setAmount] = useState('')
  const [budget, setBudget] = useState('')
  const [price, setPrice] = useState('')
  const [stateExpense, setStateExpense] = useState(true)

  return (
    <BudgetContext.Provider
      value={{
        tab,
        setTab,
        expense,
        setExpense,
        amount,
        setAmount,
        budget,
        setBudget,
        price,
        setPrice,
        stateExpense,
        setStateExpense,
      }}
    >
      {children}
    </BudgetContext.Provider>
  )
}

export default BudgetProvider
