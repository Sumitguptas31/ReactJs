import { BrowserRouter,Routes,Route, useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./About";
import Chennal from "./Chennal";
import Company from "./Company";
import Contact from "./contact";
import Home from "./Home";
import Other from "./Other";

function NestedRouter(){
    
    return(
        <div>
            <h1>Nested Router</h1>
            <BrowserRouter>
            <Link to="/home">home</Link><br/>
            <Link to="/about">about</Link><br/>
            <Link to="/contact">contact</Link><br/>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>}/>
                <Route path="/contact/" element={<Contact/>}>
                    <Route path="company" element={<Company/>}/>
                    <Route path="chennal" element={<Chennal/>}/>
                    <Route path="other" element={<Other/>}/>
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default NestedRouter