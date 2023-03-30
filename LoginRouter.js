import { useEffect } from "react"
import { Navbar } from "react-bootstrap"
import { BrowserRouter,Routes,Route, useNavigate } from "react-router-dom"
import About from "./About"
import Contact from "./contact"
import Home from "./Home"
import Login from "./Login"
import NavBar from "./NavBar"
import Protected from "./Protected"

function LoginRouter(){
  return(
    <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Protected Component={Home}/>}/>
            <Route path="/contact" element={<Protected Component={Contact}/>}/>
            <Route path="/about"  element={<About/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default LoginRouter