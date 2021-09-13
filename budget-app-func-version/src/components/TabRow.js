import React, { useContext } from 'react'
import { TabContext, ExpenseContext, AmountContext, StateContext } from '../App'

const TabRow = (props) => {
    const [tab, setTab] = useContext(TabContext)
    const [expense, setExpense] = useContext(ExpenseContext)
    const [amount, setAmount] = useContext(AmountContext)
    const [stateExpense, setStateExpense] = useContext(StateContext)

    const handleDelete = () => {
        setTab(tab.filter(elem => elem.id !== props.id));
        setStateExpense(false)
    }

    const handleEdit = () => {
        setExpense(props.expense)
        setAmount(props.amount)
    };

    return (
        <tr>
            <td>{props.expense}</td>
            <td>{props.amount}</td>
            <td>
                <button style={{ color: '#0275d8' }} className="btn .btn-outline-*" onClick={handleEdit}>
                    <i className="fas fa-edit"></i>
                </button>
                <button style={{ color: '#ff3b30' }} className="btn .btn-outline-*" onClick={handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    )
}

export default TabRow
