import './App.css';
import Person from './container/Person'
import PS from './container/PersonSecond'
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    person: [
      {
        name: 'Manu',
        age: '27'
      },
      {
        name: 'Salman',
        age: '54'
      },
      {
        name: 'Amit',
        age: '70'
      },
      {
        name: 'Sukh',
        age: '20'
      }
    ]
  })

  const handleChange = () => {
    setState({
      person: [
        {
          name: 'Manpreet',
          age: '27'
        },
        {
          name: 'Salman',
          age: '54'
        },
        {
          name: 'Amit',
          age: '70'
        },
        {
          name: 'Sukh',
          age: '20'
        }
      ]
    });
  }

  return (
    <div className="App-header">
      <h1 >Hello world</h1>
      <div>
        <Person name={state.person[0].name} age={state.person[0].age} />

        <Person name={state.person[1].name} age={state.person[1].age} />
        <Person name={state.person[2].name} age={state.person[2].age} />
        <Person name={state.person[3].name} age={state.person[3].age} />
        <button onClick={handleChange}>Change</button>
      </div>

      <div>
        Class Based
      </div>
      <PS name="Param" age="20" />
    </div>

  );
}

export default App;
