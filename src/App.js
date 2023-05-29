import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "name": "Respond to emails",
      "category": "work",
      "priority": 1
    },
    {
      "id": 2,
      "name": "Math homework",
      "category": "school",
      "priority": 1
    },
    {
      "id": 3,
      "name": "Laundry",
      "category": "house",
      "priority": 2
    }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    }
  
    const addTask = (task) => {
      const id = tasks.length + 1
      const newTask = { id, ...task }
      setTasks([...tasks, newTask])
      }

  return (
    <div className="App">
      <Header title="Lista zakupów" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/>:<p>No tasks!</p>}
<AddTask onAdd={addTask} />
    </div>
  );
}


export default App;
