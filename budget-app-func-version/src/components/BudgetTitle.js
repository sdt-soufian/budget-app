import React from 'react'

const BudgetTitle = (props) => {
    return (
        <div className="col">
            <div className="text-center">
                <h3>BUDGET</h3>
                <i style={{ color: '#7289da' }} className="fas fa-money-bill fa-3x"></i>
                <h3 style={{ color: '#5cb85c' }}>{props.budget}</h3>
            </div>
        </div>
    )
}

export default BudgetTitle
