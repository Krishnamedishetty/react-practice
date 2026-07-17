import './App.css'

function App() {

  function handleClick(){
      alert('You clicked on the button');
    }

  function handleMouseOver() {
    alert('You Muoseovered on the para');
  }

  function handleInputChange(e){
    // console.log("Input me value change hui he");
    console.log("value till now: " + e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // i am writing my custom behaviour down
    alert("Form submit kardhu kya");
  }

  return (
    <div>

      <h1>Event Handling</h1>
      <br />

      {/* don't write in this manner, this is called immediate invocation */}
      {/* <button onClick={alert("you clicked")} >
        Click Me
      </button> */}


      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit" >
          Submit
        </button>
      </form>

      <br />

      <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>
        I am a para
      </p>



      <br />
      <h2>arrow function</h2>
      <br />
      <br />
      <button onClick={() => { alert("you clicked") }} >
        Click Me 
      </button>
      <br />
      <br />
      <h2>created a seperate function</h2>
      <br />
      <button onClick={handleClick} >
        Click Me
      </button>

    </div>
  )
}

export default App
