import "./App.css";
import { Outlet, Link } from "react-router-dom";

function Navbar()
{
    return (
        <nav>
            <ul className='navbar'>
            <li className='navitem'>
                <Link to="/">Home</Link>
            </li>
            <li className='navitem'>
                <Link to="rooms">Rooms</Link>
            </li>
            <li className='navitem'>
                <Link to="villas">Villas</Link>
            </li>
            <li className='navitem'>
                <Link to="services">Services</Link>
            </li>
            <li className='navitem'>
                <Link to="booking">Reservation</Link>
            </li>
            </ul>
            <Outlet />
        </nav>
    )
}

export default Navbar;