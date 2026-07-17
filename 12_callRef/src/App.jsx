
import { useRef, useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  // let val = useRef(0);

  // // Good practice: Initialize refs with null
  // let btnRef = useRef(null);

  // function handleClick(){
  //   val.current = val.current + 1;
  //   console.log("value: ", val.current);
  //   setCount(count+1);
  // }

  // function changeColor() {
  //   btnRef.current.style.backgroundColor = "red";
  // }

  // useEffect(() => {
  //   console.log("main firse render hogaya ")
  // })

  let timerRef = useRef(null);

  const [Time, setTime] = useState(0);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(Time => Time+1)
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current)
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer()
    setTime(0);
  }
  

  return (
    <div>

      <h1>Stopwatch: {Time} seconds</h1>

        <br />
        <br />
        
      <button onClick={startTimer} >
        Start
      </button>
        <br />
        <br />

      <button onClick={stopTimer} >
        Stop
      </button>
        <br />
        <br />

      <button onClick={resetTimer} >
        Reset
      </button>



      {/* <button 
      ref={btnRef}
      onClick={handleClick} >
        Increment
      </button>
      <br />

      <button onClick={changeColor} >
        click me to change the color of 1st btn
      </button>
      <br />

      <div>
        Count: {count}
      </div> */}
    </div>
  )
}

export default App
