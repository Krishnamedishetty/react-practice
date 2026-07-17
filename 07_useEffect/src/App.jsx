import { useEffect } from "react"
import { useState } from "react"
import "./App.css"

function App() {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  function handleClick() {
    setCount(count+1);
  }

  function handleClickTotal() {
    setTotal(total+1);
  }

  // first -> side-effect function
  // second -> clean-up function
  // third -> comma separated dep list

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])

  // ----variation:1----
  // runs on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  // ----variation:2----
  // that runs on only first render
  // useEffect(() => {
  //   alert("I will run on only first render");
  // }, [])

  // ----variation:3----
  // useEffect(() => {
  //   alert("I will run everytime when count is updated");
  // }, [count])

  // ----variation:4----
  // multiple dependencies
  // useEffect(() => {
  //   alert("I will run everytime when count is updated");
  // }, [count, total])
  
  // ----variation:5----
  // iss baar let's add a cleanup function
  useEffect(() => {
    alert("Count is updated")
  
    return () => {
      alert("count is unmounted form ui")
    }
  }, [count])
  
  
  

  return (
    <div>
      <br />
      {/* 1st button for counts */}
      <button onClick={handleClick} >
        Click Me
      </button>

      <br />
      <br />

      Count is: {count}

      <br />
      <br />
      {/* 2nd button for total */}
      <button onClick={handleClickTotal} >
        Click Me
      </button>

      <br />
      <br />

      Total is: {total}

    </div>
  )
}

export default App
