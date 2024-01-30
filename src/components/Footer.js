import React from 'react';
import './Footer.scss'
import FooterMenu from './FooterMenu';
import { Input, Button, Space } from 'antd';


const Footer = () => {

    const companyMenu = ["About Us", "Press Center", "News", "Careers", "Terms & Condition", "Privacy Policy"];
    const reserveMenu = ["Manage Booking", "Request Billing"];
    const supportMenu = ["Help", "FAQs", "Contact Us"]
    const newsMenu = ["Kindly subscribe to our newsletter to get latest deals on our rooms and vacation discount"];

    return (
        <div className='footer'>
            <div className='footerLogo'>
                <h1>Ressy Resort</h1>
                <p>Situated at the most calming and breathtaking area of the Paradise Island, you will feel the peacefulness and the relaxing atmosphere of the local sea, as well as the hospitality of the locals from our services.</p>
            </div>
            <FooterMenu title="Company" menu={companyMenu} />
            <FooterMenu title="Reservation" menu={reserveMenu} />
            <FooterMenu title="Support" menu={supportMenu} />
            <div className='newsletter'>
                <FooterMenu title="Newsletter" menu={newsMenu}></FooterMenu>
                <form>
                    <Space.Compact>
                        <Input placeholder='Email' />
                        <Button type="primary">Subscribe</Button>
                    </Space.Compact>
                </form>
            </div>
        </div>
    )
};

export default Footer;