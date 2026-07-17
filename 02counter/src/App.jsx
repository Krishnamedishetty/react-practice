import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counetr</h2>
    </>
  )
}

export default App
