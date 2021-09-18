import React, { useContext } from 'react'
import { BudgetContext } from '../store'

const ExpenseTitle = () => {
  const { tab, stateExpense } = useContext(BudgetContext)

  const sum = (list) => {
    let s = 0
    list.forEach((elem) => {
      s += parseInt(elem.amount)
    })
    return s
  }

  const TitleState = (T, stateExpense) => {
    let TitleSum
    if (stateExpense) {
      TitleSum = sum(T)
    } else {
      TitleSum = sum(T)
    }
    return TitleSum
  }

  return (
    <div className="col">
      <div className="text-center">
        <h3>EXPENCES</h3>
        <i
          style={{ color: '#7289da' }}
          className="far fa-credit-card fa-3x"
        ></i>
        <h3 style={{ color: '#d9534f' }}>
          {tab.length > 0 ? TitleState(tab, stateExpense) : 0}
        </h3>
      </div>
    </div>
  )
}

export default ExpenseTitle
