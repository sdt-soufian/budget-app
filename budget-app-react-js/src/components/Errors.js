import React, { Component } from 'react'

class Errors extends Component {
    changeStyle = () => {
        return {
            display: this.props.active ? 'block' : 'none',
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

    render() {
        return (
            <div style={this.changeStyle()}>
                <button style={{ color: '#760d0d' }} className="btn .btn-outline-*" onClick={this.props.handleClick}>
                    <i className="fas fa-times"></i>
                </button>
                Errors try again....
            </div>
        )
    }
}
/*const msgErrors = {
    width: '200px',
    height: '60px',
    position: 'absolute',
    top: '1%',
    left: '1%',
    backgroundColor: '#f18888',
    color: '#760d0d',
    zIndex: '999999',
    textAlign: 'center'
}*/
export default Errors
