import React from "react";

import "./ServiceItem.scss"

const ServiceItem = ({
    icon,
    title
}) => {
    return (
        <div className='item'>
            {icon}
            <h4>{title}</h4>
        </div>
    )
}

export default ServiceItem;