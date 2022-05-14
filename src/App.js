import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Appointment from './Components/Pages/Appointmet/Appointment';
import ContactUs from './Components/Pages/ContactUs';
import Home from './Components/Pages/Home/Home';
import LogIn from './Components/Pages/LogIn';
import Reviews from './Components/Pages/Reviews';
import SignUp from './Components/Pages/SignUp';
import Footer from './Components/SharedPages/Footer';
import Navbar from './Components/SharedPages/Navbar';
import NotFoundPage from './Components/SharedPages/NotFoundPage';
import RequireAuth from './Components/SharedPages/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/appointment' element={
        <RequireAuth>
          <Appointment />
        </RequireAuth>
        }></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/*' element={<NotFoundPage />}></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
