import React from 'react'
import TabRow from './TabRow'

const ExpenseManager = (props) => {

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
                    {props.newRow.length > 0 ? props.newRow.map(elem => (
                        <TabRow key={elem.id}
                            id={elem.id}
                            row={elem}
                            expense={elem.expense}
                            elet={elem}
                            amount={elem.amount}
                            deleteElement={props.deleteExpense}
                            editElement={props.editExpense} />
                    )) : <tr>
                        <th></th>
                        <th> now data</th>
                        <th></th>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseManager
