import { Link,useLocation } from "react-router-dom"

function Home(){
    const location=useLocation()
    console.log(location)
    return(
        <div>
            <h1>This is Home Page</h1>
            <p>welcome to our home page </p>
            <p>click here to go to the about page</p>
            <Link to="/about" state={{name:"sumit gupta",age:23}}>go to the about page</Link>
            
        </div>
    )
}
export default Home