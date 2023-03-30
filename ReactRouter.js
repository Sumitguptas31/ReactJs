import Home from "./Home"
import About from "./About"
import {BrowserRouter,Route,Routes} from "react-router-dom"
function ReactRouter(){
  return(
    <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<h1>this is our main page</h1>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}
export default ReactRouter