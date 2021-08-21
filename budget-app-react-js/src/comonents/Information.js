import React, { Component } from 'react'

class Information extends Component {

    state = {
        expense: '',
        expenseAmount: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addRow(this.state.expense, this.state.expenseAmount);
        this.setState({ expense: '' })
        this.setState({ expenseAmount: '' })
    }
    render() {
        return (
            <div className="my-3 border border-danger rounded-sm p-2">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Please Enter Your Expense</label>
                        <input
                            type="text"
                            name="expense"
                            value={this.state.expense}
                            onChange={this.handleChange}
                            className="form-control border-danger"
                            placeholder="Enter your Expense" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Please Enter Your Expense Amount</label>
                        <input
                            type="text"
                            name="expenseAmount"
                            value={this.state.expenseAmount}
                            onChange={this.handleChange}
                            className="form-control border-danger"
                            placeholder="Enter your Expense Amount" />
                    </div>


                    <button type="submit" className="btn btn-outline-danger">Add Expense</button>
                </form>

            </div>
        )
    }
}

export default Information
