import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1)
    }
    
    const minus = () => {
        setCount(count - 1)
    }

    return(
        <div>
        <button onClick = {plus} >+</button>
        <span>{count}</span>
        <button onClick = {minus}>-</button>
        </div>
    )
}

export default Counter;