// import React from 'react'

const Button = (props) => {
  return (
    <div>
        <h1>{props.count}</h1>
        <button onClick={props.handleClick} >
        {props.text}
    </button>
    </div>
  )
}

export default Button