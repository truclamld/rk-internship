import HeaderAccomService from '../components/HeaderAccomService';
import RoomHeader from "../images/RoomHeader.jpg";
import Accommodation from '../components/Accommodation';
import Economy from "../images/Economy.jpg";
import Superior from "../images/Superior.jpg";
import Deluxe from "../images/Deluxe.jpg";
import Premium from "../images/Premium.jpg";

function Rooms()
{

    const economyDesc = "Our most affordable room but still providing great experience. Feel the refeshing tropical breeze from the garden blowing through the window, and relax your mind around the light-themed decoration and comfortable bed.";
    const superiorDesc = "Situated near the infinity pool, Superior rooms offer convenience for guests with most of our facilities within under-a-minute walking distance. The playful decor of the room helps to alleviate the worries and ensure your vacation is only for the happiness.";
    const deluxeDesc = "Choice between pool view and ocean view. Whatever the view is, you will get access to a spacious room with king-sized bed and private balcony which provides a breathtaking scenery.";
    const premiumDesc = "Our most luxurious room with a spectacular view of the sea. Enjoy the smoothing sound of ocean waves while kicking back and relax on your own spacious balcony. Spacious room with sofa for either a little rest or having fun with your loved one.";

    return(
        <div className='main'>
            <HeaderAccomService title="Rooms" subtitle="Carefully designed rooms with garden or ocean view that will make your vacation pleasant." image={RoomHeader} />
            <Accommodation title="Economy" desc={economyDesc} image={Economy}/>
            <Accommodation title="Superior" desc={superiorDesc} image={Superior}/>
            <Accommodation title="Deluxe" desc={deluxeDesc} image={Deluxe}/>
            <Accommodation title="Premium" desc={premiumDesc} image={Premium}/>
        </div>
    )
}

export default Rooms;