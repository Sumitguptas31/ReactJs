import { Link } from "react-router-dom"

function About(){
    return(
        <div>
            <h1>This is About Page</h1>
            <p>hi welcome to our about page</p>
            <p> click below to go to the home page</p>
            <Link to="/home">go to the home page</Link>
        </div>
    )
}
export default About