import React, { Component } from 'react'

class Information extends Component {



    render() {
        return (
            <div className="my-3 border border-danger rounded-sm p-2">
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Please Enter Your Expense</label>
                        <input
                            type="text"
                            name="titleExpense"
                            value={this.props.titleExpense}
                            onChange={this.props.handleChange}
                            className="form-control border-danger"
                            placeholder="Enter your Expense" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Please Enter Your Expense Amount</label>
                        <input
                            type="text"
                            name="amount"
                            value={this.props.amount}
                            onChange={this.props.handleChange}
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
