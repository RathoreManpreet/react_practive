import { Component } from "react";

class Counter3 extends Component {
    state = {
        counter: 0
    }

    increament = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    decreament = () => {
        this.setState({ counter: this.state.counter - 1 });

    }

    increament5 = () => {
        this.setState({ counter: this.state.counter + 5 });
    }

    decreament5 = () => {
        this.setState({ counter: this.state.counter - 5 });
    }

    render() {
        return <div>
            <div>Counter {this.state.counter}</div>
            <div>
                <button onClick={this.increament}>Increament</button>
                <button onClick={this.decreament}>Decreament</button>
                <button onClick={this.increament5}>5 Increament</button>
                <button onClick={this.decreament5}>5 Decreament</button>

            </div>
        </div>
    }
}

export default Counter3;