import { useState } from 'react'
import { AuthBox } from './pages/AuthBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthBox></AuthBox>
  )
}

export default App
