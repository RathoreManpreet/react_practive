import React, { Component } from 'react'

class PersonSecond extends Component {

    constructor() {
        super();
        this.state = {
            isActive: 'Yes'
        }
    }

    handleChange = () => {
        this.setState({
            isActive: 'No'
        });
    }
    render() {
        return (
            <div>
                Hello {this.props.name}

                <p>You are active: {this.state.isActive}</p>

                <button onClick={this.handleChange}>Change</button>
            </div>
        )
    }
}

export default PersonSecond;
