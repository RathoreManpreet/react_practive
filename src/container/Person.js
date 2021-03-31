// import './Person.css';
const Person = (props) => {
    var style = {
        backgroundColor: 'red',
        textAlign: 'center',
        color: 'yellow'
    }
    return (<div className="person" style={style}>
        <p>I'm a Person and my name is {props.name} and age {props.age}</p>
        <div>
            {props.children}
        </div>
        <button onClick={props.click}>Update</button>
        <input onChange={props.change} />
    </div>)
}

export default Person;