// import './Person.css';
const Person = (props) => {
    var style = {
        backgroundColor: 'red',
        textAlign: 'center',
        color: 'yellow'
    }
    return (<div className="person" style={style}>
        <p onClick={props.click}>I'm a Person and my name is {props.name} and age {props.age}</p>
        <div>
            {props.children}
        </div>
        <input onChange={props.change} />
    </div>)
}

export default Person;