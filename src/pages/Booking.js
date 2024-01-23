import HeaderAccomService from '../components/HeaderAccomService';
import MainBooking from '../components/MainBooking';
import BookingImg from '../images/Booking.jpg';

function Booking() {

  return (
    <div className="main">

      <HeaderAccomService title="Reservation" subtitle="Your pleasant vacation awaits." image={BookingImg}/>

      <MainBooking />
      
    </div>
  );
}

export default Booking;
