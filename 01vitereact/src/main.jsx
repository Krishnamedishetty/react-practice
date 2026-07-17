import {} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//     return(
//         <div>
//             <h1>custom app!</h1>
//         </div>
//     )
// }

// const Hello = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'Click me to visit google'
// }

createRoot(document.getElementById('root')).render(

     <App />

)
