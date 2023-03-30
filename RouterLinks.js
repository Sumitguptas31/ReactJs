import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import { BrowserRouter,Routes,Route,Link,Navigate } from "react-router-dom";
import NotFound404 from "./notfound404";
import RouteUser from "./RouteUser";
import NewRouteUser from "./RouteUser(1)";
function RouterApp(){
  return(
    <div>
        <BrowserRouter>
        <Link to="/newuser/sumit">user first</Link><br/>
        <Link to="/newuser/rohan">user second</Link><br/>
        <Link to="/newuser/sandeep">user third</Link><br/>
        <Link to="/newuser/john">user fourth</Link><br/>
        <Link to="/newuser/ankit">user fivth</Link><br/>
        <Link to="/newuser/vishal">user sixth</Link><br/>
        <Link to="/newuser/mohit">user seven</Link>
        <NavBar/>
        <Routes>
         <Route path="/home" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/*" element={<NotFound404/>}/>
         <Route path="/user/:name" element={<RouteUser/>}/>
        {/* <Route path="/*" element={<Navigate to="/home"/>}/> */}
        <Route path="/newuser/:name" element={<NewRouteUser/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default RouterApp