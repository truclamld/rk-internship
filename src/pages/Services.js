import '../App.css';
import HeaderAccomService from '../components/HeaderAccomService';
import ServiceHeader from '../images/ServiceHeader.jpg';
import ServiceLayout from '../components/ServiceLayout';
import Restaurant from '../images/Restaurant.jpg';
import Bar from '../images/Bar.jpg';
import Spa from '../images/Spa.jpg';
import Sport from '../images/Sport.jpg';

function Services()
{
    const resDesc = "Our restaurants present you with an array of dining choices, from authentic local cuisine to a wide range of international dishes for everyone to enjoy."
    const barDesc = "Located close to the pool and the beach, our bartenders will cater your taste buds with selections of drinks and light meals while you are enjoying the scenery."
    const spaDesc = "Revitalize and re-energize your body and mind with the help of our professional therapists.";
    const sportDesc = "Spice up your vacation with one or multiple activities, whatever you want. Hop on a kayak and sail through the poetic tropical sea, or stroll through the hill and explore the local nature.";

    return(
        <div className='main'>
            <HeaderAccomService title="Services" subtitle="Our professionally trained staffs are ready to enhance your stay with the highest quality services." image={ServiceHeader} />
            <ServiceLayout title="Restaurants" subtitle={resDesc} image={Restaurant} />
            <ServiceLayout title="Bars" subtitle={barDesc} image={Bar} direction="row-reverse" />
            <ServiceLayout title="Spa" subtitle={spaDesc} image={Spa} />
            <ServiceLayout title="Sport & Recreation" subtitle={sportDesc} image={Sport} direction="row-reverse" />
        </div>
    )
}

export default Services;