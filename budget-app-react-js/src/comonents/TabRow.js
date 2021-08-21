import React, { Component } from 'react'

class TabRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.expense}</td>
                <td>{this.props.amount}</td>
            </tr>
        )
    }
}

export default TabRow
