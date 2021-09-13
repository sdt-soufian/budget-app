import React, { useContext } from 'react'
import TabRow from './TabRow'
import { TabContext } from '../App'

const ExpenseManager = () => {
    const [tab, setTab] = useContext(TabContext)

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
                    {tab.length > 0 ? tab.map(elem => (
                        <TabRow key={elem.id}
                            id={elem.id}
                            row={elem}
                            expense={elem.expense}
                            elet={elem}
                            amount={elem.amount}
                        />
                    )) : <tr>
                        <th></th>
                        <th> <h2>No Data</h2> </th>
                        <th></th>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseManager
