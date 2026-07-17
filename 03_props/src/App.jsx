import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
      <Button 
      handleClick={handleClick} 
      text="Click Me"
      count={count}
      />

      {/* <Card name="krishna chaitanya" age="22" >
        <h2>Today i am learning props as function</h2>
        <p>It is very interesting </p>
        <p>Props means properties</p>
      </Card>
      <Card children="this is child prop" >
        
      </Card> */}
    </div>
  )
}

export default App
