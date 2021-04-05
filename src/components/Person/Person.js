import '../../container/Person.css';
const Person = (props) => {
    console.log('Person.js rendering...');

    return (<div className="person" >
        <p onClick={props.click}>I'm a Person and my name is {props.name} and age {props.age}</p>
        <div>
            {props.children}
        </div>
        <input onChange={props.change} />
    </div>)
}

export default Person;