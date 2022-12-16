import { Link } from "react-router-dom"




const Navbar = () => <nav>
    <ul>
        <li>
            <Link to="/about">about</Link>
        </li>
        <li>
            <Link to="/card">card</Link>
        </li>
    </ul>
    {/* <li> <a href="/about"> about </a> </li>
    <li><a href="/card"> card</a></li> */}
</nav>
export default Navbar