import React from 'react'

const Errors = (props) => {

    const changeStyle = () => {
        return {
            display: props.active ? 'block' : 'none',
            width: '200px',
            height: '80px',
            borderRadius: '5px',
            paddingTop: '15px',
            position: 'absolute',
            top: '0px',
            left: '0px',
            backgroundColor: '#f18888',
            color: '#760d0d',
            zIndex: '999999',
            textAlign: 'center'
        }
    }
    return (
        <div style={changeStyle()}>
            <button style={{ color: '#760d0d' }} className="btn .btn-outline-*" onClick={props.handleErrorsClick}>
                <i className="fas fa-times"></i>
            </button>
            Errors try again....
        </div >
    )
}

export default Errors
