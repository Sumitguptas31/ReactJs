import { useEffect } from "react";
import { useNavigate } from "react-router";

function Protected(props){
    const {Component}=props
    let navigate=useNavigate()
    useEffect(()=>{
        let login= localStorage.getItem("login");
        if(!login){
            navigate("/login")
        }
    })
   return(
    <div>
        <Component/>
    </div>
   )
}
export default Protected