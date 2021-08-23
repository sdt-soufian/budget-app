import React, { Component } from 'react'

class TabRow extends Component {



    render() {
        return (
            <tr>
                <td>{this.props.expense}</td>
                <td>{this.props.amount}</td>
                <td>
                    <button style={{ color: '#0275d8' }} className="btn .btn-outline-*" onClick={this.props.editClick.bind(this, this.props.elet)}>
                        <i className="fas fa-edit"></i>
                    </button>
                    <button style={{ color: '#ff3b30' }} className="btn .btn-outline-*" onClick={this.props.deleteClick.bind(this, this.props.elet.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    }
}

export default TabRow
