import HeaderAccomService from '../components/HeaderAccomService';
import RoomHeader from "../images/RoomHeader.jpg";
import Accommodation from '../components/Accommodation';
import Economy from "../images/Economy.jpg";

function Rooms()
{

    const economyDesc = "Our most affordable room but still providing great experience. Feel the refeshing tropical breeze from the garden blowing through the window, and relax your mind around the light-themed decoration and comfortable bed.";
    

    return(
        <div className='main'>
            <HeaderAccomService title="Rooms" subtitle="Carefully designed rooms with garden or ocean view that will make your vacation pleasant." image={RoomHeader} />
            <Accommodation title="Economy" desc={economyDesc} image={Economy}/>

        </div>
    )
}

export default Rooms;