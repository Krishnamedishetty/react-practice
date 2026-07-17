
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
import './Navbar.css'

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""} > Home </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : ""}>About </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({isActive}) => isActive ? "active-link" : ""} > Contact </NavLink>
            </li>
            
        </ul>
    </div>
  )
}

export default Navbar