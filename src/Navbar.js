import "./App.css";
import { Outlet, Link } from "react-router-dom";
import Logo from "./images/logo.jpg";

function CurrentNav(item, location)
{
    if (item === "/")
    {
        if (item === location)
            return(<strong>Home</strong>);
        else
            return("Home");
    }
    else
    {
        const path = "/" + item.toLowerCase();
        if (path === location)
            return(<strong>{item}</strong>);
        else
            return(item);
    }
    
}

function Navbar({location})
{
    const path = location;

    return (
        <nav>
            <ul className='navbar'>
                <li className="navlogo">
                    <Link to="/"><img src={Logo} className="logo" alt=""></img></Link>
                </li>
                <li className='navitem'>
                    <Link to="/">{CurrentNav("/", path)}</Link>
                </li>
                <li className='navitem'>
                    <Link to="rooms">{CurrentNav("Rooms", path)}</Link>
                </li>
                <li className='navitem'>
                    <Link to="villas">{CurrentNav("Villas", path)}</Link>
                </li>
                <li className='navitem'>
                    <Link to="services">{CurrentNav("Services", path)}</Link>
                </li>
                <li className='navitem'>
                    <Link to="booking">{CurrentNav("Booking", path)}</Link>
                </li>
            </ul>
            <Outlet />
        </nav>
    )
}

export default Navbar;