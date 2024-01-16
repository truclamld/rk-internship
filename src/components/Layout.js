import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';


const Layout = ({
    children
}) => {
    return <div>
        <Navbar />
        <Header />
        {children}
        <Footer />
    </div>
};

export default Layout;