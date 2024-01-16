import "./Header.scss"
import headerImg from '../images/header.jpg'
import { Button } from "antd";
import BookForm from "./BookForm";

function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <h2>Ressy Resort</h2>
                <h1>A top-tier beachside escape laying on a tropical island</h1>
                <h4>Experience one-in-a-lifetime moments.</h4>
                <div className="button-group">
                    <div className="btn-booking">
                        <Button type="primary">Book now</Button>
                    </div>
                    <div className="btn-explore">
                        <div className="circle">
                            <div className="btn-play"></div>
                        </div>
                        <p>Explore more</p>
                    </div>
                </div>
            </div>
            <div className="header-image">
                <img src={headerImg} alt="header"></img>
            </div>
            <BookForm />
        </div>
    )
}

export default Header;