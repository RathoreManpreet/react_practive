import './App.css';
import Person from './container/Person'
import PS from './container/PersonSecond'
import { useState } from 'react';

function App() {
  const [p, setP] = useState({
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
    ],
    isActive: 1,
  })

  const handleChange = (event) => {

    setP({
      ...p,
      person: [
        {
          name: 'Manpreet',
          age: '27'
        },
        {
          name: event.target.value,
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

  const toggle = () => {
    setP({
      ...p,
      isActive: !p.isActive
    })
  }

  return (
    <div className="App-header">
      <h1 >Hello world</h1>
      <button onClick={toggle} >Toggle</button>
      <div>
        {
          p.isActive == 1 ? (<>
            <Person change={(event) => handleChange(event)} name={p.person[0].name} age={p.person[0].age} />
            <Person name={p.person[1].name} age={p.person[1].age} />
            <Person name={p.person[2].name} age={p.person[2].age} />
            <Person name={p.person[3].name} age={p.person[3].age} />
          </>) : null
        }

        {/* <button onClick={handleChange}>Change</button> */}
      </div>

      <div>
        Class Based
      </div>
      <PS name="Param" age="20" />
    </div>

  );
}

export default App;
