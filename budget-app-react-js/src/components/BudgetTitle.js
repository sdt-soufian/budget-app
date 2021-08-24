import React, { Component } from 'react'

class BudgetTitle extends Component {
    render() {
        return (
            <div className="col">
                <div className="text-center">
                    <h3>BUDGET</h3>
                    <i style={{ color: '#7289da' }} className="fas fa-money-bill fa-3x"></i>
                    <h3 style={{ color: '#5cb85c' }}>{this.props.budget}</h3>
                </div>
            </div>

        )
    }
}

export default BudgetTitle