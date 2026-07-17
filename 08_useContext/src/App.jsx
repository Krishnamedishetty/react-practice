import { createContext, useState } from "react"
import "./App.css"
import ChildA from "./components/ChildA";

// step1: create Context
const UserContext = createContext();
// step2: wrap all the child inside a provider
// step3: pass value
// step4: make the child context consumer

function App() {

  const [user] = useState({name:"love"});

  return (
    <>
    <UserContext.Provider value={user} >
      <ChildA/>
    </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
