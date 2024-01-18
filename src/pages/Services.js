import '../App.css';
import HeaderAccomService from '../components/HeaderAccomService';
import ServiceHeader from '../images/ServiceHeader.jpg';

function Services()
{
    return(
        <div className='main'>
            <HeaderAccomService title="Services" subtitle="Our professionally trained staffs are ready to enhance your stay with the highest quality services." image={ServiceHeader} />
        </div>
    )
}

export default Services;