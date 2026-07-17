import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/about");
  }

  return (
    <div>
      <div>Home</div>
      <button onClick={handleClick} >
        click me to go to about page
      </button>
    </div>

  )
}

export default Home