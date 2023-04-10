import { Link } from "react-router-dom";
import './Navbar.css';
export default function NavBar () {
    return (
        <>
        <img src='https://wallpapercave.com/wp/wp5063339.png' alt = "Nitflex"/>
        <nav>
            <ul>
                <li><Link className="link" to = '/'>Home</Link></li>
                <li><Link className="link" to = '/favorite'>Favorite</Link></li>
                <li>Movies</li>
            </ul>
        </nav>
        </>
    )
}

