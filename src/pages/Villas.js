import HeaderAccomService from '../components/HeaderAccomService';
import VillaHeader from '../images/VillaHeader.jpg';

function Villas()
{
    return(
        <div className='main'>
            <HeaderAccomService title="Villas" subtitle="Those stylish villas with exceptional tropical views will surely satisfy your need for a memorable vacation. Good for sharing with family or friends." image={VillaHeader} />
        </div>
    )
}

export default Villas;