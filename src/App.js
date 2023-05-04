import './App.css';
import '../src/App2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import Hero from './components/Hero';
import Appointment from './components/Appointment';
import Services from './components/Services';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import Decodblog from './components/Decodblog';
import OurGroomers from './components/OurGroomers';
import Preloader from './components/Preloader';
import Facilities from './components/Facilities';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
    setTimeout(() => {
     document.body.classList.add("overflow_hidden");
    document.getElementById("none").style.display = "none";
    document.body.classList.remove("overflow_hidden");
  }, 3000);

    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='bg_body overflow_X_hidden'>
      <Preloader/>
      <Navbar />
      <Hero />  
      <Appointment />
      <Services />
      <Facilities />
      <OurGroomers/>
      <Decodblog/>
      <Footer/>
      
      <BackToTop />
    </div>
  );
}

export default App;
