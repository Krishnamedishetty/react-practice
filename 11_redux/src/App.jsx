
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handledecrementClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }

  function handleIncAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container' >
      <button onClick={handleIncrementClick} > + </button>
      <br />
      <p>Count: {count}</p>
      <br />
      <button onClick={handledecrementClick} > - </button>
      <br />
      <br />
      <button onClick={handleResetClick} > Reset </button>
      <br />
      <br />
      <input 
      type="Number"
      value={amount}
      placeholder='Enter Amount'
      onChange={(e) => setAmount(e.target.value)}
       />

       <br />
      <br />
      <button onClick={handleIncAmountClick} > Inc by Amount </button>
    </div>
  )
}

export default App
