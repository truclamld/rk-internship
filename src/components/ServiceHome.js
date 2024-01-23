import React from 'react';
import "./ServiceHome.scss"

import SwimmingIcon from '../components/svg/SwimingIcon';
import RestaurantIcon from '../components/svg/RestaurantIcon';
import BeachIcon from '../components/svg/BeachIcon';
import BarIcon from '../components/svg/BarIcon';
import GymIcon from '../components/svg/GymIcon';
import ForestIcon from '../components/svg/ForestIcon';
import GlobeIcon from '../components/svg/GlobeIcon';
import KidIcon from '../components/svg/KidIcon';
import SpaIcon from '../components/svg/SpaIcon';
import ShuttleIcon from '../components/svg/ShuttleIcon';
import ServiceItem from './ServiceItem';
import "@fontsource/poppins";


const ServiceHome = () => {
    return <div className='services'>
        <div className='intro'>
            <h1>Meet our top-tier services</h1>
            <h4>Our team will ensure that every moment during your stay worths it</h4>
        </div>
        <div className='menu'>
            <ServiceItem icon={<SwimmingIcon />} title="Infinity Swimming Pool" />
            <ServiceItem icon={<SpaIcon />} title="Relaxing Spa" />
            <ServiceItem icon={<GymIcon />} title="Fitness Center" />
            <ServiceItem icon={<RestaurantIcon />} title="World-class Restaurant" />
            <ServiceItem icon={<BarIcon />} title="Stylish Bar" />
        </div>
        <div className='menu'>
            <ServiceItem icon={<BeachIcon />} title="Peaceful and Pristine Beach" />
            <ServiceItem icon={<ForestIcon />} title="Nature Exploration" />
            <ServiceItem icon={<GlobeIcon />} title="Cultural Activities" />
            <ServiceItem icon={<KidIcon/>} title="Kids' Club" />
            <ServiceItem icon={<ShuttleIcon />} title="Shuttle Services" />
        </div>
    </div>
};

export default ServiceHome;