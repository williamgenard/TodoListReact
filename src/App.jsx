import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Form from './components/form/Form'

function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks(currentValue => [...currentValue, newTask])
  }

  return (
    <>
      <Form onAddTask={addTask}/>
    </>
  )
}

export default App
