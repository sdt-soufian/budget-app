import React, { Component } from 'react'

class ExpenseTitle extends Component {
    render() {
        return (
            <div className="col">
                <div className="text-center">
                    <h3>EXPENCES</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#7289da" className="bi bi-credit-card" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                    </svg>
                    <h3 style={{ color: '#d9534f' }}>0</h3>
                </div>
            </div>
        )
    }
}

export default ExpenseTitle
