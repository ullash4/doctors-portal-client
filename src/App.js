import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Appointment from './Components/Pages/Appointmet/Appointment';
import ContactUs from './Components/Pages/ContactUs';
import Home from './Components/Pages/Home/Home';
import Reviews from './Components/Pages/Reviews';
import Footer from './Components/SharedPages/Footer';
import Navbar from './Components/SharedPages/Navbar';
import NotFoundPage from './Components/SharedPages/NotFoundPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/*' element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
