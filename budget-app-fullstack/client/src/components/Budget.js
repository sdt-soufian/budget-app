import React, { useContext, useEffect } from 'react'
import { BudgetContext } from '../store'
// import httpClient from './axios'

const Budget = () => {
  const { budget, setBudget, setPrice } = useContext(BudgetContext)

  useEffect(() => {
    // httpClient.post('/').then((response) => {
    //   // console.log(response.data)
    //   setBudget(response.data)
    // })
  }, [budget])

  const handleBudgetChange = (e) => setBudget(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    setPrice(budget)
    setBudget('')
  }

  return (
    <div className="mb-3 border border-success rounded-sm p-2">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Budget</label>
          <input
            type="text"
            name="budget"
            value={budget}
            onChange={handleBudgetChange}
            className="form-control border-success"
            placeholder="Enter your budget"
          />
        </div>
        <button type="submit" className="btn btn-outline-success">
          Calculate
        </button>
      </form>
    </div>
  )
}

export default Budget
