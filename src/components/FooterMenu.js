import React from 'react';
import './Footer.scss'


const FooterMenu = ({title, menu}) => {

    const formatMenu = menu.map(item => {return <p>{item}</p>})

    return (
        <div className='footmenu'>
            <h2>{title}</h2>
            {formatMenu}
        </div>
    )
};

export default FooterMenu;