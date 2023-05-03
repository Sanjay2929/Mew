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
<<<<<<< HEAD
import Footer from './components/Footer';
import Decodblog from './components/Decodblog';
import OurGroomers from './components/OurGroomers';
=======
import Preloader from './components/Preloader';
import Facilities from './components/Facilities';
>>>>>>> 24830b777d9348405de24fbe06e7bd360e9b297a

function App() {
  return (
    <div className='bg_body'>
      <Preloader/>
      <Navbar />
      <Hero />  
      <Appointment />
      <Services />
<<<<<<< HEAD
      <OurGroomers/>
      <Decodblog/>
      <Footer/>
=======
      <Facilities />
      
>>>>>>> 24830b777d9348405de24fbe06e7bd360e9b297a
      <BackToTop />
    </div>
  );
}

export default App;
