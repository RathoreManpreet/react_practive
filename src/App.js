import './App.css';
import Person from './components/Person/Person'
import PS from './components/Person/PersonSecond'

import React, { PureComponent } from 'react';
// import Counter from './container/Counter';
import Counter2 from './container/Counter2'
import Counter3 from './container/Counter3';
class App extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   console.log('App.js Constructor');
  // }
  state = {
    person: [
      {
        id: 'A1',
        name: 'Manu',
        age: '27'
      },
      {
        id: 'A2',
        name: 'Salman',
        age: '54'
      },
      {
        id: 'A3',
        name: 'Amit',
        age: '70'
      },
      {
        id: 'A4',
        name: 'Sukh',
        age: '20'
      }
    ],
    isActive: true,
  };

  // componentDidMount() {
  //   console.log('App.js componentDidiMount');

  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('App.js getSnapshotBeforeUpdate');
  //   console.log('props ', prevProps);

  //   return null;
  // }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   console.log('App.js componentDidUpdate');

  // }



  // static getDerivedStateFromProps(props, state) {
  //   console.log('App.js getDerivedStateFromProps');
  //   console.log('APP.js ', state, props)
  //   return state;
  // }

  handleChange = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person1 = { ...this.state.person[personIndex] };
    person1.name = event.target.value;

    const newPersons = [...this.state.person]
    newPersons[personIndex] = person1

    this.setState({ ...this.state.person, person: newPersons });

  }

  toggle = () => {
    this.setState({
      ...this.state,
      isActive: !this.state.isActive
    })
  }



  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.person];
    persons.splice(personIndex, 1)
    this.setState({ ...this.state.person, person: persons });

  }

  render() {
    // console.log('App.js render');
    let person = null;
    if (this.state.isActive) {
      person = this.state.person.map((per, index) => {
        return <Person change={(event) => this.handleChange(event, per.id)} key={per.id} name={per.name} age={per.age} click={() => this.deletePersonHandler(index)} />;
      });
    }

    return (
      <div className="App-header" >
        {/* <h1 >Hello world</h1>
        <button onClick={this.toggle} >Toggle</button>
        <div>
          {
            person
          }
        </div>

        <div>
          Functional Based
        </div>
        { this.state.isActive ? <PS name={this.state.person[0].name} age={this.state.person[0].age} change={(event) => this.handleChange(event, this.state.person[0].id)} /> : null} */}
        {/* <Counter /> */}
        {/* <Counter2 /> */}
        <Counter3 />
      </div>

    );
  }


}

export default App;
