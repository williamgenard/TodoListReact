import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Form from './components/form/Form'
import TaskList from './components/task-list/TaskList'

function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks(currentValue => [...currentValue, newTask])
  }

  const finishTask = (id) => {
    setTasks(
      currentValue => currentValue.map(
        t => t.id === id ? {...t, fini: true} : t
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(
      currentValue => currentValue.filter(t => t.id !== id)
    )
  }

  return (
    <>
      <Form onAddTask={addTask}/>
      <TaskList tasks={tasks}
        onDelete={deleteTask}
        onFinish={finishTask}/>
    </>
  )
}

export default App
