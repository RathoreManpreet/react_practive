import '../../container/Person.css';
import { useEffect } from 'react';
const PersonSecond = (props) => {
    useEffect(() => {
        console.log('useEffect of Person Second ', props.name);
        return () => {
            console.log('will Unmount');
        }
    }, [props.name])
    return (<div className="person" >
        <p onClick={props.click}>I'm a Person and my name is {props.name} and age {props.age}</p>
        <div>
            {props.children}
        </div>
        <input onChange={props.change} />
    </div>);
}

export default PersonSecond
