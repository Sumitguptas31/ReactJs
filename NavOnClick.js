import { useNavigate } from "react-router"
function NavOnClick(){
    let navigate=useNavigate()
    let x=false
    function navigateMain(){
        if(x===true){
        return navigate("/")
        }
        else{
            return navigate("/home")
        }
    }
 return(
    <div>
        <h1>navigation on click</h1>
        <button onClick={()=>{navigate("/contact")}}>go to the contact page</button>
        <button onClick={()=>{navigateMain()}}>go to the main page</button>
    
    </div>
 )
}
export default NavOnClick