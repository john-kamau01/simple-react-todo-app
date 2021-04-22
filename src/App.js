import React, {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Meeting at school',
        day: 'Friday 7th at 1:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Buy shoes at the store',
        day: 'Friday 7th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Buy new car',
        day: 'Saturday 8th at 4:30pm',
        reminder: true,
    },
    {
        id: 4,
        text: 'Drive to town',
        day: 'Saturday 8th at 5:30pm',
        reminder: false,
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> 
      task.id===id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header toggleForm={()=>setShowForm(!showForm)}/>
      {showForm && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} removeTask={removeTask} toggleReminder={toggleReminder}/> : 'No tasks found'}
    </div>
  );
}

export default App;
