import React from 'react'

const Button = ({toggleForm}) => {
    return (
        <button className='btn' onClick={toggleForm}>Add Task</button>
    )
}

export default Button
