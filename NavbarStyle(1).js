import { Link,NavLink } from "react-router-dom"

function MyNavBar(){
 return(
    <div>
        <ul className="navbar">
            <li><NavLink 
            style={({isActive})=>{return{color:isActive?"red":""}}} className="nav-bar-link" to="/home">home</NavLink></li>
            <li><NavLink 
              style={({isActive})=>{return{color:isActive?"red":""}}} className="nav-bar-link" to="/about">about</NavLink></li>
            <li><NavLink className="nav-bar-link" 
              style={({isActive})=>{return{color:isActive?"red":""}}} to="/contact">contact</NavLink></li>
              <li><Link to="/filter">Filter</Link></li>
        </ul>
    </div>
 )
}
export default MyNavBar