import React from 'react'

const Information = (props) => {
    return (
        <div className="my-3 border border-danger rounded-sm p-2">
            <form onSubmit={props.expenseSubmit}>
                <div className="form-group">
                    <label htmlFor="">Please Enter Your Expense</label>
                    <input
                        type="text"
                        name="titleExpense"
                        value={props.inputExpense}
                        onChange={props.expenseChange}
                        className="form-control border-danger"
                        placeholder="Enter your Expense" />
                </div>

                <div className="form-group">
                    <label htmlFor="">Please Enter Your Expense Amount</label>
                    <input
                        type="text"
                        name="amount"
                        value={props.inputExpenseAmount}
                        onChange={props.amountChange}
                        className="form-control border-danger"
                        placeholder="Enter your Expense Amount" />
                </div>
                <button type="submit" className="btn btn-outline-danger">Add Expense</button>
            </form>

        </div>
    )
}

export default Information
