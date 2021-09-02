import React from 'react'

const Budget = (props) => {
    return (
        <div className="mb-3 border border-success rounded-sm p-2">
            <form onSubmit={props.formSubmit}>
                <div className="form-group">
                    <label htmlFor="">Budget</label>
                    <input type="text"
                        value={props.inputBudget}
                        onChange={props.handleChange}
                        className="form-control border-success"
                        placeholder="Enter your budget" />
                </div>
                <button type="submit" className="btn btn-outline-success">Calculate</button>
            </form>

        </div>
    )
}

export default Budget
