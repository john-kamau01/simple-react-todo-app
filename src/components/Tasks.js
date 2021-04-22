import React from 'react';
import Task from './Task';

const Tasks = ({tasks, removeTask, toggleReminder}) => {
    return(
        <div>
            {tasks.map((task)=>{
                return (
                    <div key={task.id}>
                        <Task task={task} removeTask={removeTask} toggleReminder={toggleReminder}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Tasks
