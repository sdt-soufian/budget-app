import React, { Component } from 'react'
import TabRow from './TabRow'


class ExpenseManager extends Component {

    render() {
        return (
            <div className="col-lg">
                <table className="table width-100">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Expenses Title</th>
                            <th scope="col">Expenses Value</th>
                            <th scope="col">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tabRow.map(elem => (
                            <TabRow key={elem.id}
                                expense={elem.expense}
                                elet={elem}
                                deleteClick={this.props.deleteClick}
                                editClick={this.props.editClick}
                                amount={elem.expenseAmount} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExpenseManager
