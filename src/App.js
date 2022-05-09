import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About';
import Appointment from './Components/Pages/Appointment';
import ContactUs from './Components/Pages/ContactUs';
import Home from './Components/Pages/Home/Home';
import Reviews from './Components/Pages/Reviews';
import Navbar from './Components/SharedPages/Navbar';

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
      </Routes>
    </div>
  );
}

export default App;
