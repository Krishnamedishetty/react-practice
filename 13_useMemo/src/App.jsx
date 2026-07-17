
import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {

  const [time, setTime] = useState(0);
  const [input, setInput] = useState(0);  

  function expensiveTask(num) {
    console.log("first")
    for (let i = 0; i <= 1000000000; i++) {null}
    return num*2;
  }

  let double = useMemo(() => expensiveTask(input), [input]);

  function handleClick() {
    setTime(time + 1);
  }

  return (
    <div>

      <button onClick={handleClick} >
        Increment
      </button>

      <h2> Count: {time} </h2>

      <input 
      type="number"
      placeholder='enter number'
      value={input}
      onChange={(e) => setInput(e.target.value)}
       />

      <h3> Double: {double} </h3>
    </div> 

  )
}

export default App
