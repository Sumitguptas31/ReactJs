import { Link } from "react-router-dom";

function NavBar() {
    return (
        <ul>
            <li>
                <Link to="/home">Home</Link>
                {/* <a href="/home">Home</a> */}
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/user/anil">anil</Link>
            </li>
            <li>
                <Link to="/user/peter">peter</Link>
            </li>
        </ul>
    )
}
export default NavBar
//we will not use href because it will refresh our page but using link it will not refresh our page