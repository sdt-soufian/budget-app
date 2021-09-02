import React from 'react'

const BalanceTitle = (props) => {
    return (
        <div className="col">
            <div className="text-center">
                <h3>BALANCE</h3>
                <i style={{ color: '#7289da' }} className="fas fa-pound-sign fa-3x"></i>
                <h3>{props.budgetBalance}</h3>
            </div>
        </div>
    )
}

export default BalanceTitle
