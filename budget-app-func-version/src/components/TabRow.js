import React from 'react'

const TabRow = (props) => {

    const handleDelete = () => props.deleteElement(props.id)

    const handleEdit = () => props.editElement(props.row)

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
