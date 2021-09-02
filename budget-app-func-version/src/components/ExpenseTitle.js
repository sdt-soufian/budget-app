import React from 'react'

const ExpenseTitle = (props) => {
    return (
        <div className="col">
            <div className="text-center">
                <h3>EXPENCES</h3>
                <i style={{ color: '#7289da' }} className="far fa-credit-card fa-3x"></i>
                <h3 style={{ color: '#d9534f' }}>{props.expense}</h3>
            </div>
        </div>
    )
}

export default ExpenseTitle
