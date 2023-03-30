import { BrowserRouter,Routes,Route} from "react-router-dom"
import About from "./About"
import Contact from "./contact"
import Home from "./Home"
import NavOnClick from "./NavOnClick"

function MyNavOnClick(){
return(
    <div>
        <BrowserRouter>
       <NavOnClick/>
        <Routes>
         <Route path="/home" element={<Home/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/about" element={<About/>}/>
        </Routes>
        </BrowserRouter>
    </div>
)
}
export default MyNavOnClick