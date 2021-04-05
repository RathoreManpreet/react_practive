import { useState } from 'react'
import '../container/Person.css'

const Counter = () => {
    const [state, setState] = useState(1)
    const increament = () => {
        setState(state + 1);
    }
    let div = [];
    for (let index = 0; index < state; index++) {
        div.push(<div className="person">Hello</div>);

    }
    return (
        <div>
            <div >
                {div}
            </div>
            <button onClick={increament}>Increament</button>
        </div>
    )
}

export default Counter
