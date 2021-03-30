const Person = (props) => {
    
    return (<>
        <p>I'm a Person and my name is {props.name} and age {props.age}</p>
        <div>
            {props.children}
        </div>
    </>)
}

export default Person;