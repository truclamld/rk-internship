import "@fontsource/poppins";
import "./Navbar.scss";
import { Outlet, Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import { Button } from "antd";

function CurrentNav(item, location) {
    if (item === "/") {
        if (item === location)
            return (<strong>Home</strong>);
        else
            return ("Home");
    }
    else {
        const path = "/" + item.toLowerCase();
        if (path === location)
            return (<strong>{item}</strong>);
        else
            return (item);
    }

}

function Navbar({ location }) {
    const path = location;

    return (
        <nav className="nav-container">
            <div className="logo">
                <img src={Logo} className="logo" alt=""></img>
            </div>
            <ul className='nav-content'>
                <li className='nav-item'>
                    <Link to="/">{CurrentNav("/", path)}</Link>
                </li>
                <li className='nav-item'>
                    <Link to="rooms">{CurrentNav("Rooms", path)}</Link>
                </li>
                <li className='nav-item'>
                    <Link to="villas">{CurrentNav("Villas", path)}</Link>
                </li>
                <li className='nav-item'>
                    <Link to="services">{CurrentNav("Services", path)}</Link>
                </li>
                <li className='nav-item'>
                    <Link to="booking">{CurrentNav("Booking", path)}</Link>
                </li>
            </ul>
            <div className="btn-booking">
                <Button type="primary">Book now</Button>
            </div>
            <Outlet />
        </nav>
    )
}

export default Navbar;