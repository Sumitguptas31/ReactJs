import { useEffect } from "react"
import { useNavigate } from "react-router"

function Login(){
    let navigate=useNavigate()
    function CheckLogin(){
        localStorage.setItem("login",true)
    }
    useEffect(()=>{
        let login=localStorage.getItem("login")
        if(login){
            navigate("/")
        }
    })
 return(
    <div>
        <h1>Login Page</h1>
        <input type="text"/><br/><br/>
        <input type="text"/><br/><br/>
        <button onClick={()=>{CheckLogin()}}>Login</button>
    </div>
 )
}
export default Login