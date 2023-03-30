import { useParams } from "react-router"

function RouteUser(){
    const params=useParams()
    const {name}=params
    console.log(name)
 return(
    <div>
        <h1>this is {name} </h1>
    </div>
 )
}
export default RouteUser