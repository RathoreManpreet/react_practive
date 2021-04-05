import './App.css';
import Person from './components/Person/Person'
import PS from './components/Person/PersonSecond'
import React, { Component } from 'react';
import Counter from './container/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js Constructor');
  }
  componentDidMount() {
    console.log('App.js componentDidiMount');

  }
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

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps');
    console.log('APP.js ', state, props)
    return state;
  }

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
      ...this.state.person,
      isActive: !this.state.person.isActive
    })
  }



  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.person];
    persons.splice(personIndex, 1)
    this.setState({ ...this.state.person, person: persons });

  }

  render() {
    console.log('App.js render');

    let person = null;
    person = this.state.person.map((per, index) => {
      return <Person change={(event) => this.handleChange(event, per.id)} key={per.id} name={per.name} age={per.age} click={() => this.deletePersonHandler(index)} />;
    });
    return (
      <div className="App-header" >
        <h1 >Hello world</h1>
        <button onClick={this.toggle} >Toggle</button>
        <div>
          {
            person
          }
        </div>

        <div>
          Class Based
        </div>
        <PS name="Param" age="20" />
        <Counter />
      </div>

    );
  }


}

export default App;
