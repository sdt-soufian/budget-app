import React, { Component } from 'react'

class BudgetTitle extends Component {
    render() {
        return (
            <div className="col">
                <div className="text-center">
                    <h3>BUDGET</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#7289da" className="bi bi-cash" viewBox="0 0 16 16">
                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                    </svg>
                    <h3 style={{ color: '#5cb85c' }}>{this.props.budget}</h3>
                </div>
            </div>

        )
    }
}

export default BudgetTitle
