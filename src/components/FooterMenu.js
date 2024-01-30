import React from 'react';
import './Footer.scss';
import "@fontsource/raleway";


const FooterMenu = ({title, menu}) => {

    const formatMenu = menu.map(item => {return <p key={item}>{item}</p>})

    return (
        <div className='footmenu'>
            <h2>{title}</h2>
            {formatMenu}
        </div>
    )
};

export default FooterMenu;