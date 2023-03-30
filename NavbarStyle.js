import { Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import MyNavBar from "./NavbarStyle(1)"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Filter from "./filter"
function NavBarStyle(){
    return(
        <div>
            <h1>Navigation bar</h1>
            <BrowserRouter>
            {/* <Link to="/home">home</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link> */}
            <MyNavBar/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>  
                <Route path="/filter" element={<Filter/>}/> 

            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default NavBarStyle