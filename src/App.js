
import './App.css';
import Rooms from './pages/Rooms';
import Villas from './pages/Villas';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Header from './components/Header';
import BookForm from './components/BookForm';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Layout from './components/Layout';
import { ConfigProvider } from 'antd';

const theme = {
    token: {
        colorPrimary: '#7C6A46',
        borderRadius: 5,

    },
}

function App() {
    return (
        <ConfigProvider theme={theme}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='rooms' element={<Rooms />} />
                        <Route path='villas' element={<Villas />} />
                        <Route path='services' element={<Services />} />
                        <Route path='booking' element={<Booking />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ConfigProvider>

    );
}

export default App;
