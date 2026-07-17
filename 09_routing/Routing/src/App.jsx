import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import Mocktests from './components/Mocktests';
import Reports from './components/Reports';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/about",
      element: 
      <div>
        <Navbar />
        <About />
      </div>,
      children:
      [
        {
          path: "courses",
          element: <Courses/>
        }, 
        {
          path: "mock-tests",
          element: <Mocktests/>

        }, 
        {
          path: "reports",
          element: <Reports/>

        }
      ]
    },
    {
      path: "/contact",
      element: 
      <div>
        <Navbar />
        <Contact />
      </div>
    },
    {
      path: "/student/:id",
      element: 
      <div>
        <Navbar />
        <ParamComp />
      </div>
    }
  ]
);

function App() {  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
