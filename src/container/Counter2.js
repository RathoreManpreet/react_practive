import { useState } from 'react'

const Counter2 = () => {
    const [counter, setCounter] = useState(0)
    const increament = () => {
        setCounter(counter + 1);
    }
    const decreament = () => {
        setCounter(counter - 1);
    }

    const increament5 = () => {
        setCounter(counter + 5);
    }
    const decreament5 = () => {
        setCounter(counter - 5);
    }
    return (
        <div>
            <div>Counter {counter}</div>
            <div>
                <button onClick={increament}>Increament</button>
                <button onClick={decreament}>Decreament</button>
                <button onClick={increament5}>5 Increament</button>
                <button onClick={decreament5}>5 Decreament</button>

            </div>
        </div>
    )
}

export default Counter2
