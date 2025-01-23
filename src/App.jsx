import { useState } from 'react'
import Header from './components/Header'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Login/>
    </>
  )
}

export default App
