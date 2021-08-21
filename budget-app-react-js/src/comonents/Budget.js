import React, { Component } from 'react'

class Budget extends Component {

    state = {
        price: '0'
    }

    handleChange = (e) => {
        this.setState({ price: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBudget(this.state.price) //????
        this.setState({ price: '' })
    }
    render() {
        return (
            <div className="mb-3 border border-success  rounded-sm p-2">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Budget</label>
                        <input type="text"
                            className="form-control border-success"
                            value={this.state.price}
                            onChange={this.handleChange}
                            placeholder="Enter your budget" />
                    </div>
                    <button type="submit" className="btn btn-outline-success">Calculate</button>
                </form>

            </div>
        )
    }
}

export default Budget
