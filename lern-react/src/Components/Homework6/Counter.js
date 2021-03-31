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
        <div className = 'counter-block'>
        <button onClick = {plus} className = 'clicker'>+</button>
        <span className='number'>{count}</span>
        <button onClick = {minus} className = 'clicker'>-</button>
        </div>
    )
}

export default Counter;