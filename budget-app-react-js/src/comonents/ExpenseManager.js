import React, { Component } from 'react'

class ExpenseManager extends Component {
    render() {
        return (
            <div className="col-lg">
                <table className="table table-dark width-100">
                    <thead>
                        <tr>
                            <th scope="col">Expenses Title</th>
                            <th scope="col">Expenses Value</th>
                            <th scope="col">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExpenseManager
