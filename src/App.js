import './App.css';
import Person from './container/Person'
import PS from './container/PersonSecond'
import { useState } from 'react';

function App() {
  const [p, setP] = useState({
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
  })

  const handleChange = (event, id) => {
    const personIndex = p.person.findIndex(p => {
      return p.id === id;
    });

    const person1 = { ...p.person[personIndex] };
    person1.name = event.target.value;

    const newPersons = [...p.person]
    newPersons[personIndex] = person1

    setP({ ...p, person: newPersons });

  }

  const toggle = () => {
    setP({
      ...p,
      isActive: !p.isActive
    })
  }

  let person = null;

  const deletePersonHandler = (personIndex) => {
    let persons = [...p.person];
    persons.splice(personIndex, 1)
    setP({ ...p, person: persons });

  }
  const style = {
    backgroundColor: 'blue'
  }

  const classes = [];

  if (p.isActive === true) {
    style.backgroundColor = 'green';
    classes.push('yellow');
    person = p.person.map((per, index) => {
      return <Person change={(event) => handleChange(event, per.id)} key={per.id} name={per.name} age={per.age} click={() => deletePersonHandler(index)} />;
    });
  } else {
    classes.push('red');

  }

  console.log(classes.join(' '));
  return (
    <div className="App-header" style={style}>
      <h1 className={classes.join(' ')}>Hello world</h1>
      <button onClick={toggle} >Toggle</button>
      <div>
        {
          person
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
