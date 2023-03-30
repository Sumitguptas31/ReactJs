import { useParams } from "react-router"
function NewRouteUser(){
    let params=useParams()
    const {name}=params
    return(
        <div>
            <h1>this is {name}</h1>
        </div>
    )
}
export default NewRouteUser