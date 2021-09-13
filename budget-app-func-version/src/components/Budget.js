import React, { useContext } from 'react'
import { BudgetContext, PriceContext } from '../App'

const Budget = () => {
    const [budget, setBudget] = useContext(BudgetContext)
    const [price, setPrice] = useContext(PriceContext)

    const handleBudgetChange = (e) => setBudget(e.target.value)

    const addPrice = (price) => {
        const newPrice = price
        setPrice(newPrice)
        setBudget('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addPrice(budget)
    }
    return (
        <div className="mb-3 border border-success rounded-sm p-2">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Budget</label>
                    <input type="text"
                        name="budget"
                        value={budget}
                        onChange={handleBudgetChange}
                        className="form-control border-success"
                        placeholder="Enter your budget" />
                </div>
                <button type="submit" className="btn btn-outline-success">Calculate</button>
            </form>

        </div>
    )
}

export default Budget
