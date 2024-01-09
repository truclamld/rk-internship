
import { useState } from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';

function Booking() {

  const [info, setInfo] = useState({
    FirstName: '',
    LastName: '',
    accomCat: '',
    accomType: '',
    Email: '',
    Phone: ''
  });

  const accomList = {
    select: "...",
    option: {
      "...": [],
      Room: ["Economy", "Superior", "Deluxe", "Premium"],
      Villa: ["Mangroove", "Pine", "Coconut", "Palm"]
    }
  }


  const accomCat = Object.keys(accomList.option).map(option => <option key={option} value={option}>{option}</option>)
  const rooms = accomList.option.Room.map(room => <option key={room} value={room}>{room}</option>);
  const villas = accomList.option.Villa.map(villa => <option key={villa} value={villa}>{villa}</option>);

  const Entering = (e) => {
      
      const name = e.target.name;
      const value = e.target.value;
      setInfo(values => ({...values, [name]: value}))
  }

  function validate(info)
  {
      const letterField = ["FirstName",  "LastName"];
      let letter = /^[A-Za-z]+$/i;
      //let number = /^[0-9]+$/g;
      let email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      //  let alpnum = /^[A-Za-z0-9]+$/g;
      let errorField = []
      for (let label in info)
      {
        if (letterField.includes(label) && !info[label].match(letter))
          errorField.push(label);
        if (label === "Email" && !info[label].match(email))
          errorField.push(label);
      }
      return errorField;
  }

  const Reserve = (e) => {
      e.preventDefault();
      if (validate(info).length !== 0)
      {  
        alert("Please enter: " + validate(info));

      }
      else
        alert(info);
  }

  return (
    <div className="App main">
        
        <h1>Hotel Reservation System</h1>
        
        <form onSubmit={Reserve}>
          <div className='field' >
              <label htmlFor='acommType'>Category: </label>
              <select value={info.accomCat} name="accomCat" id="accomCat" onChange={(e) => {Entering(e)}}>
                  <option value="">...</option>
                  {/* <option value="Room">Room</option>
                  <option value="Villa">Villa</option> */}
                  {accomCat}
              </select>
          </div>

          <div className='field'>
            <label htmlFor='accomType'>Type: </label>            
            <select value={info.accomType} name='accomType' id='accomType' onChange={Entering}></select>
          </div>
          
          <div className='nameField'>
                <div className='field'>
                    <label htmlFor='FirstName'>First Name: </label>
                    <input type='text' id='FirstName' name='FirstName' value={info.FirstName} onChange={Entering}></input>
                </div>
                
                <div className='field'>
                    <label htmlFor='LastName'>Last Name: </label>
                    <input type='text' id='LastName' name='LastName' value={info.LastName} onChange={Entering}></input>
                </div>
          </div>

          <div className='field'>
            <label htmlFor='Email'>Email:</label>
            <input type="email" name='Email' id='Email' value={info.Email} onChange={Entering}></input>
          </div>
          
          <div className='field'>
            <label htmlFor='Phone'>Phone Number:</label>
            <input type="number" name="Phone" id="Phone" value={info.Phone} onChange={Entering}></input>
          </div>
          
          <input type='submit' id='submit' value='Submit'></input>
        </form>
      </div>
  );
}

export default Booking;
