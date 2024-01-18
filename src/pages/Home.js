import AccomHome from '../components/AccomHome';
import Header from '../components/Header';
import ServiceHome from '../components/ServiceHome';
import RoomHome from "../images/RoomHome.jpg";
import VillaHome from "../images/VillaHome.jpg";
import Economy from "../images/Economy.jpg";
import Superior from "../images/Superior.jpg";
import Deluxe from "../images/Deluxe.jpg";
import Premium from "../images/Premium.jpg";
import Pine from "../images/Pine.jpg";
import Palm from "../images/Palm.jpg";
import Coconut from "../images/Coconut.jpg";
import Coral from "../images/Coral.jpg";

function Home() {

    const RoomSet = [
        {Name: "Economy", Img: Economy},
        {Name: "Superior", Img: Superior},
        {Name: "Deluxe", Img: Deluxe},
        {Name: "Premium", Img: Premium}
    ];
    const VillaSet = [
        {Name: "Pine", Img: Pine},
        {Name: "Palm", Img: Palm},
        {Name: "Coconut", Img: Coconut},
        {Name: "Coral", Img: Coral}
    ];

    return (
        <div className="main">
            <Header />
            <ServiceHome />
            <AccomHome title="Rooms" subtitle="Enjoy your own space with our private rooms, freshened by the nature" images={RoomHome} itemSet={RoomSet} />
            <AccomHome title="Villas" subtitle="A dedicated accommodation for your best ever experience" images={VillaHome} itemSet={VillaSet} />
        </div>

    );
}

export default Home;