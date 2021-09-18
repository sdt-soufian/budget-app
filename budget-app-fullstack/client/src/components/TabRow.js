import React, { useContext } from 'react'
import { BudgetContext } from '../store'

const TabRow = ({ id, expense, amount }) => {
  const { tab, setTab, setExpense, setAmount, setStateExpense } =
    useContext(BudgetContext)

  const handleDelete = () => {
    setTab(tab.filter((elem) => elem.id !== id))
    setStateExpense(false)
  }

  const handleEdit = () => {
    setExpense(expense)
    setAmount(amount)
  }

  return (
    <tr>
      <td>{expense}</td>
      <td>{amount}</td>
      <td>
        <button
          style={{ color: '#0275d8' }}
          className="btn .btn-outline-*"
          onClick={handleEdit}
        >
          <i className="fas fa-edit"></i>
        </button>
        <button
          style={{ color: '#ff3b30' }}
          className="btn .btn-outline-*"
          onClick={handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  )
}

export default TabRow
