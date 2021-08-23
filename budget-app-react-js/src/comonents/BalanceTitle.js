import React, { Component } from 'react'

class BalanceTitle extends Component {
    render() {
        return (
            <div className="col">
                <div className="text-center">
                    <h3>BALANCE</h3>
                    <i style={{ color: '#7289da' }} className="fas fa-pound-sign fa-3x"></i>
                    <h3>0</h3>
                </div>
            </div>
        )
    }
}

export default BalanceTitle
