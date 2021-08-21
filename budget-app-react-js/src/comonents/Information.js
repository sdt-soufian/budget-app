import React, { Component } from 'react'

class Information extends Component {
    render() {
        return (
            <div className="my-3 border border-danger rounded-sm p-2">
                <form>
                    <div className="form-group">
                        <label htmlFor="">Please Enter Your Expense</label>
                        <input type="text"
                            className="form-control border-danger"
                            placeholder="Enter your Expense" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Please Enter Your Expense Amount</label>
                        <input type="text"
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
