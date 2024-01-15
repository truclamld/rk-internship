import '../App.css';
import Pool from "../images/pool.png";
import Spa from "../images/spa.png";

function Home()
{
    return (
    
    <div className="App main">
        <div className='Introduction'></div>
        <div className='Services'>
            <h1>Meet our top-tier services</h1>
            <div className='ServiceMenu'>
                <div className='ServiceItem'>
                    <img src={Pool} className='ServiceIcon' alt='Pool Icon'></img>
                    <h4>Infinity Swimming Pool</h4>
                </div>
                <div className='ServiceItem'>
                    <img src={Spa} className='ServiceIcon' alt='Spa Icon'></img>
                    <h4>Relaxing Spa</h4>
                </div>
            </div>
        </div>
       

    </div>
        
    );
}

export default Home;