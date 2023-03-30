import { Link, Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Contact(){
    let navigate=useNavigate()
    return(
        <div>
            <h1>This is contact Page</h1>
            <p>welcome to our contact page </p>
            <p>click here to go to the home page</p>
            <Link to="company">company</Link><br/>
            <Link to="chennal">chennal</Link><br/>
            <Link to="other">other</Link><br/>
            <Outlet/>
            {/* <button onClick={()=>{navigate("/")}}>go to the main page</button> */}
        </div>
    )
}
export default Contact