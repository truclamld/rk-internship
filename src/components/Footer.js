import React from 'react';
import './Footer.scss'
import FooterMenu from './FooterMenu';
import { Input, Button } from 'antd';


const Footer = () => {

    const companyMenu = ["About Us", "Press Center", "News", "Careers", "Terms & Condition", "Privacy Policy"];
    const reserveMenu = ["Manage Booking", "Request Billing"];
    const supportMenu = ["Help", "FAQs", "Contact Us"]
    const newsMenu = ["Kindly subscribe to our newsletter to get latest deals on our rooms and vacation discount"];

    return (
        <div className='footer'>
            <div className='footerLogo'>
                <h1>Ressy Resort</h1>
                <p>The service at the Ressy Resort was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us)</p>
            </div>
            <FooterMenu title="Company" menu={companyMenu} />
            <FooterMenu title="Reservation" menu={reserveMenu} />
            <FooterMenu title="Support" menu={supportMenu} />
            <div className='newsletter'>
                <FooterMenu title="Newsletter" menu={newsMenu}></FooterMenu>
                <form>
                    <Input placeholder='Email' />
                    <Button type="primary">Subscribe</Button>
                </form>
            </div>
        </div>
    )
};

export default Footer;