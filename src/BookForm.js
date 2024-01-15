import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Booking from "./pages/Booking";

function BookForm() 
{

    const [info, setInfo] = useState({
        accomCat: '...',
        accomType: '',
        chkIn: '',
        chkOut: '',
        guestNo: ''
      });

    const accomList = {
        "...": [],
        Room: ["Economy", "Superior", "Deluxe", "Premium"],
        Villa: ["Mangroove", "Pine", "Coconut", "Palm"]
    }
  
  
    const accomCat = Object.keys(accomList).map(option => <option key={option} value={option}>{option}</option>)
    const rooms = accomList.Room.map(room => <option key={room} value={room}>{room}</option>);
    const villas = accomList.Villa.map(villa => <option key={villa} value={villa}>{villa}</option>);
    const types = {
      '...': [],
      Room: rooms,
      Villa: villas
    }

    const Entering = (e) => {
      
        const name = e.target.name;
        const value = e.target.value;
        setInfo(values => ({...values, [name]: value}))
        accomList.select = info.accomCat;
    }

    return (
        <div className="App book">
            <form>
                <div>
                    <label htmlFor="checkin">Check-in Date: </label>
                    <input type="date" name="checkin" id="checkin" onChange={Entering}></input>
                </div>
                <div>
                    <label htmlFor="checkout">Check-out Date:</label>
                    <input type="date" name="checkout" id="checkout" onChange={Entering}></input>
                </div>
                <div>
                    <label htmlFor="accomCat">Category: </label>
                    <select value={info.accomCat} name="accomCat" id="accomCat" onChange={Entering}>
                        {accomCat}
                    </select>
                </div>
                <div>
                    <label htmlFor='accomType'>Type: </label>            
                    <select value={info.accomType} name='accomType' id='accomType' onChange={Entering}>
                        {types[info.accomCat]}
                    </select>
                </div>
                <div>
                    <label htmlFor="guestNo">Number of Guests: </label>
                    <input type="number" min={1} max={20} name="guestNo" id="guestNo" onChange={Entering}></input>
                </div>
                <input type="submit" className="button" value="Book"></input>
            </form>
        </div>
    )
}

export default BookForm;