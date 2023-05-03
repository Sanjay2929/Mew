import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import Hero from './components/Hero';
import Appointment from './components/Appointment';
import Services from './components/Services';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Preloader from './components/Preloader';
import Facilities from './components/Facilities';

function App() {
  return (
    <div className='bg_body'>
      <Preloader/>
      <Navbar />
      <Hero />  
      <Appointment />
      <Services />
      <Facilities />
      
      <BackToTop />
    </div>
  );
}

export default App;
