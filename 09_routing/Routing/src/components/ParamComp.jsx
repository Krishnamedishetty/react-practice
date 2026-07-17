import { useParams } from "react-router-dom"

const ParamComp = () => {
    const {id} = useParams();

  return (
    <div>
        Router Parameter: {id}
    </div>
  )
}

export default ParamComp