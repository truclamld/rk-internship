import HeaderAccomService from '../components/HeaderAccomService';
import VillaHeader from '../images/VillaHeader.jpg';
import Accommodation from '../components/Accommodation';
import Pine from "../images/Pine.jpg";
import Palm from "../images/Palm.jpg";
import Coconut from "../images/Coconut.jpg";
import Coral from "../images/Coral.jpg";


function Villas()
{
    const pineDesc = "Situated along the artificial lagoon among the lovely garden, these villas provide a quiet atmosphere for those seeking for a place to calm their mind. Relax together with your loved ones in the villa's two bedrooms decorated with local inspiration.";
    const palmDesc = "Located on the highest point of the resort, you will enjoy both the panoramic view of the ocean and the surrounding forest while spending your time in the private pool. The large ceiling-to-floor windows will ensure the spectacular view will never be obstructed whether indoor or outdoor.";
    const cocoDesc = "This villa is equipped with a dedicated footpath that leads to the sun-drenched beach with white shiny sand, allows you to experience a stunning scene of early sunrise only a few steps away from your bedroom. You can bring even more friends or relatives along to stay in the villa's spacious three bedrooms.";
    const coralDesc = "Our most beloved villa, laying straight up front at the ocean. Enjoy the view of the beach and its sound of crashing wave directly from one of the four finely decorated bedrooms. Spend more time having fun with your family and friends at the villa's own lovely private garden.";

    return(
        <div className='main'>
            <HeaderAccomService title="Villas" subtitle="Those stylish villas with exceptional tropical views will surely satisfy your need for a memorable vacation. Good for sharing with family or friends." image={VillaHeader} />
            <Accommodation title="Pine" desc={pineDesc} image={Pine}/>
            <Accommodation title="Palm" desc={palmDesc} image={Palm}/>
            <Accommodation title="Coconut" desc={cocoDesc} image={Coconut}/>
            <Accommodation title="Coral" desc={coralDesc} image={Coral}/>
        </div>
    )
}

export default Villas;