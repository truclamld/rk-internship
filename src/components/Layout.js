import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Copyright from './Copyright';

const Layout = ({
    children
}) => {
    return <div>
        <Navbar />
        {children}
        <Footer />
        <Copyright />
    </div>
};

export default Layout;