import HeaderAccomService from '../components/HeaderAccomService';
import RoomHeader from "../images/RoomHeader.jpg";

function Rooms()
{
    return(
        <div className='main'>
            <HeaderAccomService title="Rooms" subtitle="Carefully designed rooms with garden or ocean view that will make your vacation pleasant." image={RoomHeader} />
        </div>
    )
}

export default Rooms;