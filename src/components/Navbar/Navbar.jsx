import { Link } from "react-router-dom"
import "./navbar.css"

export const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/players">Roster</Link>
                <Link to="/schedule">Schedule</Link>
            </nav>
        </div>
    )
};