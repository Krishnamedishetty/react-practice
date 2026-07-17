
const Card = (props) => {
  return (
    <div>
        <h2>my name is {props.name}</h2>
        <h2>my age is {props.age}</h2>
        <h4>{props.children}</h4>
        <p>------------------------</p>
    </div>
  )
}

export default Card