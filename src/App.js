
import './App.css';
import Rooms from './pages/Rooms';
import Villas from './pages/Villas';
import Services from './pages/Services';
import Navbar from './Navbar';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Header from './Header';
import BookForm from './BookForm';
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function PrintHeader()
{
    const location = useLocation();
    console.log(location);
    switch (location.pathname)
    {
        case "/":
            return <Header title="A luxury resort sits by a tropical beach"/>;
        case "/rooms":
            return <Header title="Enjoy a private and relaxing atmosphere"/>;
        case "/villas":
            return <Header title="Retreat together in our spectacular villas"/>;
        case "/services":
            return <Header title="Experience top-tier services. Because you deserve it."/>;
        case "/booking":
            return <Header title="Your pleasant vacation awaits"/>;
        default:
            return (
                <Header title="Hello"/>
            )
    }
    
}

function TransRoute() 
{
    const location = useLocation();
    
    return (
        <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="trans" timeout={1000}>
            <Routes>
                {/* <Route path="/" element={<Navbar />}> */}
                    <Route path="/" element={<Home />} />
                    <Route path='rooms' element={<Rooms />} />
                    <Route path='villas' element={<Villas />} />
                    <Route path='services' element={<Services />} />
                    <Route path='booking' element={<Booking />} />
                {/* </Route> */}
            </Routes>
        </CSSTransition>
      </TransitionGroup>
    )
}

function PrintNavBar() 
{
    const location = useLocation();
    return <Navbar location={location.pathname}></Navbar>;
}

function App() {
  

  return (
  <BrowserRouter>
      <PrintNavBar />
      <PrintHeader />
      <BookForm />
      <TransRoute />   
  </BrowserRouter>

  );
}

export default App;
