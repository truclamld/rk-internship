import "./BookForm.scss";
import { useState } from "react";
import { DatePicker, Button, Select, InputNumber } from "antd";

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
        Room: ["Economy", "Superior", "Deluxe", "Premium"],
        Villa: ["Pine", "Palm", "Coconut", "Coral"]
    }
  
  
    const accomCat = Object.keys(accomList) //.map(option => { return {"value": option, "label": option}})
    

    const [accomType, setAccomType] = useState(accomList[accomCat[0]]);
    const [currType, setCurrType] = useState(accomList[accomCat[0]][0])


    const HandleAccomCat = (cat) => {
        setInfo(values => ({...values, "accomCat": cat}));
        setAccomType(accomList[cat]);
        setCurrType(accomList[cat][0]);
    }

    const HandleAccomType = (type) => {
        setCurrType(type);
    }

    const Reserve = () => {
        console.log(info);
    }

    return (
        <div className="booking-container">
            <form className="booking-form" onSubmit={Reserve}>
                <div className="field">
                    <label htmlFor="checkin">Check-in Date: </label>
                    {/* <input type="date" name="checkin" id="checkin" onChange={Entering}></input> */}
                    <DatePicker onChange={(date) => { setInfo(values => ({...values, "chkIn": date})) }}></DatePicker>
                </div>
                <div className="field">
                    <label htmlFor="checkout">Check-out Date: </label>
                    {/* <input type="date" name="checkout" id="checkout" onChange={Entering}></input> */}
                    <DatePicker onChange={(date) => { setInfo(values => ({...values, "chkOut": date})) }}></DatePicker>
                </div>
                <div className="field">
                    <label htmlFor="accomCat">Category: </label>
                    <Select defaultValue="Room" style={{ width: 120 }} onChange={ HandleAccomCat } options={accomCat.map(option => { return {"value": option, "label": option}})}></Select>
                </div>
                <div className="field">
                    <label htmlFor='accomType'>Type: </label>            
                    {/* <select value={info.accomType} name='accomType' id='accomType' onChange={Entering}>
                        {types[info.accomCat]}
                    </select> */}
                    <Select value={currType} style={{ width: 120 }} onChange={ HandleAccomType } options={accomType.map(option => { return {"value": option, "label": option}})}></Select>
                </div>
                <div className="field">
                    <label htmlFor="guestNo">Number of Guests: </label>
                    <InputNumber min={1} max={20} onChange={(guestNo) => { setInfo(values => ({...values, "guestNo": guestNo})) }} />
                </div>
                <div className="btn-booking">
                        <Button type="primary">Book now</Button>
                </div>
            </form>
        </div>
    )
}

export default BookForm;