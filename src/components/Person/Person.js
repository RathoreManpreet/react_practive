import { Component } from 'react';
import '../../container/Person.css';
class Person extends Component {
    // componentWillUnmount() {
    //     console.log('Person js component will unmount');
    // }
    render() {
        return (<div className="person" >
            <p onClick={this.props.click}>I'm a Person and my name is {this.props.name} and age {this.props.age}</p>
            <div>
                {this.props.children}
            </div>
            <input onChange={this.props.change} />
        </div>);
    }

}

export default Person;