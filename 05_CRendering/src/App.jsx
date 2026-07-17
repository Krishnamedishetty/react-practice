import {useState} from 'react';
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const [isLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return (
      <LoginBtn/>
    )
  }

  return (
    <div>
      <h1>Hi Welcome to the React website </h1>
      <p>I am learning Conditional Rendering</p>
      <div>
        {isLoggedIn && <LogoutBtn/>}
      </div>
    </div>
  )
  
  
  
  
  
  
  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )




  // if (isLoggedIn) {
  //   return (
  //     <LogoutBtn/>
  //   )
  // } else {
  //   return (
  //     <LoginBtn/>
  //   )
  // }
}

export default App
